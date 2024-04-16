const router = require('express').Router();
const { User } = require('../../models/index');

router.post('/', async (req, res) => {
  try {
    console.log(req.body.username, req.body.password, 'Data');
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res.status(200).json({ loggedIn: true, message: 'New account created!' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
