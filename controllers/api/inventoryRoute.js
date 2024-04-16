const router = require('express').Router();
const { Inventory } = require('../../models/index');
const { inventoryData } = require('../../utils/helpers');

router.get('/', (req, res) => {
  Inventory.findAll({
    include: inventoryData,
  })
    .then((data) => {
      const inv = data.map((obj) => obj.get({ plain: true }));
      console.log(inv);
      res.status(200).json(inv);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
