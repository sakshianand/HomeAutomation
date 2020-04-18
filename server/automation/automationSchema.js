const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let devices = new mongoose.Schema({
    device_name:{
        type:String
    },
    operation:{type:Array}
},{collection:'devices'});

let deviceSchema = mongoose.model('devices',devices);

module.exports = deviceSchema;