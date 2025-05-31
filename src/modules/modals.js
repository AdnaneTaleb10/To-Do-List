import { clearCards } from "..";
import { displayProjects, Project, pushProject } from "./projectControls";
import { changeTabLabel } from "./tabs";
import { displayCards, pushTask, Task } from "./taskControls";

const modalOptions = document.querySelector("#modal-options");
const formsModal = document.querySelector("#modal-form");
const taskForm = document.querySelector("#task-form");
const projectFrom = document.querySelector("#project-form");
const createBtn = document.querySelector("#new-task");
const createTaskBtn = document.querySelector("#create-task");
const createProjectBtn = document.querySelector("#create-project");
const addTask = document.querySelector("#add-task");
const addProj = document.querySelector("#add-project");

export default function loadModals() {
  createBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "visible";
    taskForm.style.display = "none";
    projectFrom.style.display = "none";
    closeModalBheavior(modalOptions);
  });

  createTaskBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "hidden";
    formsModal.style.visibility = "visible";
    taskForm.reset();
    taskForm.style.display = "block";
    closeModalBheavior(formsModal);
  });

  createProjectBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "hidden";
    formsModal.style.visibility = "visible";
    projectFrom.reset();
    projectFrom.style.display = "block";
    closeModalBheavior(formsModal);
  });

  addTask.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask();
  });

  addProj.addEventListener("click", (event) => {
    event.preventDefault();
    submitProj();
  });
}

function closeModalBheavior(modal) {
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.visibility = "hidden";
      taskForm.style.display = "none";
      projectFrom.style.display = "none";
    }
  };
}

function submitTask() {
  const title = document.querySelector("#task-title");
  const project = document.querySelector("#projects-field");
  const priority = document.querySelector("#task-priority-field");
  const dueDate = document.querySelector("#due-date-field");
  const description = document.querySelector("#task-description-field");

  if (title.value !== "") {
    let task = new Task(
      title.value,
      project.value,
      dueDate.value,
      priority.value,
      description.value
    );

    pushTask(task);
    displayCards();
    changeTabLabel("Home");
    formsModal.style.visibility = "hidden";
    taskForm.style.display = "none";
  } else {
    title.style.border = "2px solid var(--red)";
  }
}

function submitProj() {
  const title = document.querySelector("#project-title");
  const link = document.querySelector("#project-link-field");
  const description = document.querySelector("#project-description-field");

  if (title.value !== "") {
    let project = new Project(title.value, link.value, description.value);
    pushProject(project);
    displayProjects();
    changeTabLabel("Projects");
    formsModal.style.visibility = "hidden";
    projectFrom.style.display = "none";
  } else {
    title.style.border = "2px solid var(--red)";
  }
}
