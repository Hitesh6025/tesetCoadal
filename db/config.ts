import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
if(!connectionString) {
  throw new Error("NEXT_PUBLIC_DATABASE_URL is not defined in the environment variables.");
}

const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);


export default db;
