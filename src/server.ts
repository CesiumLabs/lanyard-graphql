import { ApolloServer } from "apollo-server-express";
import LanyardAPI from "./DataSource";
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
    });
  }
}

const server = new Server();

export default server;
