const router = require('express').Router();
const { User } = require('../../models/index');

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const userData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userData.id;
        res
          .status(200)
          .json({ loggedIn: true, message: 'New account created!' });
      });
    } else {
      res.status(400).json({
        loggedIn: false,
        message: 'Didnt provide name, email or password!',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
