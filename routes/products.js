const express = require("express");
const router = express.Router();
const product = require("../controllers/products");

router.get('/', product.getAllProducts);
router.get('/testing', product.getAllProductsTesting);

// router.route("/").get("getAllProducts");
// router.route("/testing").get("getAllProductsTesting");

module.exports = router;
