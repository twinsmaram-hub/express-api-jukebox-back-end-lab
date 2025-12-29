//require express
const express=require('express')
//require the model
const Track = require('../models/track');
//initialize the router 
const router=express.Router()

//POST/pets/
router.post('/',async (req,res)=>{
    try {
        //use the model to inser the data into db
        const track = await Track.create(req.body)
        //responed with the new track data
        res.status(201).json({track})   //201 sessus created
    } catch (error) {
        console.log(error)
      res.status(500).json({error:"failed to create track"})  
    }
})

//GET+/tracks/
router.get('/',async(req,res)=>{
try {
    const track = await Track.find({})
    res.status(200).json({track})

} catch (error) {
     console.log(error)
     res.status(500).json({error:"failed to get tracks"})  
}
})
//GET+/tracks/123
router.get('/:id' , async(req,res)=>{
    try {
        //get the id from the req params
        const {id}=req.params
        //use the model to find by id
        const track =await Track .findById(id)   
        // if we dont get a track respond with 404 
        //else 
        //send 200 with track
        if(!track){
           res.status(404).json({error:'track not Found'})
        }else{
          res.status(200).json({track})
        }
        
    } catch (error) {
        console.log(error)
       res.status(500).json({error:"failed to get track"})  
    }
})
//DELETE+/tracks/123
router.delete('/:id' ,async (req,res)=>{
    try {
        //get the id from params'
         const {id}=req.params
        //try to find and delete the track using id
        const track =await Track .findByIdAndDelete(id)   

        //if there is no track,send 404
        if(!track){
           res.status(404).json({error:'track not Found'})
        }
        //else 
        else{
            //use status  200 if dont
          res.status(200).json({track})
        }
        //send back masg to say deleted

    } catch (error) {
       console.log(error)
       res.status(500).json({error:"failed to delete track"})  
    }
        

})
//PUT+/tracks/123
router.put('/:id' ,async (req,res)=>{
    try {
        const {id}=req.params
        const track =await Track .findByIdAndUpdate(id,req.body,{new:true})   

        if(!track){
           res.status(404).json({error:'track not Found'})
        }
        else{
          res.status(200).json({track})
        }

    } catch (error) {
       console.log(error)
       res.status(500).json({error:"failed to update track"})  
    }   
})

//export the router
module.exports=router