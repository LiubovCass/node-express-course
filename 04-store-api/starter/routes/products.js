const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/products');
// const router = require('../../../03-task-manager/starter/routes/tasks');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
