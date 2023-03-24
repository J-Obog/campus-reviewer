CREATE TABLE IF NOT EXISTS colleges (
    "id" VARCHAR PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "rating" FLOAT NOT NULL,
    "photo" VARCHAR NULL
);

CREATE TABLE IF NOT EXISTS locations (
    "id" VARCHAR PRIMARY KEY,
    "collegeId" VARCHAR NOT NULL,
    "locationType" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rating" FLOAT NOT NULL
);
