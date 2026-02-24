import { jobs } from "./jobs.js";

export function updateDashboard() {
document.getElementById("count-total").innerText = jobs.length;

document.getElementById("count-interview").innerText = jobs.filter(j => j.status === "interview").length;

document.getElementById("count-rejected").innerText = jobs.filter(j => j.status === "rejected").length;

}