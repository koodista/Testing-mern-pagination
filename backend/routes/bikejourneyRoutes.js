const express = require("express");
const bikejourneyControllers = require("../controllers/bikejourneyControllers");
const router = express.Router();

// @route - /api/bikejourneys/
router
  .route("/")
  .get(bikejourneyControllers.getAllBikejourneys)
  .post(bikejourneyControllers.createNewBikejourney);

// @route - /api/bikejourneys/id
router
  .route("/:id")
  .put(bikejourneyControllers.updateBikejourneyById)
  .delete(bikejourneyControllers.deleteBikejourneyById);

module.exports = router;
