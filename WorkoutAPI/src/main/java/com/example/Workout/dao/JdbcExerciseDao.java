package com.example.Workout.dao;

import com.example.Workout.model.Exercise;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcExerciseDao implements ExerciseDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcExerciseDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Exercise> getAllExercises() {
        List<Exercise> results = new ArrayList<>();

        String sql = "SELECT exercise_id, exercise_name, exercise_desc, exercise_pic\n" +
                "FROM exercise";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next()){
            Exercise exercise = mapRowToExercise(rowSet);
            results.add(exercise);
        }
        return results;
    }

    @Override
    public Exercise getExerciseById(int exerciseId) {
        Exercise exercise = null;
        String sql = "SELECT exercise_id, exercise_name, exercise_desc, exercise_pic\n" +
                "FROM exercise "+
                "WHERE exercise_id = ?;";


        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, exerciseId);
        while (row.next()){
            exercise = mapRowToExercise(row);
        }
        return exercise;
    }

    @Override
    public Exercise addNewExercise(Exercise newExercise) {
        Exercise addedExercise;
        String sql = "INSERT INTO exercise(exercise_name, exercise_desc, exercise_pic) " +
                "VALUES (?,?,?) RETURNING exercise_id;\n";
        int newExerciseId = jdbcTemplate.queryForObject(sql, Integer.class, newExercise.getExerciseName(),
                newExercise.getExerciseDesc(), newExercise.getExercisePic());

        addedExercise = getExerciseById(newExerciseId);

        return addedExercise;
    }

    @Override
    public Exercise modifyExercise(Exercise modifiedExercise, int exerciseId) {
        Exercise changedExercise;
        String sql = "UPDATE exercise SET exercise_name = ?, " +
                "exercise_desc = ?, exercise_pic = ? WHERE exercise_id = ?;";
        jdbcTemplate.update(sql, modifiedExercise.getExerciseName(), modifiedExercise.getExerciseDesc(),
                modifiedExercise.getExercisePic(), exerciseId);

        changedExercise = getExerciseById(exerciseId);
        return changedExercise;
    }

    @Override
    public void deleteExercise(int exerciseId) {
        String sql = "DELETE FROM workout_exercise WHERE exercise_id = ?;";
        jdbcTemplate.update(sql, exerciseId);
        sql = "DELETE FROM target_exercise WHERE exercise_id = ?;";
        jdbcTemplate.update(sql, exerciseId);
        sql = "DELETE FROM exercise WHERE exercise_id = ?;";
        jdbcTemplate.update(sql, exerciseId);
    }

    @Override
    public List<Exercise> getExerciseByTarget(int targetId) {
        List<Exercise> results = new ArrayList<>();
        String sql = "SELECT exercise.exercise_id, exercise.exercise_name, \n" +
                "exercise.exercise_desc, exercise.exercise_pic, target_exercise.target_id FROM exercise\n" +
                "JOIN target_exercise ON target_exercise.exercise_id = exercise.exercise_id\n" +
                "WHERE target_id = 1;";

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, targetId);

        while (rowSet.next()){
            Exercise exercise = mapRowToExercise(rowSet);
            results.add(exercise);
        }
        return results;
    }

    private Exercise mapRowToExercise(SqlRowSet rowSet) {
        Exercise result = new Exercise();

        result.setExerciseId(rowSet.getInt("exercise_id"));
        result.setExerciseName(rowSet.getString("exercise_name"));
        result.setExerciseDesc(rowSet.getString("exercise_desc"));
        result.setExercisePic(rowSet.getString("exercise_pic"));

        return result;
    }
}
