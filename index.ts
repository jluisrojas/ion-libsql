import { Hono } from "hono";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";

const app = new Hono().get("*", async (c) => {
  const url = "";
  const authToken = "";

  const client = createClient({
    url,
    authToken,
  });

  const db = drizzle(client);

  return c.text("Hello");
});

export default app;
