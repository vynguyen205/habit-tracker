const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    addHabit: async (parent, { userId, userHabit }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { habits: userHabit },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeHabit: async (parent, { userId, userHabit }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { habits: userHabit } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
