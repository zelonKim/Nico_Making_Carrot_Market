import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "ksz1860@naver.com",
      name: "seongjin",
    },
  });
  res.json({
    ok: true,
  });
}
