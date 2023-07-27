package com.example.Workout.controllers;

import com.example.Workout.dao.WorkoutDao;
import com.example.Workout.model.Workout;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class WorkoutController {
    private WorkoutDao workoutDao;

    public WorkoutController(WorkoutDao workoutDao) {
        this.workoutDao = workoutDao;
    }

    @RequestMapping(path = "/workouts", method = RequestMethod.GET)
    public List<List<Workout>> getAllWorkouts(){
        return this.workoutDao.getAllWorkouts();
    }

    @RequestMapping(path = "/workout/{workoutId}", method = RequestMethod.GET)
    public List<Workout> getWorkoutById(@PathVariable int workoutId){
        return this.workoutDao.getWorkoutById(workoutId);
    }

    @RequestMapping(path = "/addworkout", method = RequestMethod.POST)
    public List<Workout> addWorkout(@RequestBody List<Workout> newWorkout){
        return this.workoutDao.addNewWorkout(newWorkout);
    }
//TODO not working
    @RequestMapping(path = "/modify/{workoutId}", method = RequestMethod.PUT)
    public List<Workout> modifyWorkout(@PathVariable int workoutId, @RequestBody List<Workout> workouts){
        return this.workoutDao.modifyWorkout(workouts);
    }
}
