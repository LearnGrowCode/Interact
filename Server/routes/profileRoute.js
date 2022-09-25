
const express = require('express')
const {getAllUserProfile,getUserProfile,newUserProfile,modifyUserProfile,deleteUserProfile,searchAllUserProfile,filterUserProfile} = require('../controllers/userController')
const router =  express.Router()


//To Get All userData
router.get('/',getAllUserProfile)

//To Get Certain Collection of Data
router.get('/search/all',filterUserProfile)

//To Get Certain Collection of Data
router.get('/search/results',filterUserProfile)

//To Post All userData
router.post('/new',newUserProfile)

//To Modify All userData
router.get('/modify',modifyUserProfile)

//To Delete All userData
router.get('/delete',deleteUserProfile)

//To Get Selected User Data
router.get('/:id',getUserProfile)

module.exports = router