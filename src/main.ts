import server from "./Server";

server
  .listen(8080)
  .then(({ url }): void =>
    console.log(`🚀 Apollo Server is now running at ${url}.`)
  );
