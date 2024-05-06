// CREATE DREAMS TABLE

db.prepare(`CREATE TABLE IF NOT EXISTS dreams (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  content TEXT NOT NULL
);`);

// CREATE ELEMENT TABLE

db.prepare(`CREATE TABLE IF NOT EXISTS element (
  id SERIAL PRIMARY KEY,
  element TEXT
);`);

// CREATE THEME TABLE

db.prepare(`CREATE TABLE IF NOT EXISTS theme (
  id SERIAL PRIMARY KEY,
  theme TEXT
);`);

// CREATE TYPE TABLE

db.prepare(`CREATE TABLE IF NOT EXISTS type (
  id SERIAL PRIMARY KEY,
  type TEXT
);`);

// CREATE JUNCTION TABLES

// ELEMENT

db.prepare(`CREATE TABLE IF NOT EXISTS dreams_element (
  dreams_id INTEGER REFERENCES dreams(id),
  element_id INTEGER REFERENCES element(id),
  PRIMARY KEY (dreams_id, element_id)
);`);

// THEME

db.prepare(`CREATE TABLE IF NOT EXISTS dreams_theme (
  dreams_id INTEGER REFERENCES dreams(id),
  theme_id INTEGER REFERENCES theme(id),
  PRIMARY KEY (dreams_id, theme_id)
);`);

// TYPE

db.prepare(`CREATE TABLE IF NOT EXISTS dreams_type (
  dreams_id INTEGER REFERENCES dreams(id),
  type_id INTEGER REFERENCES type(id),
  PRIMARY KEY (dreams_id, type_id)
);`);

//POPULATE DREAMS TABLE

db.prepare(`INSERT INTO dreams (name, date, content) VALUES
  (
    'Emily', 
    '2024-05-01', 
    'Last night, I found myself in a sprawling maze made of mirrors. Every direction I turned, I saw reflections of myself, each one slightly different, like alternate versions of me. I felt a sense of unease as I wandered through the maze, trying to find my way out. Suddenly, I came face to face with a version of myself that looked distorted and sinister. I woke up in a cold sweat, feeling shaken by the experience.'
  ),
  (
    'Michael',
    '2024-04-28',
    'In my dream, I was floating in outer space, surrounded by stars and galaxies. It was both exhilarating and terrifying at the same time. I felt weightless and free, but also incredibly small and insignificant compared to the vastness of the universe. Suddenly, I saw a bright light ahead of me, and I felt myself being pulled towards it. Before I could reach it, I woke up, feeling a strange mix of awe and confusion.'
  ),
  (
    'Sarah',
    '2024-05-02',
    'I dreamt that I was back in high school, sitting in my old classroom surrounded by my classmates. Everything seemed normal at first, but then I realized that I had forgotten to study for an important test. Panic set in as I frantically tried to remember the material, but no matter how hard I tried, I couldnt recall anything. Just as the teacher was about to hand out the test papers, I woke up, relieved to find myself safe in my own bed.'
  ),
  (
    'Alex',
    '2024-04-30',
    'My dream took place in a post-apocalyptic world where society had collapsed, and I was one of the few survivors roaming the barren landscape. I spent my days scavenging for food and supplies, constantly on the lookout for danger. But no matter how hard I tried to find safety, I always felt like something was lurking just out of sight, waiting to pounce. It was a terrifying glimpse into a possible future that left me feeling unsettled long after I woke up.'
  ),
  (
    'Jasmine',
    '2024-04-29',
    'Last night, I dreamt that I was flying over a lush forest, the wind rushing through my hair as I soared through the sky. It was the most exhilarating feeling Ive ever experienced, like I was completely free from the constraints of gravity. I flew higher and higher, feeling a sense of joy and liberation wash over me. But just as I reached the peak of my flight, I suddenly started to fall. The ground rushed up to meet me, and I woke up with a start, my heart pounding in my chest.'
  );`);

//POPULATE ELEMENT TABLE

db.prepare(`INSERT INTO element (element) VALUES
('spider'),
('snake'),
('falling'),
('flying'),
('running away'),
('teeth');
('mirror'),
('high school'),
('paranoia'),
('none');`);

//POPULATE THEME TABLE

db.prepare(`INSERT INTO theme (theme) VALUES
('lucid'),
('recurring'),
('false awakening'),
('normal');`);

//POPULATE TYPE TABLE

db.prepare(`INSERT INTO type (type) VALUES
('dream'),
('nightmare');`);

//POPULATE ELEMENT JUNCTION TABLE

db.prepare(`INSERT INTO dreams_element (dreams_id, element_id) VALUES
(2, 4),
(5, 3);
(5, 4)
(1, 7),
(3, 8),
(4, 9);`);

//POPULATE THEME JUNCTION TABLE

db.prepare(`INSERT INTO dreams_theme (dreams_id, theme_id) VALUES
(1, 4),
(2, 4),
(3, 4),
(4, 4),
(5, 4);`);

//POPULATE TYPE JUNCTION TABLE

db.prepare(`INSERT INTO dreams_type (dreams_id, type_id) VALUES
(1, 2),
(2, 1),
(3, 2),
(4, 2),
(5, 1);`);

//SELECT ALL DATA

db.prepare(`SELECT 
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

//SELECT BY TYPE DREAM

db.prepare(`SELECT 
dreams.name, 
dreams.date,
dreams.content,
theme.theme,
type.type
ARRAY_AGG(element.element) AS element
FROM dreams
JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
JOIN theme ON theme.id = dreams_theme.theme_id
JOIN dreams_element ON dreams.id = dreams_element.dreams_id
JOIN element ON element.id = dreams_element.element_id
JOIN dreams_type ON dreams.id = dreams_type.dreams_id
JOIN type ON type.id = dreams_type.type_id
WHERE type.id = 1;`);

//SELECT BY TYPE NIGHTMARE

db.prepare(`SELECT 
dreams.name, 
dreams.date,
dreams.content,
theme.theme,
type.type
ARRAY_AGG(element.element) AS element
FROM dreams
JOIN dreams_theme ON dreams.id = dreams_theme.dreams_id
JOIN theme ON theme.id = dreams_theme.theme_id
JOIN dreams_element ON dreams.id = dreams_element.dreams_id
JOIN element ON element.id = dreams_element.element_id
JOIN dreams_type ON dreams.id = dreams_type.dreams_id
JOIN type ON type.id = dreams_type.type_id
WHERE type.id = 2;`);
