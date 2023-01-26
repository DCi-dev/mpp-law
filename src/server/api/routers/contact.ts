import { env } from "@/env/server.mjs";
import { Client } from "@notionhq/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const contactRouter = createTRPCRouter({
  contactForm: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        purpose: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const notion = new Client({ auth: env.NOTION_API_KEY });

      const message = await notion.pages.create({
        parent: {
          database_id: env.NOTION_DATABASE_ID,
        },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: input.name,
                },
              },
            ],
          },
          Phone: {
            rich_text: [
              {
                text: {
                  content: input.phone,
                },
              },
            ],
          },
          Purpose: {
            select: {
              name: input.purpose,
            },
          },
          Message: {
            rich_text: [
              {
                text: {
                  content: input.message,
                },
              },
            ],
          },
        },
      });

      return message;
    }),
});
