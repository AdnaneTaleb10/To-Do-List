import "./css/style.css";
import setImages from "./modules/logo";
import { Task, newTaskCard } from "./modules/newTask";
import Project from "./modules/newProject";

let tasks = [];
let projects = [];

const header = new Task('Add header', 'To-do List', '24-06-2024', 'high', 'Header components: Logo, dark/light mode theme icon, and login button');
tasks.push(header);

function displayTasks(arr) {
    for(const task of arr) {
        newTaskCard(task)
    };
};

displayTasks(tasks)