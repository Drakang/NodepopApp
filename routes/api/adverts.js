const express = require("express");
const router = express.Router();
const { query, validationResult } = require("express-validator");
const Advert = require("../models/Advert.js");

//GET /api/products
// returns a list of products

router.get("/", async (req, res, next) => {
  try {
    const anunce = await Advert.find();

    res.json({ adverts: anunce });
  } catch (err) {
    next(err);
  }
});

// POST /api/adverts (body)
// creates an advert

router.post("/", async (req, res, next) => {
  try {
    const advertData = req.body;

    const advert = new Advert(advertData);

    const advertSaved = await advert.save();

    res.json({ result: advertSaved });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
