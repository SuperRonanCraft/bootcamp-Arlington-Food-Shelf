const router = require('express').Router();
const { Inventory } = require('../../models/index');

router.get('/', (req, res) => {
  Inventory.findAll().then((data) => {
    const inv = data.map((obj) => obj.get({ plain: true }));
    console.log(inv);
    res.status(200).json(inv);
  });
});

module.exports = router;
