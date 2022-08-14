const { Schema, model } = require('mongoose');

// Create a schema for our Todo model
const todoSchema = new Schema({
    todoId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    todoLabel: {
        type: String,
        required: true
    },
    todoDescription: {
        type: String,
        required: true
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
        default: 0
    },
    todoTags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
},
{
    toJSON: { getters: true }, // this will allow us to use the getters in the frontend
    id: false, // this will allow us to use the _id in the frontend
}
);

const Todo = model('Todo', todoSchema);

module.exports = Todo;
