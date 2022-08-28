const { User, Todo, Habit, Tag } = require('../models');
const { signToken } = require('../utils/auth');

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
    // get Users Todos
    userTodos: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('userTodo');
    },
    // get all habits
    habits: async () => {
      return Habit.find().populate('habitTags').populate('habitUser');
    },
    // get one habit
    habit: async (parent, { habitId }) => {
      return Habit.findOne({ _id: habitId }).populate('habitUser').populate('habitTags');
    },
    // get all todos
    todos: async () => {
      return Todo.find().populate('todoUser');
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
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);
      return { token, user: newUser };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate("userTodo").populate("userHabit"); //populate with addtional stuff later, BUT CAREFUL make TypeDefs Match TOO
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      const token = signToken(user);
      console.log(token, user)
      return { token, user };
    },

    addHabit: async (parent, { userId, habitTags, habitName, habitDescription }, context) => {
      console.log('YOUR CONTEXT', context);
      try {
        const newHabit = await Habit.create({
          habitName,
          habitTags,
          habitDescription,
          habitUser: userId
        });
        const userData = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { userHabit: newHabit._id } },
          { new: true, runValidators: true }
        );

        const habitData = await newHabit.populate('habitTags').populate('habitUser').execPopulate();
        return habitData;
      } catch (err) {
        console.log(err);
      }
      return null;
    },

    addTodo: async (parent, { userId, todoName, todoDescription }) => {
      const newTodo = await Todo.create({ todoName, todoDescription, todoUser: userId });
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { userTodo: newTodo._id } },
        { new: true, runValidators: true }
      );
      const todoData = await newTodo.populate('todoUser').execPopulate();
      return todoData;
    },

    addTag: async (parent, { tagName }) => {
      const newTag = await Tag.create({ tagName });
      return newTag;
    },
    /* Adding mutations ends here */

    /* Updating mutations starts here*/
    updateUser: async (parent, { userId, username, password }) => {
      return User.findOneAndUpdate({ _id: userId }, { $set: { username } }, { new: true });
    },

    updateHabit: async (
      parent,
      { habitId, habitName, habitDescription, habitCompleted, habitTags }
    ) => {
      const updatedHabit = await Habit.findOneAndUpdate(
        { _id: habitId },
        { $set: { 
          ...(habitName) && { habitName }, 
          habitDescription, 
          habitCompleted, 
          habitTags: habitId 
        } },
        { new: true }
      );

      const habitData = await updatedHabit
        .populate('habitTags')
        .populate('habitUser')
        .execPopulate();

      return habitData;
    },

    updateTodo: async (parent, { todoId, todoName, todoDescription, todoCompleted }) => {
      const updatedTodo = await Todo.findOneAndUpdate(
        { _id: todoId },
        { $set: { 
          ...(todoName) && { todoName },
          todoDescription, 
          todoCompleted } },
        { new: true }
      );

      const todoData = await updatedTodo.populate('todoUser').execPopulate();
        console.log(todoData)
      return todoData;
    },

    updateTag: async (parent, { tagId, tagName }) => {
      const updatedTag = await Tag.findOneAndUpdate(
        { _id: tagId },
        { $set: { tagName } },
        { new: true }
      );

      const tagData = await updatedTag.populate('tagHabits').execPopulate();
      return tagData;
    },
    /* Updating mutations ends here */

    /* Removing mutations starts here */
    removeUser: async (parent, { userId }) => {
      // remove all the habits and todos associated with the user
      const user = await User.findOneAndDelete({ _id: userId }).populate('userTodo').populate('userHabit');
      await Habit.deleteMany({ habitUser: userId });
      await Todo.deleteMany({ todoUser: userId });
      return user;
    },
    removeHabit: async (parent, { userId, habitId }) => {
      const habit = await Habit.findOneAndDelete({ _id: habitId });

      const habitData = await habit.populate('habitTags').populate('habitUser').execPopulate();
      return habitData;
    },
    removeTodo: async (parent, { todoId }) => {
      const todo = await Todo.findOneAndDelete({ _id: todoId });

      // need to remove todo from userTodo array
      const user = await User.findOneAndUpdate(
        { _id: todo.todoUser },
        { $pull: { userTodo: todoId } },
        { new: true }
      );

      const todoData = await todo.populate('todoUser').execPopulate();
      return todoData;
    },
    removeTag: async (parent, { tagId }) => {
      return Tag.findOneAndDelete({ _id: tagId });
    }
    /* Removing mutations ends here */
  }
};

module.exports = resolvers;
