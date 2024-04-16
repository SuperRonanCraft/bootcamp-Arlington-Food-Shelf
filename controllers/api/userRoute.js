const router = require('express').Router();
const { User } = require('../../models/index');

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    const users = userData.map((data) => data.get({ plain: true }));
    res.status(200).json({
      users,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
