const { Schema, model } = require('mongoose');

const habitSchema = new Schema({
  habitId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  habitLable: {
    type: String,
    required: true,
    unique: true
  },
  habitDescription: {
    type: String,
    required: true
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
    default: 0
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

const habit = model('habit', habitSchema);

module.exports = Tech;
