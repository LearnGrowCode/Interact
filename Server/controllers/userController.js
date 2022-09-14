
const  userProfile = require("../models/userProfile")

const getAllUserProfile = async(req,res)=>{
   
    const allUserData = await userProfile.find({})
    res.status(200).json({allUserData})
}

const newUserProfile = async(req,res)=>{
    const newUserData =  await userProfile.create({
        userName : 'aks',
        designation: 'hi',
    })
    console.log(newUserData)
    res.status(200).json({newUserData})

}
const modifyUserProfile = async(req,res)=>{
    const modifyUserData = await userProfile.findOneAndUpdate({_id:'631f9176d91e5cbe1e1b8b92'},{userName:'hey'})
    res.status(200).json({modifyUserData})
}
const deleteUserProfile = async(req,res)=>{
    const deltedUserData = await userProfile.findOneAndDelete({_id:'631f9176d91e5cbe1e1b8b92'})
    res.status(200).json({deltedUserData})
}
const getUserProfile = async(req,res)=>{
    const {id} =req.params;
    console.log(id)
    const userData = await userProfile.findById(id).exec()
    res.status(200).json(userData)
    

}
module.exports = {getAllUserProfile,getUserProfile,newUserProfile,modifyUserProfile,deleteUserProfile}