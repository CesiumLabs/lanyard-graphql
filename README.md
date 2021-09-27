# Lanyard GraphQL API

This is an port of [Lanyard](https://github.com/Phineas/lanyard)'s REST API in GraphQL.

Lanyard is a RESTful API and websocket which is powered by a Discord bot, which exposes your Discord status to a REST API in less than 10 seconds. [Read the README](https://github.com/Phineas/lanyard#readme) and [join their Discord server](https://discord.gg/WScAm7vNGF) for it to work.

## Get Started

🎉 Deployed! Use it right now at https://lanyard.ymarc.us. Explore the API on [Apollo Studio](https://studio.apollographql.com/sandbox?endpoint=https://lanyard.ymarc.us). Here's an example query:  
```gql
{
  ping
}
```  
Response:

```json
{
  "data": {
    "ping": "Pong!"
  }
}
```  
A more complicated query:

```gql
{
  ping
  api(id: "YOUR_ID_HERE") {
    success
    data {
      discord_user {
        username
      }
      spotify {
        song
      }
      listening_to_spotify
      active_on_discord_desktop
      active_on_discord_mobile
      activities {
        name
        state
        type
        details
        timestamps {
          start
        }
      }
      discord_status
    }
  }
}
```  

Response:  

```json
{
  "data": {
    "ping": "Pong!",
    "api": {
      "success": true,
      "data": {
        "discord_user": {
          "username": "geneva"
        },
        "spotify": {
          "song": "Crimewave"
        },
        "listening_to_spotify": true,
        "active_on_discord_desktop": true,
        "active_on_discord_mobile": false,
        "activities": [
          {
            "name": "Visual Studio Code",
            "state": "Working on wellfare",
            "type": 0,
            "details": "⌨️ Editing signup.tsx",
            "timestamps": {
              "start": 1632769111777
            }
          },
          {
            "name": "Spotify",
            "state": "Crystal Castles",
            "type": 2,
            "details": "Crimewave",
            "timestamps": {
              "start": 1632769085304
            }
          }
        ],
        "discord_status": "dnd"
      }
    }
  }
}
```  

Full documentation of API on Apollo Studio.


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
