import server from "./Server";

server
  .listen()
  .then(({ url }): void =>
    console.log(`🚀 Apollo Server is now running at ${url}.`)
  );
