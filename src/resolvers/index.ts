import { LanyardAPIData } from "../interfaces";

const Query = {
  ping: (): string => "Pong!",
  api: async (
    _: never,
    { id }: { id: string },
    { dataSources }: any
  ): Promise<LanyardAPIData> => {
    return await dataSources.LanyardAPI.getUser(id).then(
      (res: any) => res.body
    );
  },
};

export default { Query };
