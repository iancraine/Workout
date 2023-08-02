package com.example.Workout.dao;

import com.example.Workout.model.Workout;

import java.util.List;

public interface WorkoutDao {
//    Displays on log
    List<List<Workout>> getAllWorkouts();
    List<List<Workout>> getStarredWorkouts();
//    Displays on favorites
    List<Workout> getWorkoutById(int workoutId);
//    Start new workout
    List<Workout> addNewWorkout(List<Workout> newWorkout);
//    To change name of workout
    List<Workout> modifyWorkout(List<Workout> modifiedWorkout);
    void deleteWorkout(int workoutId);
//    To add exercises to workout
    List<Workout> addExercisesToWorkout(List<Workout> newWorkout);
}
