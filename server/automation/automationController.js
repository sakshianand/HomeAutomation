var automationSchema = require("./automationSchema.js");

addSmartDevice = (deviceData) => {
  var devices = new automationSchema();
  devices.device_name = deviceData.device;
  devices.operation = deviceData.operation;
  return devices.save()
  .then((data)=>{
      return data
  })
  .catch(()=>{
      return ("Device cannot be added ",err)
  });
};
removeSmartDevice = (deviceData) => {
  return automationSchema
    .findOne({
      device_name: deviceData.device,
      operation: deviceData.operation,
    })
    .then((data) => {
      return automationSchema.remove(data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};

listAllSmartDevices = () => {
  return automationSchema
    .find()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

performOperation = (deviceData) => {
  return automationSchema
    .find({ device_name: deviceData.device })
    .lean()
    .exec()
    .then((device) => {
      if (!device.length) {
        return "Device not found";
      }
      deviceArr = device;
      if (deviceArr[0].operation.includes(deviceData.operation)) {
        return "performing operation " + deviceData.operation;
      } else {
        return deviceData.operation + " Operation is Not permitted";
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = {
  addSmartDevice: addSmartDevice,
  removeSmartDevice: removeSmartDevice,
  listAllSmartDevices: listAllSmartDevices,
  performOperation: performOperation,
};
