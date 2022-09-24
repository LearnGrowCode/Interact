const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  location: { type: String, required: true },
  about: { type: String, required: true },
  skill: {
    type: String,
    enum: ["AWS", "HTML", "CSS", "REACT", "FLUTTER"],
  },
  designation: {
    type: String,
    enum: ["FULL STACK DEVELOPER", "ANDROID", "DESIGNER", "CP", "FRONTEND DEVELOPER"],
  },
  college: {
    required: true,
    type: String,
  },
  year: {
    type: String,
    enum: ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"],
  },
  theme: {
    type: String,
    enum: ["HEALTH", "AI", "BLOCKCHAIN", "OPEN INNOVATION"],
  },
  linkedin: {
    type: String,
    required: true,
  },
  discord: {
    type: String,
  },
  github: {
    type: String,
  },
});
const userData = new mongoose.model("userData", userSchema);
module.exports = userData;
