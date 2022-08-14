const { Schema, model } = require('mongoose');

const HabitSchema = new Schema({
  HabitId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  HabitLable: {
    type: String,
    required: true,
    unique: true
  },
  HabitDescription: {
    type: String,
    required: true
  },
  HabitCompleted: {
    type: Boolean,
    default: false
  },
  HabitCreated: {
    type: Date,
    default: Date.now
  },
  HabitUpdated: {
    type: Date,
    default: Date.now
  },
  HabitUser: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  HabitPoints: {
    type: Number,
    default: 0
  },
  HabitTags: [{
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

const Tech = model('Tech', HabitSchema);

module.exports = Tech;
