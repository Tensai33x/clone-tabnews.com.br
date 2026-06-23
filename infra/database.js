import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    ssl: process.env.NODE_ENV === "development" || "test" ? false : true,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);
    client.end();
    return result;
  } catch (error) {
    throw error;
  } finally {
    client.end();
  }
}
export default {
  query: query,
};
