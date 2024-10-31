
const mongoose = require('mongoose');

const todoSchema =  mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done:{
      type:Boolean,
      default:false,
    },
   
}, 

);

const TodoModel = mongoose.model('tasks', todoSchema);

module.exports = TodoModel;