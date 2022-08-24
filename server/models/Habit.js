const { Schema, Types ,model } = require('mongoose');


// have frontend require the habitname since we are removing that requirment from the backend

const habitSchema = new Schema({
  habitName: {
    type: String,
    required: true,
  },
  habitDescription: {
    type: String,
    required: false,
  },
  habitCompleted: {
    type: Boolean,
    default: false
  },
  habitCreated: {
    type: Date,
    default: Date.now
  },
  habitUpdated: {
    type: Date,
    default: Date.now
  },
  habitUser: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  habitPoints: {
    type: Number,
    default: 10
  },
  habitTags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
},
{
  toJSON: {
    getters: true,
  },
  id: false,
}
);

// when the app opens, sync the indexes of the habits collection

const Habit = model('Habit', habitSchema);

module.exports = Habit;
