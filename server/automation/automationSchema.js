const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let devices = new mongoose.Schema({
    device_name:{
        type:String,
        required:true
    },
    operation:{type:Array,required:true}
},{collection:'devices'});

let deviceSchema = mongoose.model('devices',devices);

module.exports = deviceSchema;