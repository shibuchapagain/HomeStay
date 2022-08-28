const express = require("express");
const homestayRoute = require("./homestayRoute");
const activitiesRoute = require("./activitiesRoute");
const router = express.Router();

router.use("/", homestayRoute, activitiesRoute);

module.exports = router;
