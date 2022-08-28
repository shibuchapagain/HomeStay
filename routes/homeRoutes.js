const express = require("express");
const homeController = require("./../controller/homeController");
const router = express.Router();

// router.get("/", homeController.getAllData);
// router.get("/homestay/community-homestay", homeController.getHomestay);
// router.get("/hotel", homeController.hotel);
// router.get("*", homeController.error);

router.route("/").get(homeController.index);
router.route("/homestay/family-hotel").get(homeController.familyHotel);
router.route("/community-homestay").get(homeController.communityHomestay);

module.exports = router;
