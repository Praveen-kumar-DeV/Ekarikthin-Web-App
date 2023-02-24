const express = require("express");
const { cloudurl} = require("../controllers/gallery");

const router = express.Router();

router.route("/gag").get(cloudurl);
    

module.exports = router;