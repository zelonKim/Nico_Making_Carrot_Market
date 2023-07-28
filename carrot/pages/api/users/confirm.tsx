/* import { withIronSessionApiRoute } from "iron-session/next"
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body; // submit 1234 

  const exists = await client.token.findUnique({
    where: {
        payload: token // payload is 1234
    },
    include: { user: true } // bring the user data
  })

  if(!exists) res.status(404).end()

  console.log(exists)
  res.status(200).end();
}


export default withIronSessionApiRoute(withHandler("POST", handler), {
    cookieName: "carrotsession",
    password: "9845904809485098594385093840598dfslkgjfdlgkfsdjgldfksjgdgd",
  });
 */


///////////////


import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;

  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!exists) res.status(404).end();

  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();

  res.status(200).end();
}


export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password:
    "9845904809485098594385093840598dfslkgjfdlgkfsdjgldfksjgdgd",
}); 

