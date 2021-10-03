import { HTTPDataSource } from "apollo-datasource-http";
import { LanyardAPIData } from "./interfaces";
import { Pool } from "undici";
import { API_URL } from "./constants";

const pool = new Pool(API_URL);

export default class LanyardAPI extends HTTPDataSource {
  constructor() {
    super(API_URL, {
      pool,
      clientOptions: {
        bodyTimeout: 5000,
        headersTimeout: 2000,
      },
    });
  }

  async getUser(user: string): Promise<LanyardAPIData> {
    return (await this.get(`/v1/users/${user}`)) as unknown as LanyardAPIData;
  }
}
