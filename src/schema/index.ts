import { gql } from "apollo-server-express";

const root = gql`
  type Query {
    ping: String!
    api(id: String!): APIRoot
  }

  type Mutation {
    ping: String!
  }

  type Assets {
    large_text: String
    large_image: String
  }

  type Party {
    id: String
  }

  type Timestamps {
    start: Float
    end: Float
  }

  type Activities {
    type: Int
    sync_id: String
    state: String
    session_id: String
    name: String
    id: String
    flags: Int
    details: String
    created_at: Float
    assets: Assets
    party: Party
    timestamps: Timestamps
  }

  type DiscordUser {
    username: String
    public_flags: Int
    id: String
    discriminator: String
    avatar: String
  }

  type Spotify {
    track_id: String
    song: String
    artist: String
    album_art_url: String
    album: String
    timestamps: Timestamps
  }

  type Data {
    listening_to_spotify: Boolean
    discord_status: String
    active_on_discord_web: Boolean
    active_on_discord_mobile: Boolean
    active_on_discord_desktop: Boolean
    activities: [Activities]
    discord_user: DiscordUser
    spotify: Spotify
  }

  type APIRoot {
    success: Boolean
    data: Data
  }
`;

export default [root];
