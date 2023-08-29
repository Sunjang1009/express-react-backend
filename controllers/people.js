const express = require("express");
const People = require("../models/people");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        res.json(await People.find({}));
    }catch(err){
        res.status(400).json(err);
    }
});

router.post("/", async(req,res) => {
    try{
        res.json(await People.create(req.body));
    }catch(err){
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try{
        res.json(
            await People.findByIdAndUpdate(req.parands.id, req.body, {new: true} )
        );
    }catch(err){
        res.status(400).json(err);
    }
});

router.delete("/:id", async(req,res) => {
    try{
        res.json(await People.findOneAndRemove(req.params.id))
    }catch(err){
        res.status(400).json(err);
    }
});


module.exports = router;

