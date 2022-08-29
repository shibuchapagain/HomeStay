const homestay = require("../mongoose");

const ecoEventPartner = (req, res) => {
  res.render("./ecoMerchant/eco-event-partner.ejs");
};

const ecoGatewayPartner = (req, res) => {
  res.render("./ecoMerchant/eco-gateway-partner.ejs");
};

const ecoHospitality = (req, res) => {
  res.render("./ecoMerchant/eco-hospitality.ejs");
};

const ecoMediaPartner = (req, res) => {
  res.render("./ecoMerchant/eco-media-partner.ejs");
};

const ecoMerchantCafeResturant = (req, res) => {
  res.render("./ecoMerchant/eco-merchant-cafe-resturant.ejs");
};

const ecoMerchantCoffeeShopJuice = (req, res) => {
  res.render("./ecoMerchant/eco-merchant-coffee-shop-juice.ejs");
};

const ecoMerchantFarms = (req, res) => {
  res.render("./ecoMerchant/eco-merchant-farms.ejs");
};

const ecoMerchantMeatmart = (req, res) => {
  res.render("./ecoMerchant/eco-merchant-meatmart.ejs");
};

const ecoPartnerBanks = (req, res) => {
  res.render("./ecoMerchant/eco-partner-banks.ejs");
};

const farm = (req, res) => {
  res.render("./ecoMerchant/farm.ejs");
};

module.exports = {
  ecoEventPartner,
  ecoGatewayPartner,
  ecoHospitality,
  ecoMediaPartner,
  ecoMerchantCafeResturant,
  ecoMerchantCoffeeShopJuice,
  ecoMerchantFarms,
  ecoMerchantMeatmart,
  ecoPartnerBanks,
  farm,
};
