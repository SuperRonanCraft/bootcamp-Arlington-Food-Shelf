const router = require('express').Router();
const { User } = require('../../models/index');

router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      console.log('Bad Username');
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      console.log('Bad Password');
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res
        .status(200)
        .json({ loggedIn: true, message: 'You are now logged in!' });
      console.log('Logged in!');
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
