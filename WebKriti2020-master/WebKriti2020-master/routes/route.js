const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/homepage", (req, res) => {
  res.render("index");
});
module.exports = router;