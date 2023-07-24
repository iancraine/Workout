package com.example.Workout.model;

public class Target {
    private int targetId;
    private String targetName;

    public Target() {
    }

    public Target(int targetId, String targetName) {
        this.targetId = targetId;
        this.targetName = targetName;
    }

    public int getTargetId() {
        return targetId;
    }

    public void setTargetId(int targetId) {
        this.targetId = targetId;
    }

    public String getTargetName() {
        return targetName;
    }

    public void setTargetName(String targetName) {
        this.targetName = targetName;
    }
}
