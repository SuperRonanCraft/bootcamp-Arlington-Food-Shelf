const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Order, OrderItem } = require('../../models/index');

router.get('/', (req, res) => {
  Order.findAll().then((data) => {
    const orders = data.map((obj) => obj.get({ plain: true }));
    console.log(orders);
    res.json(orders);
  });
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
    const result = await sequelize.transaction(async (t) => {
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

      const orderItems = await OrderItem.bulkCreate(order_data, {
        transaction: t,
      });

      res.status(201).json(orderItems);
    });
  } catch (err) {
    // The transaction has been rolled back automatically by Sequelize!
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
