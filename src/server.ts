import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./schema";

class Server extends ApolloServer {
  constructor() {
    super({
      resolvers,
      typeDefs,
    });
  }
}

const server = new Server();

export default server;
