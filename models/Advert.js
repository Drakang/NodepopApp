const mongoose = require("mongoose");

const advertsSchema = mongoose.Schema(
  {
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String],
  },
  {
    collection: "advert",
  }
);
advertsSchema.statics.list = function (filter, skip, limit, fields, sort) {
  const query = Advert.find(filter);
  query.skip(skip);
  query.limit(limit);
  query.select(fields);
  query.sort(sort);

  return query.exec();
};

const Advert = mongoose.model("Advert", advertsSchema);

module.exports = Advert;
