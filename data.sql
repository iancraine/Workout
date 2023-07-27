BEGIN TRANSACTION;

INSERT INTO target(target_name) VALUES ('Back');
INSERT INTO target(target_name) VALUES ('Hamstring');
INSERT INTO target(target_name) VALUES ('Chest');
INSERT INTO target(target_name) VALUES ('Arms');
INSERT INTO target(target_name) VALUES ('Push');
INSERT INTO target(target_name) VALUES ('Pull');
INSERT INTO target(target_name) VALUES ('Leg');
INSERT INTO target(target_name) VALUES ('Biceps');
INSERT INTO target(target_name) VALUES ('Triceps');
INSERT INTO target(target_name) VALUES ('Glutes');
INSERT INTO target(target_name) VALUES ('Calf');



INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Lat Pulldown','Close Grip Handle');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Cable Rows','Focus on lower back');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('T-Bar Row','Pause Sets');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Preacher Curls','Aim for more reps');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('21s','7 low 7 high 7 full');

INSERT INTO exercise(exercise_name) VALUES ('Dumbell Incline');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Shoulder Press','Dumbell');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Chest Press','Machine');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Cable Lat Raises','Single Arm');
INSERT INTO exercise(exercise_name) VALUES ('Incline Dumbell Flys');
INSERT INTO exercise(exercise_name, exercise_desc) VALUES ('Skull Crushers','Curl Bar');
INSERT INTO exercise(exercise_name) VALUES ('Rope Pulldowns');





INSERT INTO workout(workout_name, workout_note, workout_date, favorite) VALUES ('Pull Day', 'Heavy Day', '7/13/2023', true);
INSERT INTO workout(workout_name, workout_note, workout_date, favorite) VALUES ('Push Day', 'Heavy Day', '7/14/2023', true);


INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (1, 1, 4, '9 RPE');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (1, 2, 4, '9 RPE');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (1, 3, 4, '9 RPE');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (1, 4, 3, '15-8 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (1, 5, 3, '21 Reps');

INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 6, 4, '12-4 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 7, 4, '15-8 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 8, 4, '12-4 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 9, 3, '15-8 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 10, 4, '12-8 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 11, 3, '15-8 Reps');
INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) VALUES (2, 12, 3, '15-6 Reps');


INSERT INTO target_exercise(target_id, exercise_id) VALUES (1, 1);
INSERT INTO target_exercise(target_id, exercise_id) VALUES (1, 2);
INSERT INTO target_exercise(target_id, exercise_id) VALUES (1, 3);
INSERT INTO target_exercise(target_id, exercise_id) VALUES (8, 4);
INSERT INTO target_exercise(target_id, exercise_id) VALUES (8, 5);



COMMIT TRANSACTION;
