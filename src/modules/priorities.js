import { clearCards } from "..";
import { displayProjects } from "./projectControls";
import { lastTab, changeTabLabel } from "./tabs";
import { displayCardsByPriority } from "./taskControls";

let filter = null;

function loadFilter() {
  const lowPriorBtn = document.querySelector("#low");
  const midPriorBtn = document.querySelector("#medium");
  const highPriorBtn = document.querySelector("#high");
  lowPriorBtn.addEventListener("click", () => filterPriority(lowPriorBtn.id));
  midPriorBtn.addEventListener("click", () => filterPriority(midPriorBtn.id));
  highPriorBtn.addEventListener("click", () => filterPriority(highPriorBtn.id));
}

function filterPriority(priority) {
  let formatted = priority.charAt(0).toUpperCase() + priority.slice(1);

  if (lastTab === "Projects") {
    displayCardsByPriority(priority);
  }

  if (filter !== priority) {
    filter = priority;
    applyFilter(priority);
    changeTabLabel(formatted);
  } else {
    filter = null;
    removeFilter();
    if(lastTab === 'Projects'){
      displayProjects();
    }
    changeTabLabel(lastTab);
  }
}

function applyFilter(priority) {
  const allCards = document.querySelectorAll(".task-card");
  allCards.forEach((card) => {
    if (!card.firstChild.classList.value.includes(`${priority}`)) {
      card.classList.add("hide");
    } else {
      card.classList.remove("hide");
    }
  });
}

function removeFilter() {
  const allCards = document.querySelectorAll(".task-card");
  allCards.forEach((card) => {
    card.classList.remove("hide");
  });
}

export default loadFilter;
