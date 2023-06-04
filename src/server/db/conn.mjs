import { MongoClient } from "mongodb";

const connectionString = process.env.REACT_APP_MONGODB_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("csgofragsDB");

export default db;