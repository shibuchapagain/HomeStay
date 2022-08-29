const express = require("express");

const homestayRoute = require("./homestayRoute");
const activitiesRoute = require("./activitiesRoute");
const ourPartnersRoute = require("./ourPartnersRoute");
const tourismPurposeRoute = require("./tourismPurposeRoute");
const impactRoute = require("./impactRoute");
const aboutRoute = require("./aboutRoute");
const careerRoute = require("./careerRoute");
const ecoBazarRoute = require("./ecoBazarRoute");
const ecoMerchantRoute = require("./ecoMerchantRoute");
const eventsRoute = require("./eventsRoute");

const router = express.Router();

router.use(
  "/",
  homestayRoute,
  activitiesRoute,
  ourPartnersRoute,
  tourismPurposeRoute,
  impactRoute,
  aboutRoute,
  careerRoute,
  ecoBazarRoute,
  ecoMerchantRoute,
  eventsRoute
);

module.exports = router;
