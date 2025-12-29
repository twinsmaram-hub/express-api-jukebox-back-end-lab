//require mongoose  lib 
const mongoose=require('mongoose')
// create the mongoose schema
const trackchema=new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  artist: {
     type: String,
    required: true,
  },
})
//initialize the mongoose model
const Track=mongoose.model('Track',trackchema)
//export the model
module.exports=Track