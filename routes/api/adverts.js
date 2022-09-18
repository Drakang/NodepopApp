const express = require("express");
const router = express.Router();
const { query, validationResult } = require("express-validator");
const getPrice = require("../../lib/price.js");
const Advert = require("../../models/Advert");

//GET /api/products
// returns a list of products

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

    res.status(200).json({ results: adverts });
  } catch (error) {
    next(error);
  }
});

// POST /api/adverts (body)
// creates an advert

router.post("/", async (req, res, next) => {
  try {
    const advertData = req.body;

    const advert = new Advert(advertData);

    const advertSaved = await advert.save();

    res.status(201).json({ result: advertSaved });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
