const router = require("express").Router();
let automationController = require("./automationController.js");

//Route to add a smart device
router.post("/addSmartDevice", (req, res) => {
  let data = req.body;
  automationController
    .addSmartDevice(data)
    .then((response) => res.send(response))
    .catch((err) => {
      console.log("error in adding smart device");
    });
});

// Rout to remove a smart device
router.post("/removeSmartDevice", (req, res) => {
  let data = req.body;
  automationController
    .removeSmartDevice(data)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send("Error: ", err);
    });
});

//Route to list all Smart Devices
router.get("/listAllSmartDevice", (req, res) => {
  automationController
    .listAllSmartDevices()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send("Error", err);
    });
});

//Route to perform operations on a smart device

router.post("/performOperation", (req, res) => {
  let data = req.body;
  automationController
    .performOperation(data)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send("Error", err);
    });
});

module.exports = router;
