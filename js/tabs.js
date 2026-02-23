import { renderJobs, setCurrentTab } from "./renderJobs.js";

export function switchTab(tabName) {

    setCurrentTab(tabName);
    renderJobs();

    ["all", "interview", "rejected"].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);

        if (t === tabName) {
            btn.className = "px-8 py-2 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white shadow-lg";
        } else {
            btn.className ="px-8 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors";
        }
    });
}