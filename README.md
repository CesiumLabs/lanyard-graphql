# Lanyard GraphQL API

This is an port of [Lanyard](https://github.com/Phineas/lanyard)'s REST API in GraphQL.

Lanyard is a RESTful API and websocket which is powered by a Discord bot. [Read the README](https://github.com/Phineas/lanyard#readme) and [join their Discord Server](https://discord.gg/WScAm7vNGF) for it to work.

## Get Started

This is not deployed, but will be (with adjustments) in the future.

### Locally

You'll need Node.js and Yarn (preferred)/NPM installed.

```sh
# Clone the repository
git clone https://github.com/DevSnowflake/lanyard-graphql.git

# Install dependencies
yarn

# If you're using NPM
npm install

# Build
yarn build

# If you're using NPM
npm run build

# Run the server
yarn start

# If you're using NPM
npm start
```

Apollo Server should start running at http://localhost:4000/. To test it, you can use [Apollo Studio]("https://studio.apollographql.com/sandbox?endpoint=http%3A%2F%2Flocalhost%3A4000%2F").

## License

[MIT License](LICENSE) - Copyright © 2021 geneva (Marcus Y.)
