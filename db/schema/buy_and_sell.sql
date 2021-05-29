CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TYPE sizeEnum AS ENUM ('S', 'M', 'L');

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  gender VARCHAR(255),
  photo_url VARCHAR(255) NOT NULL,
  description TEXT,
  size sizeEnum,
  category VARCHAR(255),
  price_of_product INTEGER NOT NULL DEFAULT 0
);

CREATE TYPE statusEnum AS ENUM ('reject', 'pending', 'complete');

CREATE TABLE offers (
  id SERIAL PRIMARY KEY NOT NULL,
  current_status statusEnum,
  offer_price INTEGER NOT NULL DEFAULT 0,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);
