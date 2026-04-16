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


const container1 = document.querySelector(".exercise-container-1");
const container2 = document.querySelector(".exercise-container-2");

if (container1 && container2) {
    for(let i=0; i<workouts.length; i++){
        container1.innerHTML += ` <div class="exercise-card">
                    <div class="img-container">
                        <img src="${workouts[i].muscleImg}" alt="${workouts[i].muscleName}" class="workout-img">
                    </div>
                    <div class="caption-container">
                        <p class="workout-caption">${workouts[i].muscleName}</p>
                    </div>
                </div>`
        container2.innerHTML += ` <div class="exercise-card">
                    <div class="img-container">
                        <img src="${workouts[i].muscleImg}" alt="${workouts[i].muscleName}" class="workout-img">
                    </div>
                    <div class="caption-container">
                        <p class="workout-caption">${workouts[i].muscleName}</p>
                    </div>
                </div>`
    }
}

function showNoEquipment(){
    const noEq = document.querySelector(".no-equipment-container");
    const withEq = document.querySelector(".with-equipment-container");
    if (noEq && withEq) {
        noEq.style.display = "block";
        withEq.style.display = "none";
    }
}

function showWithEquipment(){
    const noEq = document.querySelector(".no-equipment-container");
    const withEq = document.querySelector(".with-equipment-container");
    if (noEq && withEq) {
        noEq.style.display = "none";
        withEq.style.display = "block";
    }
}

function handleHashChange() {
    if (window.location.hash === "#with-equipment") {
        showWithEquipment();
    } else if (window.location.hash === "#no-equipment" || window.location.pathname.includes("workout.html")) {
        showNoEquipment();
    }
}

// Run on load to set initial state
window.addEventListener("DOMContentLoaded", handleHashChange);
// Run when hash changes (e.g. clicking the links in workout.html navbar)
window.addEventListener("hashchange", handleHashChange);