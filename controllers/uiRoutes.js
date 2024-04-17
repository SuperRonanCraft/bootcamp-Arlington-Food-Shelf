// Purpose: To render the homepage and login page
const router = require('express').Router();
const { Inventory, Order } = require('../models');
const auth = require('../utils/auth');
const { inventoryData, orderData, orderMap } = require('../utils/helpers');

// Homepage Route
router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

// About Route
router.get('/about', (req, res) => {
  res.render('about', {
    loggedIn: req.session.loggedIn,
  });
});

// Order Route
// router.get('/order', auth, (req, res) => {
//   Inventory.findAll({ include: inventoryData })
//     .then((data) => {
//       const stock = data.map((obj) => obj.get({ plain: true }));
//       res.render('order', { stock });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(err);
//     });
// });

router.get('/orders', auth, (req, res) => {
  Order.findAll({ where: { user_id: req.session.user_id }, include: orderData })
    .then((data) => {
      const orders = data.map(orderMap);
      res.render('orders', { orders, loggedIn: req.session.loggedIn });
      console.log(orders);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// Resources Route
router.get('/resources', (req, res) => {
  res.render('resources', {
    loggedIn: req.session.loggedIn,
  });
});

// Stock Route
router.get('/stock', (req, res) => {
  Inventory.findAll({ include: inventoryData })
    .then((data) => {
      const stock = data.map((obj) => obj.get({ plain: true }));
      console.log(req.session.loggedIn);
      res.render('menu', { stock, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// Login Route
router.get('/login', (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) res.redirect('/');
  else res.render('login');
});

//Kicks back to home if invalid url
router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
