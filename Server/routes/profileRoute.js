
const express = require('express')
const {getAllUserProfile,getUserProfile,newUserProfile,modifyUserProfile,deleteUserProfile} = require('../controllers/userController')
const router =  express.Router()


//To Get All userData
router.get('/',getAllUserProfile)




//To Post All userData
router.get('/new',newUserProfile)

//To Modify All userData
router.get('/modify',modifyUserProfile)

//To Delete All userData
router.get('/delete',deleteUserProfile)

//To Get Selected User Data
router.get('/:id',getUserProfile)

module.exports = router