drop table if exists profiles cascade;
drop table if exists posts cascade;

create table profiles(
    id serial primary key
    ,email text unique not null
    ,username varchar(32) not null unique
    ,password text not null
    ,admin boolean
);

create table posts(
    id serial primary key
    ,title varchar(45)
    ,img text not null
    ,content text not null
    ,user_id integer references profiles(id)
);

UPDATE profiles
set admin = true
Where email = 'test2';