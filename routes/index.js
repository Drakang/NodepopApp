const { response } = require("express");
var express = require("express");
var router = express.Router();
const { query, validationResult, body } = require("express-validator");
const Advert = require("../models/Advert.js");
require ("../lib/connectMongoose.js")
/* GET home page. */
router.get("/", async (req, res, next) => {
  const advert = await Advert.find({});
  console.log(advert);
  res.locals.adverts = advert;
  res.render("index", { title: "Nodepop" });
});

module.exports = router;
