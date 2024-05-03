import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("this is my root route");
});

app.post("/dreams", async (req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const content = req.body.content;
  const type = req.body.type;
  const theme = req.body.theme;
  const element = req.body.element;
  db.query(
    `INSERT INTO dreamposts (name, date, content, type, theme, element) VALUES ($1, $2, $3, $4, $5, $6)`,
    [name, date, content, type, theme, element]
  );
  res.json({ success: true });
});

app.get("/dreams", async (req, res) => {
  const result = await db.query(`SELECT 
  dreamposts.name,
  dreamposts.date,
  dreamposts.content,
  dreamposts.type,
  dreamposts.theme,
  dreamposts.element
  FROM dreamposts`);
  res.json(result.rows);
});

app.listen(8080, () => {
  console.log("You are listening at port 8080");
});
