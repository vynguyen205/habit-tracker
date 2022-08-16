// Not super sure what this is for, but it's in the client folder for the mini project so maybe we keep it maybe we don't?

import { gql } from '@apollo/client';

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


export const ADD_HABIT = gql`
    mutation addHabit($name: String!, $description: String!, $userId: ID!) {
        addHabit(name: $name, description: $description, userId: $userId) {
            _id
            name
            description
            userId
        }
    }
`;

export const ADD_TODO = gql`
    mutation addTodo($name: String!, $description: String!, $userId: ID!, $habitId: ID!) {
        addTodo(name: $name, description: $description, userId: $userId, habitId: $habitId) {
            _id
            name
            description
            userId
            habitId
        }
    }
`;
