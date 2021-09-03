import { gql } from "apollo-server";

const root = gql`
  type Query {
    ping: String!
  }
  type Mutation {
    ping: String!
  }
`;

export default [root];
