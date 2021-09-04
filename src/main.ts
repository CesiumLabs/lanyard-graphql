import server from "./Server";
import express from "express";
import cors from "cors";

const main = async () => {
  const app = express();

  app.use(cors());

  await server.start();

  server.applyMiddleware({ path: "/graphql", app });

  app.listen(80, () => {
    console.log(`🚀 Apollo Server is now running at http://localhost:80.`);
  });
};

main();
