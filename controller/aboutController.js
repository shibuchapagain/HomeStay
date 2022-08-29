const homestay = require("../mongoose");

const vission = (req, res) => {
  res.render("./about/vission.ejs");
};

const whoWeAre = (req, res) => {
  res.render("./about/who-we-are.ejs");
};

const messageFromCEO = (req, res) => {
  res.render("./about/message-from-ceo.ejs");
};

module.exports = { vission, whoWeAre, messageFromCEO };
