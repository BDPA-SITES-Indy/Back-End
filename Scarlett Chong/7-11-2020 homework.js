// create actor table
CREATE TABLE actor (
  actor_id int,
  name varchar(255),
);

//create film table
CREATE TABLE film (
  film_id int,
  title varchar(255),
  genre varchar(255),
);

//actor_film_mapping
CREATE TABLE actor_film_mapping AS
  SELECT actor_id, film_id
  FROM actor, film;
