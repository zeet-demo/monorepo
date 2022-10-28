var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("node-express-2");
  res.render("index", { title: "Express", name: process.env.NAME });
});

module.exports = router;
