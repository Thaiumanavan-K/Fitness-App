const workouts = [
    {
        muscleImg: "../Images/WorkoutImages/neck.webp",
        muscleName: "Neck"
    },
    {
        muscleImg: "../Images/WorkoutImages/traps_0.webp",
        muscleName: "Traps"
    },{
        muscleImg: "../Images/WorkoutImages/shoulders_0.webp",
        muscleName: "Shoulders"
    },
    {
        muscleImg: "../Images/WorkoutImages/chest_0.webp",
        muscleName: "Chest"
    },
    {
        muscleImg: "../Images/WorkoutImages/upperback.webp",
        muscleName: "Upper Back"
    },
    {
        muscleImg: "../Images/WorkoutImages/lats_0.webp",
        muscleName: "Lats"
    },
    {
        muscleImg: "../Images/WorkoutImages/lowerback.webp",
        muscleName: "Lower Back"
    },
    {
        muscleImg: "../Images/WorkoutImages/biceps_0.webp",
        muscleName: "Biceps"
    },
    {
        muscleImg: "../Images/WorkoutImages/triceps_0.webp",
        muscleName: "Triceps"
    },
    {
        muscleImg: "../Images/WorkoutImages/forearms_0.webp",
        muscleName: "Forearms"
    },
    {
        muscleImg: "../Images/WorkoutImages/obliques.webp",
        muscleName: "Obliques"
    },
    {
        muscleImg: "../Images/WorkoutImages/hipflexors.webp",
        muscleName: "Hip Flexors"
    },
    {
        muscleImg: "../Images/WorkoutImages/glutes_0.webp",
        muscleName: "Glutes"
    },
    {
        muscleImg: "../Images/WorkoutImages/itband.webp",
        muscleName: "IT Band"
    },
    {
        muscleImg: "../Images/WorkoutImages/quads_1.webp",
        muscleName: "Quads"
    },
    {
        muscleImg: "../Images/WorkoutImages/adductors.webp",
        muscleName: "Adductors"
    },
    {
        muscleImg: "../Images/WorkoutImages/hamstrings_0.webp",
        muscleName: "Hamstrings"
    },
    {
        muscleImg: "../Images/WorkoutImages/calves_0.webp",
        muscleName: "Calves"
    },
    {
        muscleImg: "../Images/WorkoutImages/plantarfascia.webp",
        muscleName: "Plantar Fascia"
    },
    {
        muscleImg: "../Images/WorkoutImages/palmarfacsia.webp",
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