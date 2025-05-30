import { changeTabLabel, clearCards } from "..";
import { displayCards, newTaskCard } from "./taskControls";

let priority = (function () {
  let filtered = false;
  let low = [];
  let medium = [];
  let high = [];

  function displayByPrior(prior) {
    for (const task of priority[`${prior}`]) {
      newTaskCard(task);
    }
  }

  return {
    filtered,
    low,
    medium,
    high,
    displayByPrior,
  };
})();

function filterPriority(task) {
  let prior = task.priority;
  priority[`${prior}`].push(task);
}

const lowPriorityBtn = document.querySelector("#low");

lowPriorityBtn.addEventListener("click", () => labelFilteredPrior("low"));

const mediumPriorityBtn = document.querySelector("#medium");

mediumPriorityBtn.addEventListener("click", () => labelFilteredPrior("medium"));

const highPriorityBtn = document.querySelector("#high");

highPriorityBtn.addEventListener("click", () => labelFilteredPrior("high"));

function labelFilteredPrior(prior) {
  const formatted = prior.charAt(0).toUpperCase() + prior.slice(1);
  if (priority.filtered !== prior) {
    priority.filtered = prior;
    clearCards();
    priority.displayByPrior(prior);
    changeTabLabel(formatted);
  } else {
    priority.filtered = "null";
    clearCards();
    displayCards();
    changeTabLabel("Home");
  }
}

export { priority, filterPriority };
