var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ToDoSchema = new Schema({
    title:{type:String,required:true},
    duebydate:{type:Date,required:true },
    createdon:{type:Date,required:true},
    status:{type:String,required:true},
    active:{type:String,required:true},
    username:{type:String,required:true, max:12}
})

module.exports = mongoose.model('ToDo',ToDoSchema)