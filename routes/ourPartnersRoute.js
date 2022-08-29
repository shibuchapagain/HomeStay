const express = require("express");
const ourPartnersController = require("./../controller/ourPartnersController");
const router = express.Router();

router
  .route("/our-partners/eco-agromart")
  .get(ourPartnersController.ecoAgromart);

router.route("/our-partners/eco-college").get(ourPartnersController.ecoCollege);

router
  .route("/our-partners/eco-partner-coop")
  .get(ourPartnersController.ecoPartnerCoop);

router
  .route("/our-partners/eco-partner-nursery")
  .get(ourPartnersController.ecoPartnerNursery);

router
  .route("/our-partners/eco-partner-training-center")
  .get(ourPartnersController.ecoPartnerTrainingCenter);

router
  .route("/our-partners/eco-partner-hospital")
  .get(ourPartnersController.ecoPartnerHospital);

router.route("/our-partners/pet-store").get(ourPartnersController.petStore);

module.exports = router;
