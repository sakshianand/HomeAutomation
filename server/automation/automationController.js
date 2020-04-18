var automationSchema = require("./automationSchema.js")

addSmartDevice = (deviceData)=>{
    var devices = new automationSchema()
    devices.device_name=deviceData.device
    devices.operation=deviceData.operation
    return devices.save()
}
        
    
    


module.exports={addSmartDevice:addSmartDevice}