const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/createuser");

const eventschema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventimage: {
    type: String,
    filename: String,
  },
  eventdate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: ["sports-events", "tech-events", "cultural-events", "music-events"],
    default: "public",
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  createrid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  locationmap: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventschema);
