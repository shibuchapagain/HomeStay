const express = require("express");
const { echo } = require("shelljs");
const ecoMerchantController = require("./../controller/ecoMerchantController");
const router = express.Router();

router
  .route("/eco-merchant/eco-event-partner")
  .get(ecoMerchantController.ecoEventPartner);

router
  .route("/eco-merchant/eco-gateway-partner")
  .get(ecoMerchantController.ecoGatewayPartner);

router
  .route("/eco-merchant/eco-hospitality")
  .get(ecoMerchantController.ecoHospitality);

router
  .route("/eco-merchant/eco-media-partner")
  .get(ecoMerchantController.ecoMediaPartner);

router
  .route("/eco-merchant/eco-merchant-cafe-resturant")
  .get(ecoMerchantController.ecoMerchantCafeResturant);

router
  .route("/eco-merchant/eco-merchant-coffee-shop-juice")
  .get(ecoMerchantController.ecoMerchantCoffeeShopJuice);

router
  .route("/eco-merchant/eco-merchant-farms")
  .get(ecoMerchantController.ecoMerchantFarms);

router
  .route("/eco-merchant/eco-merchant-meatmart")
  .get(ecoMerchantController.ecoMerchantMeatmart);

router
  .route("/eco-merchant/eco-partner-banks")
  .get(ecoMerchantController.ecoPartnerBanks);

router.route("/eco-merchant/farm").get(ecoMerchantController.farm);

module.exports = router;
