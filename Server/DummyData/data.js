require('dotenv').config('../')
const connectDB = require('../db/connect')
const userProfile = require('../models/userProfile')
const userProfileData = [{
    userName:'Akshay',
    designation:'Developer',
    skill:['H','B','C'],
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'GGN,India'
},
{
    userName:'Mahendra',
    designation:'Developer',
    skill:['H','B','C'],
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'GGN,India'
},{
    userName:'Anjali',
    designation:'Developer',
    skill:['H','B','C'],
    about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location:'GGN,India'
}
]

const start = async ()=>{
    try {
        await connectDB('mongodb+srv://aksh:1234@nodeexpressproject.hhaxhly.mongodb.net/?retryWrites=true&w=majority')
        await userProfile.insertMany(userProfileData,(error,docs)=>{console.log(error)})
        
    } catch (error) {
        console.log(error)
    }
    
}

start()