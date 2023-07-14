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

    private Exercise mapRowToExercise(SqlRowSet rowSet) {
        Exercise result = new Exercise();

        result.setExerciseId(rowSet.getInt("exercise_id"));
        result.setExerciseName(rowSet.getString("exercise_name"));
        result.setExerciseDesc(rowSet.getString("exercise_desc"));
        result.setExercisePic(rowSet.getString("exercise_pic"));

        return result;
    }

    @Override
    public Exercise getExercise(int exerciseId) {
        return null;
    }
}
