const router = require('express').Router();
let automationController = require('./automationController.js');


router.post('/addSmartDevice',(req,res)=>{
    let data = req.body
    automationController.addSmartDevice(data)
    .then(response=>res.send(response))
    .catch(err=>{
        console.log("error in adding smart device",err);
    })
})

router.post('/removeSmartDevice',(req,res)=>{
    let data = req.body
    automationController.removeSmartDevice(data)
    .then((resp)=>{
        res.send(resp)
    })
    .catch((err)=>{
        res.send("Error: ",err)
    })
})

module.exports = router;