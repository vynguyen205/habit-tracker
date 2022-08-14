const { Schema, Types, model } = require('mongoose');

const tagSchema = new Schema(
    {
      // tagId: {
      //   type: Schema.Types.ObjectId,
      //   default: () => new Types.ObjectId()
      // },
      tagLabel: {
        type: String,
        required: true
      },
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