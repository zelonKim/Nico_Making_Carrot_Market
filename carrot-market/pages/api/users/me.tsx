import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/prismaClient";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session.user); // { id: 16 }

  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });

  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
