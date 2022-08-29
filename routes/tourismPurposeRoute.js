const express = require("express");
const tourismPurposeController = require("../controller/tourismPurposeController");
const router = express.Router();

router
  .route("/tourism-purpose/agro-tourism")
  .get(tourismPurposeController.agroTourism);

router
  .route("/tourism-purpose/back-to-nature")
  .get(tourismPurposeController.backToNature);

router
  .route("/tourism-purpose/community-tourism")
  .get(tourismPurposeController.communityTourism);

router
  .route("/tourism-purpose/dark-tourism")
  .get(tourismPurposeController.darkTourism);

router
  .route("/tourism-purpose/food-tourism")
  .get(tourismPurposeController.foodTourism);

router
  .route("/tourism-purpose/gastronomy-tourism")
  .get(tourismPurposeController.gastronomyTourism);

router
  .route("/tourism-purpose/inno-tourism")
  .get(tourismPurposeController.innoTourism);

router
  .route("/tourism-purpose/poverty-tourism")
  .get(tourismPurposeController.povertyTourism);

router
  .route("/tourism-purpose/research-tourism")
  .get(tourismPurposeController.researchTourism);

router
  .route("/tourism-purpose/wellness")
  .get(tourismPurposeController.wellness);

module.exports = router;
