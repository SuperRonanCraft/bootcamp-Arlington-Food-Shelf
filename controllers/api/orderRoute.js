const router = require('express').Router();
const { Order } = require('../../models/index');

router.get('/', (req, res) => {
  Order.findAll().then((data) => {
    const orders = data.map((obj) => obj.get({ plain: true }));
    console.log(orders);
    res.json(orders);
  });
});

router.post('/', (req, res) => {
  const { order_data } = req.body;
  console.log(order_data);
  Order.cre;
  //   Order.findAll().then((data) => {
  //     const orders = data.map((obj) => obj.get({ plain: true }));
  //     console.log(orders);
  //     res.json(orders);
  //   });
});

module.exports = router;
