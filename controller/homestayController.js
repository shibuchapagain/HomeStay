const homestay = require("../mongoose");

const error = (req, res) => {
  res.render("error");
};

const index = (req, res) => {
  res.render("index");
};

const familyHotel = (req, res) => {
  res.render("./homestay/family-hotel.ejs");
};

const pilgrimageDharmshalaStay = (req, res) => {
  res.render("./homestay/pilgrimage-dharmshala-stay.ejs");
};

const huntingReserves = (req, res) => {
  res.render("./homestay/hunting-reserves.ejs");
};

const jungleStay = (req, res) => {
  res.render("./homestay/jungle-stay.ejs");
};

const wellness = (req, res) => {
  res.render("./homestay/wellness.ejs");
};

const ecoHomes = (req, res) => {
  res.render("./homestay/eco-homes.ejs");
};

const farmHouse = (req, res) => {
  res.render("./homestay/farm-house.ejs");
};

const farmstay = (req, res) => {
  res.render("./homestay/farmstay.ejs");
};

const familyHomestay = (req, res) => {
  res.render("./homestay/family-homestay.ejs");
};

const communityHomestay = (req, res) => {
  res.render("./homestay/community-homestay.ejs");
};

module.exports = {
  error,
  index,
  familyHotel,
  pilgrimageDharmshalaStay,
  huntingReserves,
  jungleStay,
  wellness,
  ecoHomes,
  farmHouse,
  farmstay,
  familyHomestay,
  communityHomestay,
};
