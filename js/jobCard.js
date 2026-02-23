import { updateStatus, deleteJob } from "./jobActions.js";

export function createJobCard(job) {

  const statusConfig = {
    interview: {
      accent: "status-accent-interview",
      badgeClass:
        "bg-green-500/10 text-green-500 border border-green-500/20",
      badgeText: "Interview"
    },
    rejected: {
      accent: "status-accent-rejected",
      badgeClass:
        "bg-red-500/10 text-red-500 border border-red-500/20",
      badgeText: "Rejected"
    },
    default: {
      accent: "",
      badgeClass:
        "bg-gray-700 text-gray-300 border border-gray-600",
      badgeText: "Not Applied"
    }
  };

  const currentStatus = statusConfig[job.status] || statusConfig.default;

  const badgeHTML = `
    <div class="mb-4">
      <span class="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${currentStatus.badgeClass}">
        ${currentStatus.badgeText}
      </span>
    </div>
  `;

  /* Buttons */
  const btnBase =
    "px-4 py-2 rounded text-sm font-bold border transition-all duration-200 uppercase tracking-wider";

  const isInterview = job.status === "interview";
  const isRejected = job.status === "rejected";

  const btnInterviewClass = isInterview
    ? `${btnBase} bg-green-600 border-green-600 text-white shadow-lg shadow-green-900/50`
    : `${btnBase} border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent`;

  const btnRejectedClass = isRejected
    ? `${btnBase} bg-red-500 border-red-500 text-white shadow-lg shadow-red-900/50`
    : `${btnBase} border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent`;

  /* Card Element */
  const card = document.createElement("div");
  card.className = `card-custom bg-[#1A1D23] p-6 rounded-xl relative ${currentStatus.accent}`;

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-bold text-white mb-1">${job.company}</h3>
        <p class="text-gray-400 text-sm font-medium mb-3">${job.position}</p>
      </div>
      <button class="delete-btn text-gray-500 hover:text-red-500 transition-colors">
        <i class="fa-regular fa-trash-can text-lg"></i>
      </button>
    </div>

    <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400 mb-5 font-mono">
      <span>${job.location}</span>
      <span>•</span>
      <span>${job.type}</span>
      <span>•</span>
      <span class="text-gray-300">${job.salary}</span>
    </div>

    ${badgeHTML}

    <p class="text-gray-500 text-sm mb-6 leading-relaxed border-t border-gray-800/50 pt-4">
      ${job.description}
    </p>

    <div class="flex gap-3">
      <button class="btn-interview ${btnInterviewClass}">
        Interview
      </button>
      <button class="btn-rejected ${btnRejectedClass}">
        Rejected
      </button>
    </div>
  `;

  /* clickable buttons */
  card
    .querySelector(".btn-interview")
    .addEventListener("click", () =>
      updateStatus(job.id, "interview")
    );

  card
    .querySelector(".btn-rejected")
    .addEventListener("click", () =>
      updateStatus(job.id, "rejected")
    );

  card
    .querySelector(".delete-btn")
    .addEventListener("click", () =>
      deleteJob(job.id)
    );

  return card;
}