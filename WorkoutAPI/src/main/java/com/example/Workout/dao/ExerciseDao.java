package com.example.Workout.dao;

import com.example.Workout.model.Exercise;

import java.util.List;

public interface ExerciseDao {
    List<Exercise> getAllExercises();
    Exercise getExercise(int exerciseId);

}
