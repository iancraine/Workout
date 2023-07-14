package com.example.Workout.controllers;

import com.example.Workout.dao.ExerciseDao;
import com.example.Workout.model.Exercise;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
