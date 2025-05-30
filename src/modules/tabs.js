import { clearCards } from "..";
import modals from "./modals";
import { displayProjects } from "./projectControls";
import { displayCards } from "./taskControls";

function loadHome() {
  const homeTab = document.querySelector("#home");
  homeTab.addEventListener("click", () => {
    clearCards();
    displayCards();
    changeTabLabel("Home");
  });
}

function loadProjects() {
  const projectTab = document.querySelector("#projects");
  projectTab.addEventListener("click", () => {
    clearCards();
    displayProjects();
    changeTabLabel("Projects");
  });
}

function changeTabLabel(newTab) {
  const currentTab = document.querySelector("#current-tab");
  currentTab.textContent = newTab;
}

export { loadHome, loadProjects, changeTabLabel };
