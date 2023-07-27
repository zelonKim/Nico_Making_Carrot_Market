/* import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";

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
 */

//////////////////



/*
 import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  let user;

  if (email) {
    user = await client.user.findUnique({
      where: {
        // 해당 프로퍼티를 갖는 요소를 찾아냄.
        email,
      },
    });

    if (user) {
      console.log("found it");
    }

    if (!user) {
      console.log("can not find.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }

  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone, // convert to number type
      },
    });

    if (user) {
      console.log("found it");
    }

    if (!user) {
      console.log("can not find.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: + phone,
        },
      });
    }
    console.log(user);
  }
  return res.status(200).end();
}

export default withHandler("POST", handler); */

///////////////////

/* 
import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;

  const user = await client.user.upsert({
    where: {
      ...(phone && {phone: +phone}), // if there is phone number, return phone number.
      ...(email && {email}), // if there is email, return email.
    },
    create: {
      name: "Anonymous",
      ...(phone && {phone: +phone}),
      ...(email && {email}),
    },
    update:{},
  })

  console.log(user)

  return res.status(200).end();
} 

export default withHandler("POST", handler);
 */

////////////////////

/* 
import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;

  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });


  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
       connect: {
        id: user.id
        }
      }
    }
  })
  return res.status(200).end();
}

export default withHandler("POST", handler);
*/

/////////////////////
/* 
import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;

  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
          },
        },
      },
    },
  });
  return res.status(200).end();
}

export default withHandler("POST", handler);
 */

///////////////////

/* 
import twilio from 'twilio';
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if(!user) return res.status(400).json({ok: false})
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  return res.json({
    ok: true,
  })
}

export default withHandler("POST", handler);
*/

///////////////////

import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}.`,
    });
    console.log(message);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
