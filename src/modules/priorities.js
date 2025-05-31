import { changeTabLabel } from "./tabs";

/* import { clearCards, tasks } from "..";
import { changeTabLabel } from "./tabs";
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

function filterPriority() {
  priority.low = [];
  priority.medium = [];
  priority.high = [];

  for (let i = 0; i < tasks.length; i++) {
    let prior = tasks[i].priority;
    priority[`${prior}`].push(tasks[i]);
  }
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
 */
let filter = false;

function loadFilter() {
    const lowPriorBtn = document.querySelector('#low');
    const midPriorBtn = document.querySelector('#medium');
    const highPriorBtn = document.querySelector('#high');
    lowPriorBtn.addEventListener('click', () => filterPriority(lowPriorBtn.id));
    midPriorBtn.addEventListener('click', () => filterPriority(midPriorBtn.id));
    highPriorBtn.addEventListener('click', () => filterPriority(highPriorBtn.id));
};

function filterPriority(priority){
  let formatted = priority.charAt(0).toUpperCase() + priority.slice(1);

  if(filter !== priority){
    filter = priority;
    applyFilter(priority);
    changeTabLabel(formatted);
  }else{
    filter = null;
    removeFilter();
    changeTabLabel('Home')
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
    card.classList.remove("hide")
  });
}

export default loadFilter