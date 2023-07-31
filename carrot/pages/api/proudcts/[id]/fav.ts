import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { userAgent } from "next/server";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  const alreadyExists = await client.fav.findFirst({
    where: {
      productId: +id?.toString(),
      userId: user?.id,
    },
  });
  res.json({ ok: true });
}

if (alreadyExists) {
  await client.fav.deleteMany({
    where: {
      userId: user.id,
    },
  });
} else {
  await client.fav.create({
    data: {
      user: {
        connnect: {
          id: user?.id,
        },
      },
      product: {
        connect: {
          id: +id.toString(),
        },
      },
    },
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
