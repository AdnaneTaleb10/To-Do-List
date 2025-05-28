import "./css/style.css";
import setImages from "./modules/logo";
import {
  Task,
  pushTask,
  displayCards,
  newTaskCard,
} from "./modules/taskControls";
import {
  Project,
  pushProject,
  displayProjects,
} from "./modules/projectControls";
import { filterByPriority, setFiltered } from "./modules/priorities";

let tasks = [];
let projects = [];

// Filling some tasks
pushTask(
  new Task(
    "Header",
    "Restaurant Page",
    "24-06-2024",
    "High",
    "Header components: Logo, dark/light mode theme icon, and login button"
  )
);
pushTask(new Task("Nav", "Dashboard", "13-10-2024", "low", "nav icons"));
pushTask(new Task("Main", "Library", "10-10-2050", "medium", "libros"));
/* console.table(tasks);
 */
// And some projects
pushProject(new Project("To-do list", "teste.com", "Ah sei lá n sei oq"));
pushProject(new Project("Outro projeto", "", "Ah sei lá n sei oq"));

window.onload = displayCards();

let homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  clearCards();
  displayCards();
  setFiltered(false);
});

let projectsBtn = document.querySelector("#projects");
projectsBtn.addEventListener("click", () => {
  clearCards();
  displayProjects();
});

let highPriorityBtn = document.querySelector("#high");
highPriorityBtn.addEventListener("click", () => filterByPriority("high"));

let mediumPriorityBtn = document.querySelector("#medium");
mediumPriorityBtn.addEventListener("click", () => filterByPriority("medium"));

let lowPriorityBtn = document.querySelector("#low");
lowPriorityBtn.addEventListener("click", () => filterByPriority("low"));

function clearCards() {
  const minView = document.querySelector("#min-view");
  while (minView.lastChild) {
    minView.removeChild(minView.lastChild);
  }
}

export { tasks, projects, clearCards };
