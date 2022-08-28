const express = require("express");
const homestayController = require("./../controller/homestayController");
const router = express.Router();

router.route("/").get(homestayController.index);

router.route("/homestay/family-hotel").get(homestayController.familyHotel);

router
  .route("/homestay/pilgrimage-dharmshala-stay")
  .get(homestayController.pilgrimageDharmshalaStay);

router
  .route("/homestay/hunting-reserves")
  .get(homestayController.huntingReserves);

router.route("/homestay/jungle-stay").get(homestayController.jungleStay);

router.route("/homestay/wellness").get(homestayController.wellness);

router.route("/homestay/eco-homes").get(homestayController.ecoHomes);

router.route("/homestay/farm-house").get(homestayController.farmHouse);

router.route("/homestay/farmstay").get(homestayController.farmstay);

router
  .route("/homestay/family-homestay")
  .get(homestayController.familyHomestay);

router
  .route("/homestay/community-homestay")
  .get(homestayController.communityHomestay);

// router.get("*", homestayController.error);

module.exports = router;
