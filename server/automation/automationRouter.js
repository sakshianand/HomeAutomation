const router = require('express').Router();
let automationController = require('./automationController.js');


router.post('/addSmartDevice',(req,res)=>{
    let data = req.body
    automationController.addSmartDevice(data)
    .then(response=>res.send(response))
    .catch(err=>{
        console.log("error",err);
    })
})

module.exports = router;