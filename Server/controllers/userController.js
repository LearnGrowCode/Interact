const userData = require("../models/userDetails");

const getAllUserProfile = async (req, res) => {
  const allUserData = await userData.find({});
  res.status(200).json({ allUserData });
};
// const allUserDatas = await userProfile.find({ userName :userName})
const searchAllUserProfile = async (req, res) => {
  getUserData = "hi";

  res.status(200).json({ getUserData });
};

const filterUserProfile = async (req, res) => {
  const { userName, designation, skill, about, location, all, keywords } =
    req.query;
  var getUserData = "[]";
  if (req.query.userName) {
    const UserName = { $regex: req.query.userName, $options: "i" };
    var getUserData = await userData.find({ userName: UserName });
  }
  if (req.query.designation) {
    const Designation = { $regex: req.query.designation, $options: "i" };
    var getUserData = await userData.find({ designation: Designation });
  }
  if (req.query.skill) {
    const Skill = { $regex: req.query.skill, $options: "i" };
    var getUserData = await userData.find({ skill: Skill });
  }
  if (req.query.about) {
    const About = { $regex: req.query.about, $options: "i" };
    var getUserData = await userData.find({ about: About });
  }
  if (req.query.location) {
    const Location = { $regex: req.query.location, $options: "i" };
    var getUserData = await userData.find({ location: Location });
  }
  if (req.query.all) {
    const Keyword = { $regex: req.query.all, $options: "i" };
    var getUserData = await userData.find({
      $or: [
        { userName: Keyword },
        { designation: Keyword },
        { skill: Keyword },
        { about: Keyword },
        { location: Keyword },
      ],
    });
  }
  if (req.query.keywords) {
    var getUserData = await userData.find({
      $and: [
        { userName: userName },
        { designation: designation },
        { about: { $exists: true } },
        { location: location },
      ],
    });
  }

  res.status(200).json({ getUserData });
};

const newUserProfile = async (req, res) => {
  const {userName,designation,about,location,skill,year,college,theme,linkedin,discord,github}=req.body
  console.log(req.body)
  const UserData = new userData({userName,designation,about,location,skill,year,college,theme,github,linkedin,discord,github})
  console.log(UserData)
  // const UserData = new userData({userName:"Akshay",designation:"ANDROID",about:"Akshay",location:"Akshay",skill:"Akshay",year:"FIRST",college:"",theme:"HEALTH"})
  await UserData.save()
  res.status(200).json({UserData})
};
const modifyUserProfile = async (req, res) => {
  const modifyUserData = await userData.findOneAndUpdate(
    { _id: "631f9176d91e5cbe1e1b8b92" },
    { userName: "hey" }
  );
  res.status(200).json({ modifyUserData });
};
const deleteUserProfile = async (req, res) => {
  const deltedUserData = await userData.findOneAndDelete({
    _id: "631f9176d91e5cbe1e1b8b92",
  });
  res.status(200).json({ deltedUserData });
};
const getUserProfile = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const getUserData = await userData.findById(id).exec();
  res.status(200).json(getUserData);
};
module.exports = {
  getAllUserProfile,
  searchAllUserProfile,
  getUserProfile,
  newUserProfile,
  modifyUserProfile,
  deleteUserProfile,
  filterUserProfile,
};
