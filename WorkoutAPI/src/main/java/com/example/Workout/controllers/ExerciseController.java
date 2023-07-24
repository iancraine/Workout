package com.example.Workout.controllers;

import com.example.Workout.dao.ExerciseDao;
import com.example.Workout.model.Exercise;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ExerciseController {
    private ExerciseDao exerciseDao;

    public ExerciseController(ExerciseDao exerciseDao) {
        this.exerciseDao = exerciseDao;
    }
    @RequestMapping(path = "/exercises", method = RequestMethod.GET)
    public List<Exercise> getAllExercises(){
        return this.exerciseDao.getAllExercises();
    }

    @RequestMapping(path = "/exercise/{exerciseId}", method = RequestMethod.GET)
    public Exercise getExerciseById(@PathVariable int exerciseId){
        return exerciseDao.getExerciseById(exerciseId);
    }

    @RequestMapping(path = "/addexercise", method = RequestMethod.POST)
    public Exercise addExercise(@RequestBody Exercise exercise){
        return exerciseDao.addNewExercise(exercise);
    }

    @RequestMapping(path = "/{exerciseId}", method = RequestMethod.PUT)
    public Exercise modifyExercise(@PathVariable int exerciseId, @RequestBody Exercise exercise){
        return exerciseDao.modifyExercise(exercise, exerciseId);
    }

    @RequestMapping(path = "/{exerciseId}", method = RequestMethod.DELETE)
    public void deleteExercise(@PathVariable int exerciseId){
        exerciseDao.deleteExercise(exerciseId);
    }

    @RequestMapping(path = "/exercises/{targetId}", method = RequestMethod.GET)
    public List<Exercise> getExercisesByTarget(@PathVariable int targetId){
        return this.exerciseDao.getExerciseByTarget(targetId);
    }
}
