const { response } = require("express");
const express = require("express");
const router = express.Router();
const getPrice = require("../lib/price.js");
const Advert = require("../models/Advert.js");

router.get("/", async (req, res, next) => {
  res.locals.title = "TheNodeApiSellStore";
  try {
    const { name, tags, sale, price, skip, limit, select, sort } = req.query;
    const filter = {
      ...(name ? { name: new RegExp(name, "i") } : {}),
      ...(price ? { price: getPrice(price) } : {}),
      ...(tags ? { tags: tags} : {}),
      ...(sale !== undefined ? { sale: sale } : {}),
    };

    const adverts = await Advert.list(filter, skip, limit, select, sort);

    res.status(200).render("index", { results: adverts });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
