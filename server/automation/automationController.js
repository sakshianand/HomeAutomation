var automationSchema = require("./automationSchema.js")

addSmartDevice = (deviceData)=>{
    var devices = new automationSchema()
    devices.device_name=deviceData.device
    devices.operation=deviceData.operation
    return devices.save()
}
removeSmartDevice = (deviceData)=>{
    return automationSchema.findOne({ device_name:deviceData.device, operation:deviceData.operation})
    .then((data)=>{ 
        return automationSchema.remove(data)
    })
    .catch((err)=>{
        console.log("error:",err); 
    });
}

listAllSmartDevices = ()=>{
    return automationSchema.find()
    .then((data)=>{
        return data
    })
    .catch((err)=>{
        console.log("error",err);
        
    })
}
        
    
    


module.exports={addSmartDevice:addSmartDevice,removeSmartDevice:removeSmartDevice,listAllSmartDevices:listAllSmartDevices}