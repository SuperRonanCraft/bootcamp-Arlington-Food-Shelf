const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Order, OrderItem, User, Inventory } = require('../../models/index');
const { orderData, orderMap } = require('../../utils/helpers');

router.get('/', (req, res) => {
  Order.findAll({
    include: orderData,
  }).then((data) => {
    const orders = data.map(orderMap);
    console.log(orders);
    res.json(orders);
  });
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Order.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: deleted >= 1 ? true : false });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
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
      const order = await Order.create(
        {
          user_id: req.session.user_id,
        },
        { transaction: t },
      );

      const orderArray = [];

      for (const item of order_data) {
        const { inventory_id, stock } = item;
        const itemObj = {
          inventory_id,
          stock,
          order_id: order.id,
        };
        orderArray.push(itemObj);
      }
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
