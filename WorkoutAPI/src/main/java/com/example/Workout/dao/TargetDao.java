package com.example.Workout.dao;

import com.example.Workout.model.Exercise;
import com.example.Workout.model.Target;

import java.util.List;

public interface TargetDao {
    List<Target> getAllTargets();

    Target getTargetById(int targetId);

    Target addNewTarget(Target newTarget);

    Target modifyTarget(Target modifiedTarget, int targetId);

    void deleteTarget(int targetId);

    void addExerciseToTarget(int targetId, int exerciseId);

    void removeExerciseFromTarget(int targetId, int exerciseId);




}
