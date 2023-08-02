package com.example.Workout.dao;

import com.example.Workout.model.Workout;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcWorkoutDao implements WorkoutDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcWorkoutDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<List<Workout>> getAllWorkouts() {
        List<Workout> workouts = new ArrayList<>();

//        String sql = "SELECT w.workout_id, w.workout_name, w.workout_note, \n" +
//                "w.workout_date, w.favorite, \n" +
//                "we.exercise_id, we.sets_completed, we.reps_time \n" +
//                "FROM workout w \n" +
//                "JOIN workout_exercise we ON we.workout_id = w.workout_id\n" +
//                "ORDER BY w.workout_id;";

        String sql ="SELECT w.workout_id, w.workout_name, w.workout_note, w.workout_date, w.favorite, \n" +
                "we.exercise_id, we.sets_completed, we.reps_time \n" +
                "FROM workout w \n" +
                "JOIN workout_exercise we ON we.workout_id = w.workout_id\n" +
                "ORDER BY w.workout_date DESC,  w.workout_id;";

        SqlRowSet row =jdbcTemplate.queryForRowSet(sql);

        while (row.next()){
            workouts.add(mapRowToWorkout(row));
        }

        List<List<Workout>> nestedWorkouts = new ArrayList<>();
        int currentWorkoutId = 0;
        int newListIndex = -1;

        for (int i=0; i<workouts.size();i++){
            if (workouts.get(i).getWorkoutId() != currentWorkoutId){
                List<Workout> currentWorkout = new ArrayList<>();
                currentWorkout.add(workouts.get(i));
                nestedWorkouts.add(currentWorkout);
                currentWorkoutId = workouts.get(i).getWorkoutId();
                newListIndex++;
            }else {
                nestedWorkouts.get(newListIndex).add(workouts.get(i));
            }
        }

        return nestedWorkouts;
    }

    @Override
    public List<List<Workout>> getStarredWorkouts() {
        List<Workout> workouts = new ArrayList<>();

        String sql ="SELECT w.workout_id, w.workout_name, w.workout_note, w.workout_date, w.favorite, \n" +
                "we.exercise_id, we.sets_completed, we.reps_time \n" +
                "FROM workout w \n" +
                "JOIN workout_exercise we ON we.workout_id = w.workout_id\n" +
                "WHERE w.favorite = true\n" +
                "ORDER BY w.workout_date DESC;";

        SqlRowSet row =jdbcTemplate.queryForRowSet(sql);

        while (row.next()){
            workouts.add(mapRowToWorkout(row));
        }

        List<List<Workout>> nestedWorkouts = new ArrayList<>();
        int currentWorkoutId = 0;
        int newListIndex = -1;

        for (int i=0; i<workouts.size();i++){
            if (workouts.get(i).getWorkoutId() != currentWorkoutId){
                List<Workout> currentWorkout = new ArrayList<>();
                currentWorkout.add(workouts.get(i));
                nestedWorkouts.add(currentWorkout);
                currentWorkoutId = workouts.get(i).getWorkoutId();
                newListIndex++;
            }else {
                nestedWorkouts.get(newListIndex).add(workouts.get(i));
            }
        }

        return nestedWorkouts;
    }

    @Override
    public List<Workout> getWorkoutById(int workoutId) {
        List<Workout> workouts = new ArrayList<>();
        String sql = "SELECT w.workout_id, w.workout_name, w.workout_note, \n" +
                "w.workout_date, w.favorite, \n" +
                "we.exercise_id, we.sets_completed, we.reps_time \n" +
                "FROM workout w \n" +
                "JOIN workout_exercise we ON we.workout_id = w.workout_id \n" +
                "WHERE w.workout_id = ?;";
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, workoutId);
        while (row.next()){
            workouts.add(mapRowToWorkout(row));
        }
        return workouts;
    }

    @Override
    public List<Workout> addNewWorkout(List<Workout> newWorkout) {
        String sql = "INSERT INTO workout(workout_name, workout_note, workout_date, favorite) " +
                "VALUES (?, ?, ?, ?) RETURNING workout_id;";
        int workoutId =jdbcTemplate.queryForObject(sql, Integer.class,
                newWorkout.get(0).getWorkoutName(), newWorkout.get(0).getWorkoutNote(),
                newWorkout.get(0).getWorkoutDate(), newWorkout.get(0).isFavorite());

        sql = "INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) " +
                "VALUES (?, ?, ?, ?);";
        for (Workout exercise: newWorkout){
            jdbcTemplate.update(sql, workoutId, exercise.getExerciseId(), exercise.getSetsCompleted(),
                    exercise.getRepsTime());
        }

        return getWorkoutById(workoutId);
    }

    @Override
    public List<Workout> modifyWorkout(List<Workout> modifiedWorkout) {
        String sql = "UPDATE workout SET workout_name = ?, workout_note = ?, workout_date = ?, favorite = ? " +
                "WHERE workout_id = ?;";
        jdbcTemplate.update(sql, modifiedWorkout.get(0).getWorkoutName(), modifiedWorkout.get(0).getWorkoutNote(),
                modifiedWorkout.get(0).getWorkoutDate(), modifiedWorkout.get(0).isFavorite(), modifiedWorkout.get(0).getWorkoutId());


        //Probably dont need to this functionality but if needed will need a new PK on workout_exercise

//        sql = "UPDATE workout_exercise SET exercise_id = ?, sets_completed = ?, reps_time = ? " +
//                "WHERE workout_id = ?;";
//        for (Workout exercise: modifiedWorkout){
//            jdbcTemplate.update(sql, exercise.getExerciseId(), exercise.getSetsCompleted(), exercise.getRepsTime(),
//                    exercise.getWorkoutId());
//        }
        return getWorkoutById(modifiedWorkout.get(0).getWorkoutId());
    }

    @Override
    public void deleteWorkout(int workoutId) {
        String sql = "DELETE FROM workout_exercise WHERE workout_id = ?;";
        jdbcTemplate.update(sql, workoutId);

        sql = "DELETE FROM workout WHERE workout_id = ?;";
        jdbcTemplate.update(sql, workoutId);
    }

    @Override
    public List<Workout> addExercisesToWorkout(List<Workout> newWorkout) {
        String sql = "INSERT INTO workout_exercise(workout_id, exercise_id, sets_completed, reps_time) " +
                "VALUES (?, ?, ?, ?);";
        for (Workout exercise: newWorkout){
            jdbcTemplate.update(sql, exercise.getWorkoutId(), exercise.getExerciseId(), exercise.getSetsCompleted(),
                    exercise.getRepsTime());
        }
        return getWorkoutById(newWorkout.get(0).getWorkoutId());
    }

    private Workout mapRowToWorkout(SqlRowSet rowSet) {
        Workout result = new Workout();

        result.setWorkoutId(rowSet.getInt("workout_id"));
        result.setWorkoutName(rowSet.getString("workout_name"));
        result.setWorkoutNote(rowSet.getString("workout_note"));
        result.setWorkoutDate(rowSet.getDate("workout_date").toLocalDate());
        result.setFavorite(rowSet.getBoolean("favorite"));
        result.setExerciseId(rowSet.getInt("exercise_id"));
        result.setSetsCompleted(rowSet.getInt("sets_completed"));
        result.setRepsTime(rowSet.getString("reps_time"));

        return result;
    }
}
