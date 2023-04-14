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

ALTER TABLE colleges ADD COLUMN IF NOT EXISTS description VARCHAR NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS description VARCHAR NULL;

ALTER TABLE colleges ADD COLUMN IF NOT EXISTS address VARCHAR NULL;

ALTER TABLE colleges ADD COLUMN IF NOT EXISTS longitude FLOAT NULL;

ALTER TABLE colleges ADD COLUMN IF NOT EXISTS latitude FLOAT NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS address VARCHAR NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS longitude FLOAT NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS latitude FLOAT NULL;

CREATE TABLE IF NOT EXISTS reviews (
    "id" VARCHAR PRIMARY KEY,
    "userId" VARCHAR NOT NULL,
    "locationId" VARCHAR NOT NULL,
    "rating" FLOAT NOT NULL,
    "comment" VARCHAR NULL
);

ALTER TABLE locations ADD COLUMN IF NOT EXISTS photo VARCHAR NULL;

ALTER TABLE reviews ADD COLUMN IF NOT EXISTS "createdAt" INTEGER NULL;

ALTER TABLE reviews ADD COLUMN IF NOT EXISTS "updatedAt" INTEGER NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS "createdAt" INTEGER NULL;

ALTER TABLE locations ADD COLUMN IF NOT EXISTS "updatedAt" INTEGER NULL;