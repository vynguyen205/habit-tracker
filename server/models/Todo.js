const { Schema, Types, model } = require('mongoose');


const todoSchema = new Schema({
    todoName: {
        type: String,
        required: true,
        unique: false
    },
    todoDescription: {
        type: String,
        required: false,
    },
    todoCompleted: {
        type: Boolean,
        default: false
    },
    todoCreated: {
        type: Date,
        default: Date.now
    },
    todoUpdated: {
        type: Date,
        default: Date.now
    },
    todoUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    todoPoints: {
        type: Number,
        default: 10
    }
},
{   
    toJSON: {
        getters: true,
    },
    id: false,

});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
