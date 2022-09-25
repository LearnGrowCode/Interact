const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  location: { type: String, required: true },
  about: { type: String, required: true },
  skill: {
    type: [String],
  },
  designation: {
    type: String,
    enum: ["FULL STACK DEVELOPER", "ANDROID", "DESIGNER", "CP", "FRONTEND DEVELOPER",""],
  },
  college: {
    type: String,
  },
  year: {
    type: String,
    enum: ["1", "2", "3", "4", "5",""],
  },
  theme: {
    type: String,
    enum: ["Health", "Ai", "Blockchain", "Open Innovation",""],
  },
  linkedin: {
    type: String,
  },
  discord: {
    type: String,
  },
  github: {
    type: String,
  },
});
 
module.exports = new mongoose.model("userData", userSchema);
