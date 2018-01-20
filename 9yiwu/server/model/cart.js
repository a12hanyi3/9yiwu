var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划


var  obj = {
	title:String,
	storeId:String,
	username:String,
	cartDetails:Array,
}



var model = mongoose.model("cart",new Schema(obj));


module.exports = model;


