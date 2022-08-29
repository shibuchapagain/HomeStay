const express = require("express");
const aboutController = require("./../controller/aboutController");
const router = express.Router();

router.route("/about/vission").get(aboutController.vission);

router.route("/about/who-we-are").get(aboutController.whoWeAre);

router.route("/about/message-from-ceo").get(aboutController.messageFromCEO);

module.exports = router;
