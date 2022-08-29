const express = require("express");
const ecoBazarController = require("./../controller/ecoBazarController");
const router = express.Router();

router
  .route("/eco-bazar/clothing-apparel")
  .get(ecoBazarController.clotingApparel);

router
  .route("/eco-bazar/coffee-shop-cafe")
  .get(ecoBazarController.coffeeShopCafe);

router.route("/eco-bazar/farm").get(ecoBazarController.farm);

router.route("/eco-bazar/haat-bazar").get(ecoBazarController.haatBazar);

router.route("/eco-bazar/homestay-hotel").get(ecoBazarController.homestayHotel);

router.route("/eco-bazar/money-transfer").get(ecoBazarController.moneyTransfer);

router.route("/eco-bazar/pasal").get(ecoBazarController.pasal);

router
  .route("/eco-bazar/school-college-fee")
  .get(ecoBazarController.schoolCollegeFee);

router.route("/eco-bazar/ticketing").get(ecoBazarController.ticketing);

router.route("/eco-bazar/utility").get(ecoBazarController.utility);

module.exports = router;
