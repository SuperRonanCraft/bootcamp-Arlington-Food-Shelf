// Importing the Express module and creating a router instance
const router = require('express').Router();
// Importing the User model from the models directory
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
  try {
    // Destructuring name, email, and password from the request body
    const { name, email, password } = req.body;
    if (name && email && password) {
      const userData = await User.create({
        name,
        email,
        password,
      });

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;

        res.status(200).json(userData);
      });
    } else {
      res.status(400).json({
        loggedIn: false,
        message: 'Didnt provide name, email or password!',
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login a user
router.post('/login', async (req, res) => {
  console.log('inside login route');
  console.log(req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout a user
router.post('/logout', (req, res) => {
  console.log('inside logout route');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
