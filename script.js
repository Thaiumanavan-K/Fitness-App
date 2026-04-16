const workouts = [
    {
        muscleImg: "WorkoutImages/neck.webp",
        muscleName: "Neck"
    },
    {
        muscleImg: "WorkoutImages/traps_0.webp",
        muscleName: "Traps"
    },{
        muscleImg: "WorkoutImages/shoulders_0.webp",
        muscleName: "Shoulders"
    },
    {
        muscleImg: "WorkoutImages/chest_0.webp",
        muscleName: "Chest"
    },
    {
        muscleImg: "WorkoutImages/upperback.webp",
        muscleName: "Upper Back"
    },
    {
        muscleImg: "WorkoutImages/lats_0.webp",
        muscleName: "Lats"
    },
    {
        muscleImg: "WorkoutImages/lowerback.webp",
        muscleName: "Lower Back"
    },
    {
        muscleImg: "WorkoutImages/biceps_0.webp",
        muscleName: "Biceps"
    },
    {
        muscleImg: "WorkoutImages/triceps_0.webp",
        muscleName: "Triceps"
    },
    {
        muscleImg: "WorkoutImages/forearms_0.webp",
        muscleName: "Forearms"
    },
    {
        muscleImg: "WorkoutImages/obliques.webp",
        muscleName: "Obliques"
    },
    {
        muscleImg: "WorkoutImages/hipflexors.webp",
        muscleName: "Hip Flexors"
    },
    {
        muscleImg: "WorkoutImages/glutes_0.webp",
        muscleName: "Glutes"
    },
    {
        muscleImg: "WorkoutImages/itband.webp",
        muscleName: "IT Band"
    },
    {
        muscleImg: "WorkoutImages/quads_1.webp",
        muscleName: "Quads"
    },
    {
        muscleImg: "WorkoutImages/adductors.webp",
        muscleName: "Adductors"
    },
    {
        muscleImg: "WorkoutImages/hamstrings_0.webp",
        muscleName: "Hamstrings"
    },
    {
        muscleImg: "WorkoutImages/calves_0.webp",
        muscleName: "Calves"
    },
    {
        muscleImg: "WorkoutImages/plantarfascia.webp",
        muscleName: "Plantar Fascia"
    },
    {
        muscleImg: "WorkoutImages/palmarfacsia.webp",
        muscleName: "Palmar Fascia"
    },
];


for(let i=0; i<workouts.length; i++){
    document.querySelector(".exercise-container-1").innerHTML += ` <div class="exercise-card">
                <div class="img-container">
                    <img src="${workouts[i].muscleImg}" alt="${workouts[i].muscleName}" class="workout-img">
                </div>
                <div class="caption-container">
                    <p class="workout-caption">${workouts[i].muscleName}</p>
                </div>
            </div>`
    document.querySelector(".exercise-container-2").innerHTML += ` <div class="exercise-card">
                <div class="img-container">
                    <img src="${workouts[i].muscleImg}" alt="${workouts[i].muscleName}" class="workout-img">
                </div>
                <div class="caption-container">
                    <p class="workout-caption">${workouts[i].muscleName}</p>
                </div>
            </div>`
}