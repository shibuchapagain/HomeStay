const express = require("express");
const impactController = require("./../controller/impactController");
const router = express.Router();

router.route("/impact").get(impactController.impact);

module.exports = router;
