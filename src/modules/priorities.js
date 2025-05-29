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

lowPriorityBtn.addEventListener("click", () => {
  if (priority.filtered !== "low") {
    priority.filtered = "low";
    clearCards();
    priority.displayByPrior("low");
    changeTabLabel("Low Priority");
  } else {
    priority.filtered = "null";
    clearCards();
    displayCards();
    changeTabLabel("Home");
  }
});

const mediumPriorityBtn = document.querySelector("#medium");

mediumPriorityBtn.addEventListener("click", () => {
  if (priority.filtered !== "medium") {
    priority.filtered = "medium";
    clearCards();
    priority.displayByPrior("medium");
    changeTabLabel("Medium Priority");
  } else {
    priority.filtered = "null";
    clearCards();
    displayCards();
    changeTabLabel("Home");
  }
});

const highPriorityBtn = document.querySelector("#high");

highPriorityBtn.addEventListener("click", () => {
  if (priority.filtered !== "high") {
    priority.filtered = "high";
    clearCards();
    priority.displayByPrior("high");
    changeTabLabel("High Priority");
  } else {
    priority.filtered = "null";
    clearCards();
    displayCards();
    changeTabLabel("Home");
  }
});

export { priority, filterPriority };
