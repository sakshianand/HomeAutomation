# HomeAutomation

1. List All the smart devices
[GET] /automation/listAllSmartDevice
Response Example: [
    {
        "operation": [
            "ON",
            "OFF"
        ],
        "_id": "5e9b30fff2acfd22e32792c3",
        "device_name": "AC",
        "__v": 0
    },
    {
        "operation": [
            "ON",
            "OFF"
        ],
        "_id": "5e9b31b2fc2aa4257135e4ea",
        "device_name": "Tubelight",
        "__v": 0
    },
    {
        "operation": [
            "ON",
            "OFF"
        ],
        "_id": "5e9b31c9fc2aa4257135e4eb",
        "device_name": "Fan",
        "__v": 0
    },
    {
        "operation": [
            "ON",
            "OFF",
            "Play"
        ],
        "_id": "5e9b31e0fc2aa4257135e4ec",
        "device_name": "Music System",
        "__v": 0
    }
]
2. Add new smart device

[POST] /automation/addSmartDevice
Body : {
	"device":"Bulb",
	"operation":["ON"]
}

3. Perform an operation on a device 

[POST] /automation/performOperation
Body: {
	"device":"Bulb",
	"operation":"ON"
}

Response: performing operation ON

4. Remove an installed device
[POST] /automation/removeSmartDevice
Body: {
    "device":"Bulb"
    }
