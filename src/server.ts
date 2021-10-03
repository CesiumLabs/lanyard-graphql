import { ApolloServer } from "apollo-server";
import LanyardAPI from "./data-source";
import resolvers from "./resolvers";
import typeDefs from "./schema";

class Server extends ApolloServer {
  constructor() {
    super({
      resolvers,
      typeDefs,
      dataSources: () => {
        return {
          LanyardAPI: new LanyardAPI(),
        };
      },
      introspection: true,
    });
  }
}

const server = new Server();

export default server;
