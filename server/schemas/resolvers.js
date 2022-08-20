const { User, Todo, Habit, Tag } = require('../models');

const resolvers = {
  // a query is used for getting data from the database
  Query: {
    // get all users
    users: async () => {
      return User.find().populate('userTodo').populate('userHabit');
    },
    // get one user
    user: async (parent, { userId }) => {
      // populte the use with todos and habits
      return User.findOne({ _id: userId }).populate('userTodo').populate('userHabit');
    },
    // get all habits
    habits: async () => {
      return Habit.find().populate('habitTags').populate('habitUser');
    },
    // get one habit
    habit: async (parent, { habitId }) => {
      return Habit.findOne({ _id: habitId }).populate('userHabit').populate('habitTags');
    },
    // get all todos
    todos: async () => {
      return Todo.find();
    },
    // get one todo
    todo: async (parent, { todoId }) => {
      return Todo.findOne({ _id: todoId }).populate('todoUser');
    },
    // get all tags
    tags: async () => {
      return Tag.find().populate('tagHabits');
    },
    // get one tag
    tag: async (parent, { tagId }) => {
      return Tag.findOne({ _id: tagId }).populate('tagHabits');
    }
  },
  // mutation is the same as query, but it is for creating new data
  Mutation: {
    /* Adding mutations starts here*/
    addUser: async (parent, { username, email, password}) => {
      return User.create({ username, email, password });
    },

    addHabit: async (parent, { userId, habitTags, habitName, habitDescription }) => {
      const newHabit = await Habit.create({ habitName, habitTags, habitDescription, habitUser: userId })
      console.log(userId)
       const userData = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { userHabit: newHabit._id } },
        { new: true, runValidators: true, }
      );

      const habitData = await newHabit.populate('habitTags').populate('habitUser').execPopulate();


      // const habitData = await Habit.findOne({_id: newHabit._id}).populate('habitTags');
      console.log(habitData)

      return habitData
    },

    addTodo: async (parent, { userId, todoName, todoDescription }) => {
      const newTodo = await Todo.create({ todoName, todoDescription });
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { userTodo: newTodo._id } },
        { new: true, runValidators: true, }
      );
      return newTodo;
    },

    addTag: async (parent, { tagName }) => {
      const newTag = await Tag.create({ tagName });
      return newTag;
    }
    /* Adding mutations ends here */
    /* Updating mutations starts here*/
    // updateUser: async (parent, { userId, user }) => {
    //   return User.findOneAndUpdate( { _id: userId }, user, { new: true });
    // }
    /* Updating mutations ends here*/

    /* Removing mutations starts here*/
//     removeUser: async (parent, { userId }) => {
//       return User.findOneAndDelete({ _id: userId });
//     },
//     removeHabit: async (parent, { userId, userHabit }) => {
//       return User.findOneAndUpdate(
//         { _id: userId },
//         { $pull: { habits: userHabit } },
//         { new: true }
//       );
//     },
//     /* Removing mutations ends here*/
  },
};

module.exports = resolvers;
