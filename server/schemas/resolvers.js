const { User } = require('../models');

const resolvers = {
  // a query is used for getting data from the database
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      // populte the use with todos and habits
      return User.findOne({ _id: userId }).populate('userTodo').populate('userHabit');
    },
  },
  // mutation is the same as query, but it is for creating new data
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
