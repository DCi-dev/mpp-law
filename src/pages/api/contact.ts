import { contact } from "@/server/notion/client";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyError";
  }
}

interface ContactBody {
  message: {
    name: string;
    phone: string;
    purpose: string;
    message: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await contact(req.body as ContactBody);
      res.json({ received: true });
    } catch (err) {
      res.status(400).send(`Webhook Error: ${(err as MyError).message}`);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
