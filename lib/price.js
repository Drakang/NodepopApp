const getPrice = (price) => {
  const prices = price.split("-");
  const min = prices[0];
  const max = prices[1];

  if (prices.length === 1) return min;
  const result = {
    ...(min === "" ? { $lte: max } : {}),
    ...(max === "" ? { $gte: min } : {}),
    ...(min ? { $gte: min } : {}),
    ...(max ? { $lte: max } : {}),
  };
  return result;
};

module.exports = getPrice;
