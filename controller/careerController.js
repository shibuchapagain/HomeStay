const homestay = require("../mongoose");

const job = (req, res) => {
  res.render("./career/job.ejs");
};

const mentorship = (req, res) => {
  res.render("./career/mentorship.ejs");
};

const research = (req, res) => {
  res.render("./career/research.ejs");
};

const entrepreneurship = (req, res) => {
  res.render("./career/entrepreneurship.ejs");
};

const jobPlacement = (req, res) => {
  res.render("./career/job-placement.ejs");
};

const fellowship = (req, res) => {
  res.render("./career/fellowship.ejs");
};

const volunteer = (req, res) => {
  res.render("./career/volunteer.ejs");
};

module.exports = {
  job,
  mentorship,
  research,
  entrepreneurship,
  jobPlacement,
  fellowship,
  volunteer,
};
