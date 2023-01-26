import { env } from "@/env/server.mjs";
import { Client } from "@notionhq/client";


export const notion = new Client({ auth: env.NOTION_API_KEY });

export const contact = async ({
  message,
}: {
  message: {
    name: string;
    phone: string;
    purpose: string;
    message: string;
  };
}) => {
  const response = await notion.pages.create({
    parent: {
      database_id: env.NOTION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: message.name,
            },
          },
        ],
      },
      Phone: {
        phone_number: message.phone,
      },
      Purpose: {
        select: {
          name: message.purpose,
        },
      },
      Message: {
        rich_text: [
          {
            text: {
              content: message.message,
            },
          },
        ],
      },
    },
  });
  return response;
};
