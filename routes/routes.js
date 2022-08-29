const express = require("express");

const homestayRoute = require("./homestayRoute");
const activitiesRoute = require("./activitiesRoute");
const ourPartnersRoute = require("./ourPartnersRoute");
const tourismPurposeRoute = require("./tourismPurposeRoute");
const impactRoute = require("./impactRoute");

const router = express.Router();

router.use(
  "/",
  homestayRoute,
  activitiesRoute,
  ourPartnersRoute,
  tourismPurposeRoute,
  impactRoute
);

module.exports = router;
