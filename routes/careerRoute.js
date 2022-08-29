const express = require("express");
const careerController = require("./../controller/careerController");
const router = express.Router();

router.route("/career/entrepreneurship").get(careerController.entrepreneurship);

router.route("/career/fellowship").get(careerController.fellowship);

router.route("/career/job-placement").get(careerController.jobPlacement);

router.route("/career/job").get(careerController.job);

router.route("/career/mentorship").get(careerController.mentorship);

router.route("/career/research").get(careerController.research);

router.route("/career/volunteer").get(careerController.volunteer);

module.exports = router;
