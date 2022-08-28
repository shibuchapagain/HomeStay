const homestay = require("./../mongoose");

const error = (req, res) => {
  res.render("error");
};

const index = (req, res) => {
  res.render("index");
};

const familyHotel = (req, res) => {
  res.render("./homestay/family-hotel.ejs");
};

const communityHomestay = (req, res) => {
  res.render("./homestay/community-homestay.ejs");
};

module.exports = { error, index, familyHotel, communityHomestay };
