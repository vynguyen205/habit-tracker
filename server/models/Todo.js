const { Schema, model } = require('mongoose');

// Create a schema for our Todo model
const TodoSchema = new Schema({
    TodoId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    TodoLabel: {
        type: String,
        required: true
    },
    TodoDescription: {
        type: String,
        required: true
    },
    TodoCompleted: {
        type: Boolean,
        default: false
    },
    TodoCreated: {
        type: Date,
        default: Date.now
    },
    TodoUpdated: {
        type: Date,
        default: Date.now
    },
    TodoUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    TodoPoints: {
        type: Number,
        default: 0
    },
    TodoTags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
},
{
    toJSON: { getters: true }, // this will allow us to use the getters in the frontend
    id: false, // this will allow us to use the _id in the frontend
}
);

const Todo = model('Todo', TodoSchema);

module.exports = Todo;
