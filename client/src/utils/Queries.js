// Not super sure what this is for, but it's in the client folder for the mini project so maybe we keep it maybe we don't?
import { gql } from '@apollo/client';

// Get all users
export const QUERY_USER = gql`
  query users($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      userHabit {
        _id
        habitName
        habitDescription
        habitUser
        habitPoints
        habitTags {
          _id
          tagName
          tagHabits
        }
      }
      userTodo {
        _id
        todoName
        todoDescription
        todoUser
        todoPoints
      }
    }
  }
`;

// ALL A USER'S HABITS
export const QUERY_HABITS = gql`
  query userHabits($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    userHabit {
      _id
      habitName
      habitDescription
      habitCompleted
    }
  }
}
`;
// Get all Todos of a user
export const QUERY_TODO = gql`
  query User($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    userTodo {
      _id
      todoName
      todoDescription
      todoCompleted
    }
  }
}
`;