const { response } = require("express");
const express = require("express");
const router = express.Router();
const getPrice = require("../lib/price.js")
const Advert = require("../models/Advert.js");

router.get('/', async (req, res, next) => {
  res.locals.title = 'TheNodeApiSellStore'
  try {
    const { name, tags, sale, price, skip, limit, select, sort } = req.query
    const filter = {
      ...(name ? { name: new RegExp(name, 'i') } : {}),
      ...(price ? { price: getPrice(price)} : {}),
      ...(tags ? { tags: tags.split(' ') } : {}),
      ...(sale !== undefined ? { sale: sale } : {}),
    }

    const adverts = await Advert.list(filter, skip, limit, select, sort)

    res.status(200).render('index', { results: adverts })
  } catch (error) {
    next(error)
  }
})
// router.get("/", async (req, res, next) => {
//   try {
//     const name = req.query.name;
//     const tags = req.query.tags;
//     const sale = req.query.sale;
//     const price = req.query.price;
//     const skip = req.query.skip;
//     const limit = req.query.limit;
//     const fields = req.query.fields;
//     const sort = req.query.sort;
//     const filter = {};

//     if (name) {
//       filter.name = new RegExp(".*" + req.query.name + ".*", "i");
//     } else if (tags) {
//       filter.tags = tags;
//     } else if (sale) {
//       filter.sale = sale;
//     } else if (price) {
//       filter.price = { $lte: parseInt(price) };
//     }

//     const adverts = await Advert.list(filter, skip, limit, fields, sort);

//     res.locals.adverts = adverts;

//     res.render("index", { title: "Nodepop" });
//   } catch (err) {
//     next(err);
//   }
// });
module.exports = router;
