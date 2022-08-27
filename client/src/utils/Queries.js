// Not super sure what this is for, but it's in the client folder for the mini project so maybe we keep it maybe we don't?
import { gql } from '@apollo/client';

// Get one User
export const QUERY_USER = gql`
  query User($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    userHabit {
      habitName
    }
    userTodo {
      todoName
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
  query userTodos($userId: ID!) {
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