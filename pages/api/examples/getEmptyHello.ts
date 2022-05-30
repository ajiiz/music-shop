import type { NextApiHandler } from "next";

export type GetHelloResponse = { data: string };

export const path = "api/examples/getEmptyHello";

export const getEmptyHello: NextApiHandler<GetHelloResponse> = async (req, res) => {
  res.json({ data: "Hello world" });
};

export default getEmptyHello;
