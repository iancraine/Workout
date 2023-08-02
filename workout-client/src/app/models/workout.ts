export interface Workout{
    workoutId: number,
    workoutName: string,
    workoutNote: string,
    workoutDate: Date,
    exerciseId: number,
    setsCompleted: number,
    repsTime: string,
    favorite: boolean
}