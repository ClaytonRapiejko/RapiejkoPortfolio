var express = require("express");
var router = express.Router();

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me - Clayton Rapiejko" });
});

module.exports = router;