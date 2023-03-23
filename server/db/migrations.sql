CREATE TABLE IF NOT EXISTS colleges (
    "id" VARCHAR PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "rating" FLOAT NOT NULL,
    "photo" VARCHAR NULL, 
);
