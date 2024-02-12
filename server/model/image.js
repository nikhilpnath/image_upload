const mongoose = require("mongoose");

let imageSchema  = new mongoose.Schema({
    image:{
        type:String,
        required:true
    }
}, 
{
    timestamps:true
})

let Images = mongoose.model('Images', imageSchema);

module.exports  = Images;