require('dotenv').config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
// const { isLoggedIn } = require("./midleware.js");
const User = require("./models/user");
const Event = require("./models/event");
const public = require("./routes/public");
const organizer = require("./routes/organizer");
const auth = require("./routes/auth");
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const fileupload = require("express-fileupload");
// Enable file upload middleware if needed
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/EventEase", {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use("/public", public);
app.use("/organizer", organizer);
app.use("/login", auth);

app.listen(3000, () => {
  console.log("Welcome to our website");
});
