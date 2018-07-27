insert into profiles (email, username, password) values ($1, $2, $3);
SELECT * FROM profiles where username = $2 limit 1;