// Purpose: To render the homepage and login page
const router = require('express').Router();
const { Inventory } = require('../models');
const auth = require('../utils/auth');
const { inventoryData } = require('../utils/helpers');

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
router.get('/order', auth, (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render('order', {
    loggedIn: req.session.loggedIn,
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
      res.render('menu', { stock });
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

module.exports = router;
