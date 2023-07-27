import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default function withHandler(
    method: "GET"|"POST"|"DELETE", 
    fn: (req: NextApiRequest, res: NextApiResponse) => void 
    ) {
        return async function(req: NextApiRequest, res: NextApiResponse) {  // next js가 실행할 함수
              if(req.method !== method) {
                return res.status(405).end()
              }
              try {
                await fn(req, res);
              } 
              catch(error) {
                console.log(error)
                return res.status(500).json({ error })
              }
        }
    }