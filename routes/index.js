var express = require("express");
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
	res.render("index", { title: "SSD 4 - Deal-3.0" });
});

module.exports = router;
