import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/prismaClient";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  const stream = await client.stream.findUnique({
    where: {
      id: +id.toString(),
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      name: true,
      description: true,
      price: true,
      userId: true,
      cloudflareId: true,
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });

  
  const isOwner = stream?.userId === user?.id;

  const OwnedStream = await client.stream.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });

  res.json({ ok: true, stream: isOwner ? OwnedStream : stream });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
