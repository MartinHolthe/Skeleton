CREATE TABLE IF NOT EXISTS accounts (
    id serial PRIMARY KEY,
    username VARCHAR (255) UNIQUE NOT NULL
);

INSERT INTO accounts(username) VALUES 
('rick'), ('morty') RETURNING *;
