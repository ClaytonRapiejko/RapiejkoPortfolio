var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("projects", { title: "Projects - Clayton Rapiejko" });
});

module.exports = router;