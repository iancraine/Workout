package com.example.Workout.dao;

import com.example.Workout.model.Exercise;

import java.util.List;

public interface ExerciseDao {
    List<Exercise> getAllExercises();
    Exercise getExerciseById(int exerciseId);

    String getExerciseNameById(int exerciseId);

    Exercise addNewExercise(Exercise newExercise);

    Exercise modifyExercise(Exercise modifiedExercise, int exerciseId);

    void deleteExercise(int exerciseId);

    List<Exercise> getExerciseByTarget(int targetId);

}
