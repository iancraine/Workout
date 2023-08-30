package com.example.Workout.controllers;

import com.example.Workout.dao.TargetDao;
import com.example.Workout.model.Exercise;
import com.example.Workout.model.Target;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TargetController {
    private TargetDao targetDao;

    public TargetController(TargetDao targetDao) {
        this.targetDao = targetDao;
    }

    @RequestMapping(path = "/groups", method = RequestMethod.GET)
    public List<Target> getAllTargets(){
        return this.targetDao.getAllTargets();
    }

    @RequestMapping(path = "/group/{targetId}", method = RequestMethod.GET)
    public Target getTargetById(@PathVariable int targetId){
        return this.targetDao.getTargetById(targetId);
    }

    @RequestMapping(path = "/addgroup", method = RequestMethod.POST)
    public Target addTarget(@RequestBody Target target){
        return this.targetDao.addNewTarget(target);
    }

    @RequestMapping(path = "modify/{targetId}", method = RequestMethod.PUT)
    public Target modifyTarget(@PathVariable int targetId, @RequestBody Target target){
        return this.targetDao.modifyTarget(target, targetId);
    }

    @RequestMapping(path = "/remove/{targetId}", method = RequestMethod.DELETE)
    public void deleteTarget(@PathVariable int targetId){
        targetDao.deleteTarget(targetId);
    }

    @RequestMapping(path = "/{targetId}/addexercise", method = RequestMethod.POST)
    public void addExerciseToTarget(@PathVariable int targetId, @RequestBody Exercise exercise){
        targetDao.addExerciseToTarget(targetId,(exercise.getExerciseId()));
    }
}
