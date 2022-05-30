import type { NextApiHandler } from "next";

export type DeleteHelloRequest = { data: string };

export const path = "api/examples/deleteHello";

export const deleteHello: NextApiHandler<DeleteHelloRequest> = async (req, res) => {
  const requestedData = req.query as DeleteHelloRequest;

  if (!requestedData.data) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  console.log(requestedData.data);

  res.status(200).end();
  return;
};

export default deleteHello;
