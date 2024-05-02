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

app.get("/dreams", async (req, res) => {
  const result = await db.query(`SELECT
    dreams.name,
    dreams.date,
    dreams.content,
    ARRAY_AGG(element.element) AS element,
    theme.theme,
    type.type
    FROM dreams
    JOIN dreams_element ON dreams.id = dreams_element.dreams_id
    JOIN element ON element.id = dreams_element.element_id
    JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
    JOIN theme ON theme.id = dreams_theme.theme_id
    JOIN dreams_type ON dreams.id = dreams_type.dreams_id
    JOIN type ON type.id = dreams_type.type_id
    GROUP BY dreams.id, dreams.name, dreams.date, theme.theme, type.type`);
  res.json(result.rows);
  //   res.json("dreams"); //test endpoint
});

app.post("/dreams", async (req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const content = req.body.content;
  db.query(`INSERT INTO dreams (name, date, content) VALUES ($1, $2, $3)`, [
    name,
    date,
    content,
  ]);
  res.json({ success: true });
});

app.listen(8080, () => {
  console.log("You are listening at port 8080");
});
