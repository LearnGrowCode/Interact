const userProfile = require("../models/userProfile");

const getAllUserProfile = async (req, res) => {
  const allUserData = await userProfile.find({});
  res.status(200).json({ allUserData });
};
// const allUserDatas = await userProfile.find({ userName :userName})
const searchAllUserProfile = async(req,res)=>{
  getUserData = "hi"
 
  res.status(200).json({getUserData})
}

const filterUserProfile = async(req,res)=>{
  const {userName,designation,skill,about,location,keyword,keywords} = req.query
  var getUserData = "[]"
  if(req.query.userName){
    const UserName = { $regex: req.query.userName, $options : 'i' }
    var getUserData = await userProfile.find({userName : UserName})
  }
  if(req.query.designation){
    const Designation = { $regex: req.query.designation, $options : 'i' }
    var getUserData = await userProfile.find({designation : Designation})
  }
  if(req.query.skill){
    const Skill = { $regex: req.query.userName, $options : 'i' }
    var getUserData = await userProfile.find({skill : Skill})
  }
  if(req.query.about){
    const About = { $regex: req.query.about, $options : 'i' }
    var getUserData = await userProfile.find({about : About})
  }
  if(req.query.location){
    const Location = { $regex: req.query.location, $options : 'i' }
    var getUserData = await userProfile.find({location : Location})
  }
  if(req.query.keyword){
    const Keyword = { $regex: req.query.keyword, $options : 'i' }
    var getUserData = await userProfile.find({$or:[{userName : Keyword}, {designation : Keyword},{skill : Keyword},{about : Keyword},{location : Keyword} ]})
  }
  if(req.query.keywords){
    var getUserData = await userProfile.find({$and:[{userName : userName}, {designation : designation},{about : {$exists:true}},{location : location} ]})
  }
  
  res.status(200).json({getUserData})
}


const newUserProfile = async (req, res) => {
  const newUserData = await userProfile.create({
    userName: "aks",
    designation: "hi",
  });
  console.log(newUserData);
  res.status(200).json({ newUserData });
};
const modifyUserProfile = async (req, res) => {
  const modifyUserData = await userProfile.findOneAndUpdate(
    { _id: "631f9176d91e5cbe1e1b8b92" },
    { userName: "hey" }
  );
  res.status(200).json({ modifyUserData });
};
const deleteUserProfile = async (req, res) => {
  const deltedUserData = await userProfile.findOneAndDelete({
    _id: "631f9176d91e5cbe1e1b8b92",
  });
  res.status(200).json({ deltedUserData });
};
const getUserProfile = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userData = await userProfile.findById(id).exec();
  res.status(200).json(userData);
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
