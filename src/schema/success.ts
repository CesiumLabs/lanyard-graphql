import { gql } from "apollo-server";

const root = gql`
  extend type Query {
    success: Boolean!
  }
`;

export default [root];
