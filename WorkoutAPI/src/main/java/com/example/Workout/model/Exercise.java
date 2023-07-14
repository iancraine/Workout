package com.example.Workout.model;

public class Exercise {
    private int exerciseId;
    private String exerciseName;
    private String exerciseDesc;
    private String exercisePic;


    public Exercise() {
    }

    public Exercise(int exerciseId, String exerciseName, String exerciseDesc, String exercisePic) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.exerciseDesc = exerciseDesc;
        this.exercisePic = exercisePic;
    }

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public String getExerciseDesc() {
        return exerciseDesc;
    }

    public void setExerciseDesc(String exerciseDesc) {
        this.exerciseDesc = exerciseDesc;
    }

    public String getExercisePic() {
        return exercisePic;
    }

    public void setExercisePic(String exercisePic) {
        this.exercisePic = exercisePic;
    }
}
