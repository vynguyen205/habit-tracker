const { Schema, Types, model } = require('mongoose');

const tagSchema = new Schema(
    {
      tagName: {
        type: String,
        required: true
      }
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
);

const Tag = model('Tag', tagSchema)

module.exports = Tag;