const express = require("express");
const router = express.Router();
const Event = require("../models/event");
// const { isLoggedIn } = require("../midleware.js");
const User = require("../models/user");
// const cloudinary = require("cloudinary").v2;
router.route("/")
.get((req, res) => {
    let id = req.params;
    let user = 
    res.render("includes/topsection")
});

module.exports=router;