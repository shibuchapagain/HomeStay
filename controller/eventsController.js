const homestay = require("./../mongoose");

const blog = (req, res) => {
  res.render("./events/blog.ejs");
};

const documentary = (req, res) => {
  res.render("./events/documentary.ejs");
};

const ecoTV = (req, res) => {
  res.render("./events/eco-tv.ejs");
};

const events = (req, res) => {
  res.render("./events/events.ejs");
};

const greenEvent = (req, res) => {
  res.render("./events/green-event.ejs");
};

const pressRelease = (req, res) => {
  res.render("./events/press-release.ejs");
};

module.exports = { blog, documentary, ecoTV, events, greenEvent, pressRelease };
