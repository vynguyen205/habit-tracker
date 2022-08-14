const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    habit: [String]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addHabit(profileId: ID!, habit: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeHabit(profileId: ID!, habit: String!): Profile
  }
`;

module.exports = typeDefs;
