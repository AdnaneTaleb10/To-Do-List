import { clearCards, tasks } from "..";
import { newTaskCard, displayCards } from "./taskControls";

let filtered = false;

function filterByPriority(priority) {
  if (!filtered) {
    let filteredArr = tasks.filter((task) => task.priority == priority);
    clearCards();
    filteredArr.forEach((task) => newTaskCard(task));
    filtered = true;
  } else {
    clearCards();
    displayCards();
    filtered = false;
  }
}

function setFiltered(value){
    filtered = value;
}

export {filterByPriority , setFiltered} ;
