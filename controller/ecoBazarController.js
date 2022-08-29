const homestay = require("../mongoose");

const clotingApparel = (req, res) => {
  res.render("./ecoBazar/clothing-apparel.ejs");
};

const coffeeShopCafe = (req, res) => {
  res.render("./ecoBazar/coffee-shop-cafe.ejs");
};

const farm = (req, res) => {
  res.render("./ecoBazar/farm.ejs");
};

const haatBazar = (req, res) => {
  res.render("./ecoBazar/haat-bazar.ejs");
};

const homestayHotel = (req, res) => {
  res.render("./ecoBazar/homestay-hotel.ejs");
};

const moneyTransfer = (req, res) => {
  res.render("./ecoBazar/money-transfer.ejs");
};

const pasal = (req, res) => {
  res.render("./ecoBazar/pasal.ejs");
};

const schoolCollegeFee = (req, res) => {
  res.render("./ecoBazar/school-college-fee.ejs");
};

const ticketing = (req, res) => {
  res.render("./ecoBazar/ticketing.ejs");
};

const utility = (req, res) => {
  res.render("./ecoBazar/utility.ejs");
};

module.exports = {
  clotingApparel,
  coffeeShopCafe,
  farm,
  haatBazar,
  homestayHotel,
  moneyTransfer,
  pasal,
  schoolCollegeFee,
  ticketing,
  utility,
};
