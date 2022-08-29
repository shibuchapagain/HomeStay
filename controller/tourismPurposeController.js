const homestay = require("../mongoose");

const agroTourism = (req, res) => {
  res.render("./tourismPurpose/agro-tourism.ejs");
};

const backToNature = (req, res) => {
  res.render("./tourismPurpose/back-to-nature.ejs");
};

const communityTourism = (req, res) => {
  res.render("./tourismPurpose/community-tourism.ejs");
};

const darkTourism = (req, res) => {
  res.render("./tourismPurpose/dark-tourism.ejs");
};

const foodTourism = (req, res) => {
  res.render("./tourismPurpose/food-tourism.ejs");
};

const gastronomyTourism = (req, res) => {
  res.render("./tourismPurpose/gastronomy-tourism.ejs");
};

const innoTourism = (req, res) => {
  res.render("./tourismPurpose/inno-tourism.ejs");
};

const povertyTourism = (req, res) => {
  res.render("./tourismPurpose/poverty-tourism.ejs");
};

const researchTourism = (req, res) => {
  res.render("./tourismPurpose/research-tourism.ejs");
};

const wellness = (req, res) => {
  res.render("./tourismPurpose/wellness.ejs");
};

module.exports = {
  agroTourism,
  backToNature,
  communityTourism,
  darkTourism,
  foodTourism,
  gastronomyTourism,
  innoTourism,
  povertyTourism,
  researchTourism,
  wellness,
};
