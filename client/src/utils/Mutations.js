// Not super sure what this is for, but it's in the client folder for the mini project so maybe we keep it maybe we don't?
import { gql } from '@apollo/client';

// mutation to log in a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        userHabit {
          _id
          habitName
        }
        userTodo {
          _id
          todoName
        }
      }
    }
  }
`;

// mutation to sign up a user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// mutation to add a new habit
export const ADD_HABIT = gql`
  mutation AddHabit($userId: ID!, $habitName: String!, $habitTags: [ID], $habitDescription: String) {
    addHabit(userId: $userId, habitName: $habitName, habitTags: $habitTags, habitDescription: $habitDescription) {
      _id
      habitName
      habitDescription
      habitCompleted
      habitUser {
        _id
        username
      }
      habitTags {
        _id
        tagName
      }
    }
}
`;

// mutation to add a new todo
export const ADD_TODO = gql`
  mutation AddTodo($userId: ID!, $todoName: String!, $todoDescription: String) {
    addTodo(userId: $userId, todoName: $todoName, todoDescription: $todoDescription) {
      _id
      todoName
      todoDescription
      todoCompleted
      todoUser {
        _id
        username
      }
    }
}`;

// mutation to update a habit
export const ADD_TAG = gql`
mutation AddTag($tagName: String!) {
  addTag(tagName: $tagName) {
    _id
    tagName
  }
}`

// update username
export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($userId: ID!, $username: String!) {
  updateUser(userId: $userId, username: $username) {
    username
    email
  }
}`


// mutation to update a habit
export const UPDATE_HABIT = gql`
mutation UpdateHabit($habitId: ID!, $habitCompleted: Boolean) {
  updateHabit(habitId: $habitId, habitCompleted: $habitCompleted) {
    _id
    habitName
    habitDescription
    habitCompleted
    habitUser {
      username
    }
    habitTags {
      tagName
    }
  }
}
`;

// mutation to update a todo
export const UPDATE_TODO = gql`
mutation UpdateTodo($todoId: ID!,  $todoCompleted: Boolean,  $todoName: String) {
  updateTodo(todoId: $todoId, todoCompleted: $todoCompleted, todoName: $todoName) {
    _id
    todoName
    todoDescription
    todoCompleted
    todoUser {
      username
    }
  }
}
`;

// mutation to update a tag
export const UPDATE_TAG = gql`
mutation UpdateTag($tagId: ID!, $tagName: String!) {
  updateTag(tagId: $tagId, tagName: $tagName) {
    _id
    tagName
  }
}`;

// mutation to remove user
export const REMOVE_USER = gql`
mutation RemoveUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
    username
    email
  }
}`;

// mutation to remove habit
export const REMOVE_HABIT = gql`
mutation RemoveHabit($userId: ID!, $habitId: ID!) {
  removeHabit(userId: $userId, habitId: $habitId) {
    _id
    habitName
    habitDescription
    habitCompleted
    habitUser {
      _id
      username
    }
  }
}`;

// mutation to remove todo
export const REMOVE_TODO = gql`
mutation RemoveHabit($todoId: ID!) {
  removeTodo(todoId: $todoId) {
    _id
    todoName
    todoDescription
    todoCompleted
    todoUser {
      _id
      username
    }
  }
}`;

// mutation to remove tag
export const REMOVE_TAG = gql`
mutation RemoveTag($tagId: ID!) {
  removeTag(tagId: $tagId) {
    _id
    tagName
  }
}`;