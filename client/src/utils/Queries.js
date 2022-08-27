// Not super sure what this is for, but it's in the client folder for the mini project so maybe we keep it maybe we don't?
import { gql } from '@apollo/client';

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

export const QUERY_TODO = gql`
  query todo($_id: ID!) {
    todo(_id: $_id) {
      _id
      todoName
      todoDescription
      todoCompleted
    }
  }
`;

// export const QUERY_TODO_USER = gql`
//   query todoUser($todoId: ID!) {
//     todoUser(todoId: $todoId) {
//       _id
//       name
//       description
//       completed
//     }
//   }
// `;


// export const QUERY_USER_HABITS = gql`
//   query userHabits($userId: ID!) {
//     userHabits(userId: $userId) {
//       _id
//       name
//       description
//       todos {
//         _id
//         name
//         description
//         completed
//       }
//     }
//   }
// `;
