import pg from "pg";
const { Pool } = pg;

async function query(queryObject) {
  const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
    const client = await pool.connect();
  try {
    
    const result = await client.query(queryObject);
    client.end();
    return result;
  }
  catch(error){
    console.log(error);
  }
   finally {
    client.release(true);
  }
}
export default {
  query: query,
};
