const express = require("express");
const eventsController = require("./../controller/eventsController");
const router = express.Router();

router.route("/events/blog").get(eventsController.blog);

router.route("/events/documentary").get(eventsController.documentary);

router.route("/events/eco-tv").get(eventsController.ecoTV);

router.route("/events/events").get(eventsController.events);

router.route("/events/green-event").get(eventsController.greenEvent);

router.route("/events/press-release").get(eventsController.pressRelease);

module.exports = router;
