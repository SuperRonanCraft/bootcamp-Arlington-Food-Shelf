// Purpose: To render the homepage and login page
const router = require('express').Router();
const {
  allergen,
  catagory,
  inventory,
  order,
  ordeitem,
  user,
} = require('../models');
const auth = require('../utils/auth');

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
  res.render('menu', {
    loggedIn: req.session.loggedIn,
  });
});

// Login Route
router.get('/login', (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) res.redirect('/');
  else res.render('login');
});

module.exports = router;
