// Importing the Express module and creating a router instance
const router = require('express').Router();
// Importing the Inventory model from the models/index file
const { Inventory } = require('../../models/index');
// Importing the inventoryData helper function from the utils/helpers file
const { inventoryData } = require('../../utils/helpers');

// Defining a route handler for GET requests to the '/' endpoint
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
