const withEquipment = [
    {
        img:"./Images/Shoulder&ArmImg.jpg",
        title:"Shoulders and Arms",
        desc:"Build explosive upper-body power and sleeve-stretching definition by targeting the deltoids, biceps, and triceps with high-intensity isolation.",
        

    },
    {
        img:"./Images/Chest&BackImg.jpg",
        title:"Chest and Back",
        desc:"Develop a broad, powerful torso by blasting your pectorals and latissimus dorsi with heavy, compound movements designed for maximum growth.",
        

    },
    {
        img:"./Images/LegsImg.jpg",
        title:"Legs",
        desc:"Build a solid foundation and explosive lower-body strength with intense quad, hamstring, and glute exercises that push your limits.",
        

    },
    {
        img:"./Images/AbsImg.jpg",
        title:"Abs and Core",
        desc:"Sculpt a rock-solid core and improve overall stability with these high-intensity abdominal and oblique workouts.",
        

    },
];
for(let i=0;i<withEquipment.length;i++){
    const exercise = document.querySelector(".exercises");
    exercise.innerHTML += `
    <div class="exercise">
                    <div class="img-section">
                        <img src="${withEquipment[i].img}" alt="${withEquipment[i].title}">
                    </div>
                    <div class="detail-section">
                        <h3>${withEquipment[i].title}</h3>
                        <p>${withEquipment[i].desc}</p>
                        <div class="detail-section-links">
                            <a href="#">Beginner</a>
                            <a href="#">Intermediate</a>
                            <a href="#">Expert</a>
                        </div>
                    </div>
                </div>
    `;
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