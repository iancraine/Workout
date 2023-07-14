BEGIN TRANSACTION;

DROP TABLE IF EXISTS workout_exercise, target_exercise, target, workout, exercise CASCADE;

CREATE TABLE workout (
	workout_id SERIAL,
	workout_name varchar(50) NOT NULL,
	workout_note varchar(1000) NULL,
	workout_date date  NULL,
	favorite boolean NOT NULL,
	
	CONSTRAINT PK_workout PRIMARY KEY (workout_id)
);
CREATE TABLE exercise (
	exercise_id serial,
	exercise_name varchar(50) NOT NULL,
	exercise_desc varchar(1000) NULL,
	exercise_pic varchar(10000000) NULL,
	
	CONSTRAINT PK_exercise PRIMARY KEY (exercise_id)
);
CREATE TABLE target(
	target_id serial,
	target_name varchar(50) NOT NULL,
	
	CONSTRAINT PK_group PRIMARY KEY (target_id)
);
CREATE TABLE workout_exercise (
	workout_id int NOT NULL,
	exercise_id int NOT NULL,
	sets_completed int NOT NULL,
	reps_time varchar(20) NULL,
	
	CONSTRAINT PK_workout_exercise PRIMARY KEY (workout_id, exercise_id),
	CONSTRAINT FK_workout_exercise_workout_id FOREIGN KEY (workout_id) REFERENCES workout(workout_id),
	CONSTRAINT FK_workout_exercise_exercise_id FOREIGN KEY (exercise_id) REFERENCES exercise(exercise_id)
);

CREATE TABLE target_exercise(
	target_id int NOT NULL,
	exercise_id int NOT NULL,
	
	CONSTRAINT PK_group_exercise PRIMARY KEY (target_id, exercise_id),
	CONSTRAINT FK_group_exercise_target_id FOREIGN KEY (target_id) REFERENCES target(target_id),
	CONSTRAINT FK_group_exercise_exercise_id FOREIGN KEY (exercise_id) REFERENCES exercise(exercise_id)
);

COMMIT TRANSACTION;
