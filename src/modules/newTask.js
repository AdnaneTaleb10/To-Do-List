import create from "../domCreate";
import { tasks , displayCards } from "..";

class Task {
  constructor(taskTitle, projectTitle, dueDate, priority, description) {
    this.taskTitle = taskTitle;
    this.projectTitle = projectTitle;
    this.dueDate = dueDate;
    this.priority = priority.toLowerCase();
    this.description = description;
    this.done = false;
  }
}

function newTaskCard(task) {
  const minView = document.querySelector("#min-view");
  // Card
  // | Priority
  // | Wrapper
  // | | Checkbox
  // | | Info
  // | | | Title
  // | | | Project
  // | | Date and Actions
  // | | | Due date
  // | | | Edit task btn
  // | | | Remove task button
  const card = create.elWithClass("div", "", "task");

  const priority = create.elWithClass("div", "", "priority", task.priority);

  const wrapper = create.elWithClass("div", "", "wrapper");

  const checkbox = create.elWithClass("input", "", "check");
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.style.opacity = 0.4;
    } else {
      checkbox.parentElement.parentElement.style.opacity = 1;
    }
  });

  const info = create.elWithClass("div", "", "info");

  const title = create.elWithClass("p", task.taskTitle, "title");
  const taskProject = create.elWithClass("p", task.projectTitle, "project");

  const dateAndActions = create.elWithClass("div", "", "date-and-actions");

  const dueDate = create.elWithClass("p", task.dueDate, "due-date");
  const editBtn = create.el("button");
  const removeBtn = create.el("button");

  removeBtn.addEventListener("click", (e) => removeCard(removeBtn) );

  editBtn.classList.add("actions", "fa-regular", "fa-pen-to-square", "edit");
  removeBtn.classList.add("actions", "fa-regular", "fa-square-minus", "remove");

  dateAndActions.append(dueDate, editBtn, removeBtn);
  info.append(title, taskProject);
  wrapper.append(checkbox, info, dateAndActions);
  card.append(priority, wrapper);

  minView.appendChild(card);
}

function removeCard(btn) {
  let btnCard = btn.parentElement.parentElement.parentElement;

  let allCards = document.querySelectorAll('.task');
  allCards.forEach((card) => {
    card.remove();
  })

  tasks.splice(btnCard.dataset.index , 1)

  displayCards()
}

export { Task, newTaskCard };
