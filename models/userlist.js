var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username:{type:String,required:true, max:15},
    email:{type:String,required:true},
    userid:{type:String,required:true}
})

module.exports = mongoose.model('User',UserSchema)