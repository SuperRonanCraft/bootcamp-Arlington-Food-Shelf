const router = require('express').Router();
const { Inventory } = require('../models/index');
const { inventoryData } = require('../utils/helpers');

router.get('/', (req, res) => {
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

module.exports = router;
