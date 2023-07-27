package com.example.Workout.model;

import java.time.LocalDate;
import java.util.Date;

public class Workout {
    private int workoutId;
    private String workoutName;
    private String workoutNote;
    private LocalDate workoutDate;
    private boolean isFavorite;
    private int exerciseId;
    private int setsCompleted;
    private String repsTime;

    public Workout() {
    }

    public Workout(int workoutId, String workoutName, String workoutNote, LocalDate workoutDate, boolean isFavorite) {
        this.workoutId = workoutId;
        this.workoutName = workoutName;
        this.workoutNote = workoutNote;
        this.workoutDate = workoutDate;
        this.isFavorite = isFavorite;
    }

    public Workout(int workoutId, String workoutName, String workoutNote, LocalDate workoutDate, boolean isFavorite, int exerciseId, int setsCompleted, String repsTime) {
        this.workoutId = workoutId;
        this.workoutName = workoutName;
        this.workoutNote = workoutNote;
        this.workoutDate = workoutDate;
        this.isFavorite = isFavorite;
        this.exerciseId = exerciseId;
        this.setsCompleted = setsCompleted;
        this.repsTime = repsTime;
    }

    public int getWorkoutId() {
        return workoutId;
    }

    public void setWorkoutId(int workoutId) {
        this.workoutId = workoutId;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }

    public String getWorkoutNote() {
        return workoutNote;
    }

    public void setWorkoutNote(String workoutNote) {
        this.workoutNote = workoutNote;
    }

    public LocalDate getWorkoutDate() {
        return workoutDate;
    }

    public void setWorkoutDate(LocalDate workoutDate) {
        this.workoutDate = workoutDate;
    }

    public boolean isFavorite() {
        return isFavorite;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
    }

    public int getSetsCompleted() {
        return setsCompleted;
    }

    public void setSetsCompleted(int setsCompleted) {
        this.setsCompleted = setsCompleted;
    }

    public String getRepsTime() {
        return repsTime;
    }

    public void setRepsTime(String repsTime) {
        this.repsTime = repsTime;
    }
}
