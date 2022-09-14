const mongoose =  require('mongoose')

const userProfileSchema = new mongoose.Schema({
    userName: {
        type:String,
        require:true
    },
    designation :{
        type: String,
    } ,
    skill :{
        type:Array
    },
    about:{
        type:String,
    },
    location:{
        type:String
    }
})

module.exports = mongoose.model('userProfile',userProfileSchema,)

