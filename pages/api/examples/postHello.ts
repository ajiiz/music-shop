import type { NextApiHandler } from "next";

export type PostHelloRequest = { data: string };

export const path = "api/examples/postHello";

export const postHello: NextApiHandler<PostHelloRequest> = async (req, res) => {
  const requestedData = req.body.params as PostHelloRequest;

  if (!requestedData.data) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  console.log(requestedData.data);

  res.status(200).end();
  return;
};

export default postHello;
