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
    }
}
`;

// update username
export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($userId: ID!, $username: String!) {
  updateUser(userId: $userId, username: $username) {
    username
    email
  }
}`

export const UPDATE_HABIT_NAME = gql`
 mutation UpdateHabitName($habitId: ID!, $habitName: String) {
  updateHabit(habitId: $habitId, habitName: $habitName) {
    _id
    habitName
    habitDescription
    habitCompleted
    habitUser {
      username
    }
  }
}
`;


// mutation to update a completed habit
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

// mutation to update a todo name
// export const UPDATE_TODO = gql`