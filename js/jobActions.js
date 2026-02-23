import { jobs } from "./jobs.js";
import { renderJobs } from "./renderJobs.js";

export function updateStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex === -1) return;

    jobs[jobIndex].status = newStatus;
    renderJobs();
}

export function deleteJob(id) {
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) {
        jobs.splice(index, 1);
        renderJobs();
    }
}