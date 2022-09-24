require('dotenv').config('../')
const connectDB = require('../db/connect')
const userProfile = require('../models/userProfile')
const userData = require('../models/userDetails')
const userProfileData = [{
    userName:'Arnav',
    designation:'FULL STACK DEVELOPER',
    skill:'REACT',
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'Noida,India',
    college:'NIT Bhopal',
    year:'FIRST',
    theme:'BLOCKCHAIN',
    linkedin:'www.linkedin.com/in/akshay-ajay-kalekar/'
},
{
    userName:'Yuvraj',
    designation:'FRONTEND DEVELOPER',
    skill:'HTML',
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'Maharashtra,India',
    college:'IIT Bhopal',
    year:'FIFTH',
    theme:'HEALTH',
    linkedin:'www.linkedin.com/in/akshay-ajay-kalekar/'
},
{
    userName:'Aditya',
    designation:'CP',
    skill:'AWS',
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'Bengal,India',
    college:'VIT Vellore',
    year:'SECOND',
    theme:'OPEN INNOVATION',
    linkedin:'www.linkedin.com/in/akshay-ajay-kalekar/'
}
]

const start = async ()=>{
    try {
        await connectDB('mongodb+srv://aksh:1234@nodeexpressproject.hhaxhly.mongodb.net/?retryWrites=true&w=majority')
        await userData.insertMany(userProfileData,(error,docs)=>{console.log(error)})
        
    } catch (error) {
        console.log(error)
    }
    
}

start()