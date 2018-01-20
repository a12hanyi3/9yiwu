var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划


var  obj = {
	password:String,
	username:String
}



var model = mongoose.model("user",new Schema(obj));


module.exports = model;


