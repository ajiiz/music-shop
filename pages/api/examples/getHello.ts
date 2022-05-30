import type { NextApiHandler } from "next";

export type GetHelloRequest = { data: string };

export type GetHelloResponse = { data: string };

export const path = "api/examples/getHello";

export const getHello: NextApiHandler<GetHelloResponse> = async (req, res) => {
  const requestedData = req.query as GetHelloRequest;

  if (!requestedData.data) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  res.json({ data: requestedData.data });
};

export default getHello;
