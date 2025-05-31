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
import { loadHome, loadProjects } from "./modules/tabs";
import loadModals from "./modules/modals";
import loadFilter from "./modules/priorities";

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
/* pushProject(new Project("To-do list", "teste.com", "Ah sei lá n sei oq"));
pushProject(new Project("Outro projeto", "", "Ah sei lá n sei oq")); */

function clearCards() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.remove();
  });
}

window.onload = () => loadHome(), loadProjects(), loadModals(), loadFilter();

export { tasks, projects, clearCards };
