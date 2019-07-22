const express = require("express");
const router = express.Router();

// @route    POST api/securities
// @desc     securities details
// @access   Public
router.get("/", (req, res) => res.send("securities route"));

module.exports = router;
