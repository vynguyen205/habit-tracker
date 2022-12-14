const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    userHabit: [Habit]
    userTodo: [Todo]
  }

  type Tag {
    _id: ID!
    tagName: String!
  }
  type Habit {
    _id: ID!
    habitName: String
    habitDescription: String
    habitCompleted: Boolean
    habitCreated: String
    habitUpdated: String
    habitUser: User
    habitPoints: Int
    habitTags: [Tag]
  }
  type Todo {
    _id: ID
    todoName: String
    todoDescription: String
    todoCompleted: Boolean
    todoCreated: String
    todoUpdated: String
    todoUser: User
    todoPoints: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    habits: [Habit]!
    habit(habitId: ID!): Habit
    # userHabits(userId: ID!): [Habit]
    todos: [Todo]!
    todo(todoId: ID!): Todo
    userTodos(userId: ID!): [Todo]
    tags: [Tag]!
    tag(tagId: ID!): Tag
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHabit(userId: ID!, habitName: String!, habitDescription: String, habitTags: [ID]): Habit
    addTodo(userId: ID!, todoName: String!, todoDescription: String): Todo
    addTag(tagName: String!): Tag
    updateUser(userId: ID!, username: String!): User
    updateHabit(habitId: ID!, habitName: String, habitTags: [ID], habitCompleted: Boolean): Habit
    updateTodo(todoId: ID!, todoName: String, todoDescription: String, todoCompleted: Boolean): Todo
    updateTag(tagId: ID!, tagName: String!): Tag
    removeUser(userId: ID!): User
    removeHabit(userId: ID!, habitId: ID!): Habit
    removeTodo(todoId: ID!): User
    removeTag(tagId: ID!): Tag
  }
`;

module.exports = typeDefs;
