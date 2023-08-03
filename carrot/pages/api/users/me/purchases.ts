import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;

  /* 
  client.record.findMany({
  where: {
    userId: user?.id,
    kind:"Purchase"
  },
}); 
*/

  const purchases = await client.purchase.findMany({
    where: {
      userId: user?.id,
    },
    include: {
        proudct: true;
    }
  });
  res.json({
    ok: true,
    purchases,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
