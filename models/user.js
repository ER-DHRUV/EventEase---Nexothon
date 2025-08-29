const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/createuser");

const userSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: true 
    },
    email: {
        type: String,  
        required: true 
    },
    password: {
        type: String,  
        required: true 
    },
    category:{
        type:String,
        enum:['public','organizer'],
        default:'public'
    },
    mobileNo:{
        type:String,

    }

});

module.exports = mongoose.model("User", userSchema);
