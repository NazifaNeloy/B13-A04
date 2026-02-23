import { jobs } from "./jobs.js";
import { createJobCard } from "./jobCard.js";
import { updateDashboard } from "./dashboard.js";

const container = document.getElementById("jobs-container");

function showBoxes() {
    container.innerHTML = ""; 
    
    jobs.forEach(job => {
        const card = createJobCard(job);
        container.appendChild(card);
    });
}

updateDashboard();
showBoxes();