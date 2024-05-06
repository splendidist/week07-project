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

//ROOT ROUTE

app.get("/", (req, res) => {
  res.json("this is my root route");
});

//GET ALL INPUTS FROM DATABASE

app.get("/dreams", async (req, res) => {
  const result = await db.query(`SELECT 
  dreams.name, 
  dreams.date,
  dreams.content,
  theme.theme,
  type.type,
  ARRAY_AGG(element.element) AS element
FROM dreams
JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
JOIN theme ON theme.id = dreams_theme.theme_id
JOIN dreams_element ON dreams.id = dreams_element.dreams_id
JOIN element ON element.id = dreams_element.element_id
JOIN dreams_type ON dreams.id = dreams_type.dreams_id
JOIN type ON type.id = dreams_type.type_id
GROUP BY dreams.id, dreams.name, dreams.date, theme.theme, type.type;`);
  res.json(result.rows);
});

//INSERT INTO DREAMS TABLE

app.post("/dreams", async (req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const content = req.body.content;
  const type = req.body.type;
  const theme = req.body.theme;
  const selectedElements = req.body.element;

  const dreamInsertResult = await db.query(
    `INSERT INTO dreams (name, date, content) VALUES ($1, $2, $3) RETURNING id`,
    [name, date, content]
  );
  const dreams_id = dreamInsertResult.rows[0].id;

  //INSERT INTO TYPE JUNCTION TABLE

  let type_id;
  if (type == "dream") {
    type_id = 1;
  } else if (type == "nightmare") {
    type_id = 2;
  }

  await db.query(
    `INSERT INTO dreams_type (dreams_id, type_id) VALUES ($1, $2)`,
    [dreams_id, type_id]
  );

  //INSERT INTO THEME JUNCTION TABLE

  let theme_id;
  if (theme == "lucid") {
    theme_id = 1;
  } else if (theme == "recurring") {
    theme_id = 2;
  } else if (theme == "false-awakening") {
    theme_id = 3;
  } else if (theme == "normal") {
    theme_id = 4;
  }

  await db.query(
    `INSERT INTO dreams_theme (dreams_id, theme_id) VALUES ($1, $2)`,
    [dreams_id, theme_id]
  );

  //INSERT INTO ELEMENT JUNCTION TABLE

  const elementMap = {
    spider: 1,
    snake: 2,
    falling: 3,
    flying: 4,
    "running away": 5,
    teeth: 6,
    mirror: 7,
    "high school": 8,
    paranoia: 9,
    none: 10,
  };

  for (const element of selectedElements) {
    const element_id = elementMap[element];
    await db.query(
      `INSERT INTO dreams_element (dreams_id, element_id) VALUES ($1, $2)`,
      [dreams_id, element_id]
    );
  }
  res.json({ success: true });
});

//VIEW POSTS BY CATEGORY (NIGHTMARE)

app.get("/nightmares", async (req, res) => {
  const nightmareResult = await db.query(`SELECT 
  dreams.name, 
  dreams.date,
  dreams.content,
  theme.theme,
  type.type,
  ARRAY_AGG(element.element) AS element
FROM dreams
JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
JOIN theme ON theme.id = dreams_theme.theme_id
JOIN dreams_element ON dreams.id = dreams_element.dreams_id
JOIN element ON element.id = dreams_element.element_id
JOIN dreams_type ON dreams.id = dreams_type.dreams_id
JOIN type ON type.id = dreams_type.type_id
WHERE type.id = 2
GROUP BY dreams.id, dreams.name, dreams.date, theme.theme, type.type;`);
  res.json(nightmareResult.rows);
});

//VIEW POSTS BY CATEGORY (DREAM)

app.get("/posts", async (req, res) => {
  const nightmareResult = await db.query(`SELECT 
  dreams.name, 
  dreams.date,
  dreams.content,
  theme.theme,
  type.type,
  ARRAY_AGG(element.element) AS element
FROM dreams
JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
JOIN theme ON theme.id = dreams_theme.theme_id
JOIN dreams_element ON dreams.id = dreams_element.dreams_id
JOIN element ON element.id = dreams_element.element_id
JOIN dreams_type ON dreams.id = dreams_type.dreams_id
JOIN type ON type.id = dreams_type.type_id
WHERE type.id = 1
GROUP BY dreams.id, dreams.name, dreams.date, theme.theme, type.type;`);
  res.json(nightmareResult.rows);
});

//LISTEN PORT 8080

app.listen(8080, () => {
  console.log("You are listening at port 8080");
});
