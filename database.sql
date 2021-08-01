create table user(
		id integer NOT NULL DEFAULT nextval('user_seq'),
		name varchar(50) NOT NULL,
		email varchar(50),
		constraint user_cons PRIMARY KEY(id)
);

create table post(
		id integer NOT NULL DEFAULT nextval('post_seq'),
		title varchar(50) NOT NULL,
		description varchar(500),
    create_date timestamp NOT NULL,
		constraint post_cons PRIMARY KEY(id),
	  constraint fk_user FOREIGN KEY(user_id) REFERENCES user(id),
);
