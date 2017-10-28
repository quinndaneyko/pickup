CREATE TABLE IF NOT EXISTS Extended_profile (
	user_id int REFERENCES Users(user_id),
	skilllevel int default 0,
	age int, 
	gender varchar(255),
	location varchar(255),
	average_review real default 0,
	PRIMARY KEY(user_id)
);