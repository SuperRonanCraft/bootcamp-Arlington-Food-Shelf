// Importing the Express module and creating a router instance
const router = require('express').Router();
// Importing the Sequelize instance for database connection
const sequelize = require('../../config/connection');
// Importing necessary models from the models/index file
const { Order, OrderItem, User, Inventory } = require('../../models/index');
// Importing helper functions for order-related operations
const { orderData, orderMap } = require('../../utils/helpers');

// Route to fetch all orders
router.get('/', (req, res) => {
  // Finding all orders and including associated data using orderData helper
  Order.findAll({
    include: orderData,
  }).then((data) => {
    // Mapping the retrieved data to a desired format using orderMap function
    const orders = data.map(orderMap);
       // Logging the orders to the console
    console.log(orders);
    // Sending a JSON response with the orders
    res.json(orders);
  });
});

//Delete an order
router.delete('/:id', async (req, res) => {
  try {
     // Deleting the order with the specified ID
    const deletedOrder = await Order.destroy({ where: { id: req.params.id } });
    // Sending a response indicating whether the order was deleted successfully
    res
      .status(200)
      .json({ deleted: deletedOrder >= 1 ? true : false, deletedOrder });
  } catch (err) {
     // Handling errors by logging and sending an error response
    console.log(err);
    res.status(500).send(err);
  }
});

//Create a new Order
router.post('/', async (req, res) => {
    // Checking if the user is logged in
  if (!req.session.user_id) {
    res.status(404).json({
      message: 'Must be logged in to create a new order!',
    });
    return;
  }

  //Array of objects with inventory_id and stock
  const { order_data } = req.body;

  try {
    //Start of SQL transaction (if an error happens, it will rollback automatically)
    const order_id = await sequelize.transaction(async (t) => {
      // Creating a new order with the user ID from the session
      const order = await Order.create(
        {
          user_id: req.session.user_id,
        },
        { transaction: t },
      );
// Creating an array to store order items
      const orderArray = [];
// Iterating over order data to create order items
      for (const item of order_data) {
        const { inventory_id, stock } = item;
        const itemObj = {
          inventory_id,
          stock,
          order_id: order.id,
        };
        orderArray.push(itemObj);
      }
      // Bulk creating order items associated with the newly created order
      await OrderItem.bulkCreate(orderArray, {
        transaction: t,
      });
      return order.id;
    });
    //Transaction closed with no errors

    //Grabbing new order with user and orderItems data
    const orderCompleted = await Order.findOne({
      where: {
        id: order_id,
      },
      include: orderData,
    });

    res.status(201).json(orderCompleted);
  } catch (err) {
    // The transaction has been rolled back automatically by Sequelize after error!
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
