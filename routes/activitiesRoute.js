const express = require("express");
const activitiesController = require("./../controller/activitiesController");
const router = express.Router();

router.route("/activities/exposure").get(activitiesController.exposureVisit);

router.route("/activities/adventure").get(activitiesController.adventure);

router
  .route("/activities/rock-climbing")
  .get(activitiesController.rockClimbing);

router.route("/activities/hunting").get(activitiesController.hunting);

router.route("/activities/scouting").get(activitiesController.scouting);

router
  .route("/activities/training-job-placement")
  .get(activitiesController.trainingJobPlacement);

router
  .route("/activities/research-field-study")
  .get(activitiesController.researchFieldStudy);

router.route("/activities/internship").get(activitiesController.internship);

module.exports = router;
