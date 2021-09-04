import { gql } from "apollo-server-express";

const root = gql`
  extend type Query {
    success: Boolean!
  }
`;

export default [root];
