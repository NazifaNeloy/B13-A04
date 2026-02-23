import { jobs } from "./jobs.js";

export function updateDashboard() {

  /* Counting jobs*/
  const totalCount = jobs.length;
  const interviewCount = jobs.filter(
    (job) => job.status === "interview"
  ).length;
  const rejectedCount = jobs.filter(
    (job) => job.status === "rejected"
  ).length;

  /* Update */
  const totalEl = document.getElementById("count-total");
  const interviewEl = document.getElementById("count-interview");
  const rejectedEl = document.getElementById("count-rejected");

  if (totalEl) totalEl.innerText = totalCount;
  if (interviewEl) interviewEl.innerText = interviewCount;
  if (rejectedEl) rejectedEl.innerText = rejectedCount;
}