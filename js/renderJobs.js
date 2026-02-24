import { jobs } from "./jobs.js";
import { createJobCard } from "./jobCard.js";
import { updateDashboard } from "./dashboard.js";

let currentTab = "all";

export function setCurrentTab(tab) {
  currentTab = tab;
}

export function renderJobs() {
  const container = document.getElementById("jobs-container");
  const emptyState = document.getElementById("empty-state");
  const sectionCount = document.getElementById("section-count");

  container.innerHTML = "";

  const filteredJobs = jobs.filter(job => {
    if (currentTab === "all") return true;
    return job.status === currentTab;
  });

  sectionCount.innerText = filteredJobs.length;

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
    container.classList.add("hidden");
  }
else {
  emptyState.classList.add("hidden");
  container.classList.remove("hidden");
filteredJobs.forEach((job) => {
    container.appendChild(createJobCard(job));
  });
}
  updateDashboard();
}