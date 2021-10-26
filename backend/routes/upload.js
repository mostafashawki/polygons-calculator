const express = require("express");
const router = express.Router();

const annotations_controller = require("../controllers/annotation");

// @route   POST /upload
// @desc    upload and calculate polygons areas
// @access  Public
router.post("/upload", annotations_controller.calculate_polygons);

module.exports = router;