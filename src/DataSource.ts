import { HTTPDataSource } from "apollo-datasource-http";
import { LanyardAPIData } from "./interfaces";
import { Pool } from "undici";

const pool = new Pool("https://api.lanyard.rest");

export default class LanyardAPI extends HTTPDataSource {
  constructor() {
    super("https://api.lanyard.rest", {
      pool,
      clientOptions: {
        bodyTimeout: 5000,
        headersTimeout: 2000,
      },
    });
  }

  async getUser(user: string): Promise<LanyardAPIData> {
    return (await this.get("/v1/users/" + user)) as unknown as LanyardAPIData;
  }
}
