const express = require("express");
const router = express.Router();
const Event = require("../models/event");
// const { isLoggedIn } = require("../midleware.js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const cloudinary = require("cloudinary").v2;

// router.route("/login")
//     .get((req, res) => {
//         res.render("login", { error: undefined });
//     });
router.route("/")
.get((req, res) => {
    res.send("home");
});


router.route('/signup')
.get((req, res) => {
  res.render("auth/signup");
})
.post(async (req, res) => {
  let { name, email, password,role} = req.body;
  const existuser = await User.findOne({ email: email });
  if (existuser) {
    return res.send("Email id is already exist");
  }
 
  let haspassword = await bcrypt.hash(password, 10);
  let createuser = await User.create({
    name,
    email,
    password: haspassword,
    category: role
  });
  let token = jwt.sign({ email }, "dip", { expiresIn: "1d" });
  res.cookie("token", token);
  res.cookie("name", name);
  if(role==='organizer'){
    res.redirect("/organizer");
  }
  else{
    res.redirect("/public");
  }
  
  console.log(createuser);
});

router.route('/login')
.get( (req, res) => {
  res.render("auth/login", { error: undefined });
})
.post(async (req, res) => {

  let { email, password ,role} = req.body;
  let existuser = await User.findOne({ email: email });
  if (!existuser) {
    return res.render("auth/login", { error1: "User doesn't Exist. Signup First." });
    // return res.send("User not found");
  }
  if (role!=existuser.category) {
    return res.render("auth/login", { error1: "User not found" });
    // return res.send("User not found");
  }
  bcrypt.compare(password, existuser.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email }, "dip", { expiresIn: "1d" });
      res.cookie("token", token);
      return role==='organizer'?res.redirect("/organizer"):res.redirect("/public");
    } else {
      return res.render("auth/login", { error2: "Email or Password is wrong." });
    }
  });
});


router.route('/logout')
.get((req,res)=>{
   res.cookie("token", "");
  res.redirect("/login");
})
module.exports=router;