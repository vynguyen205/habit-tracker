const { Schema, Types, model } = require('mongoose');

const TagSchema = new Schema(
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

const Tag = model('Tag', TagSchema)

module.exports = Tag;