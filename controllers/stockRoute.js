const router = require('express').Router();
const { Inventory } = require('../models/index');

router.get('/', (req, res) => {
  Inventory.findAll()
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
