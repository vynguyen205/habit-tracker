import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($_id: ID!) {
        user(_id: $_id) {
            _id
            username
            email
            habits {
                _id
                name
                description
                todos {
                    _id
                    name
                    description
                    completed
                }
            }
        }
    }
`;

export const QUERY_HABITS = gql`
    query habits($userId: ID!) {
        habits(userId: $userId) {
            _id
            name
            description
            todos {
                _id
                name
                description
                completed
            }
        }
    }
`;

export const QUERY_TODO = gql`
    query todo($_id: ID!) {
        todo(_id: $_id) {
            _id
            name
            description
            completed
        }
    }
`;

export const QUERY_TODO_USER = gql`
    query todoUser($todoId: ID!) {
        todoUser(todoId: $todoId) {
            _id
            name
            description
            completed
        }
    }
`;

export const QUERY_USER_HABITS = gql`
    query userHabits($userId: ID!) {
        userHabits(userId: $userId) {
            _id
            name
            description
            todos {
                _id
                name
                description
                completed
            }
        }
    }
`;

