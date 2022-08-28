const homestay = require("../mongoose");

const exposureVisit = (req, res) => {
  res.render("./activities/exposure-visit.ejs");
};

const adventure = (req, res) => {
  res.render("./activities/adventure.ejs");
};

const rockClimbing = (req, res) => {
  res.render("./activities/rock-climbing.ejs");
};

const hunting = (req, res) => {
  res.render("./activities/hunting.ejs");
};

const scouting = (req, res) => {
  res.render("./activities/scouting.ejs");
};

const trainingJobPlacement = (req, res) => {
  res.render("./activities/training-job-placement.ejs");
};

const researchFieldStudy = (req, res) => {
  res.render("./activities/research-field-study.ejs");
};

const internship = (req, res) => {
  res.render("./activities/internship");
};

module.exports = {
  exposureVisit,
  adventure,
  rockClimbing,
  hunting,
  scouting,
  trainingJobPlacement,
  researchFieldStudy,
  internship,
};
