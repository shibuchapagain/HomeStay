const homestay = require("../mongoose");

const ecoAgromart = (req, res) => {
  res.render("./ourPartners/eco-agromart.ejs");
};

const ecoCollege = (req, res) => {
  res.render("./ourPartners/eco-college.ejs");
};

const ecoPartnerCoop = (req, res) => {
  res.render("./ourPartners/eco-partner-coop.ejs");
};

const ecoPartnerNursery = (req, res) => {
  res.render("./ourPartners/eco-partner-nursery.ejs");
};

const ecoPartnerTrainingCenter = (req, res) => {
  res.render("./ourPartners/eco-partner-training-center.ejs");
};

const ecoPartnerHospital = (req, res) => {
  res.render("./ourPartners/eco-partner-hospital.ejs");
};

const petStore = (req, res) => {
  res.render("./ourPartners/pet-store.ejs");
};

module.exports = {
  ecoAgromart,
  ecoCollege,
  ecoPartnerCoop,
  ecoPartnerNursery,
  ecoPartnerTrainingCenter,
  ecoPartnerHospital,
  petStore,
};
