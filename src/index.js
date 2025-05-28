import "./css/style.css";
import setImages from "./modules/logo";
import { Task, pushTask, displayCards } from "./modules/newTask";
import { Project, pushProject, displayProjects } from "./modules/newProject";
import { id } from "date-fns/locale";

let tasks = [];
let projects = [];

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
console.table(tasks);

pushProject(new Project("To-do list", "teste.com", "Ah sei lá n sei oq"));

displayCards();
displayProjects();

export { tasks, projects };
