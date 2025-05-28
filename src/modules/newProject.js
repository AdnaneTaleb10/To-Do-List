import { projects } from "..";
import create from "../domCreate";

class Project {
  constructor(projectTitle, link, description) {
    this.projectTitle = projectTitle;
    this.link = link;
    this.description = description;
    this.tasks = [];
  }
}

function newProjectCard(project) {
  // Card
  // ^ stripe
  // ^ wrapper
  //   ^ info
  //     ^ title
  //     ^ link
  //   ^ btnsDiv
  //     ^ editBtn
  //     ^ removeBtn

  const minView = document.querySelector("#min-view");

  const projectCard = create.elWithClass("div", "", "project-card");
  const stripe = create.elWithClass("div", "", "project-stripe");
  const wrapper = create.elWithClass("div", "", "project-wrapper");
  const info = create.elWithClass("div", "", "info");
  const title = create.elWithClass("p", project.projectTitle, "title");
  const link = create.elWithClass("p", project.link, "link");
  const btnsDiv = create.elWithClass("div", "", "actions");
  const editBtn = create.elWithClass(
    "button",
    "",
    "fa-regular",
    "fa-pen-to-square",
    "edit"
  );
  const removeBtn = create.elWithClass(
    "button",
    "",
    "fa-regular",
    "fa-square-minus",
    "remove"
  );

  removeBtn.addEventListener("click", () => {
    removeCard(removeBtn);
    displayProjects();
  });

  btnsDiv.appendChild(editBtn);
  btnsDiv.appendChild(removeBtn);

  info.appendChild(title);
  info.appendChild(link);

  wrapper.appendChild(info);
  wrapper.appendChild(btnsDiv);

  projectCard.appendChild(stripe);
  projectCard.appendChild(wrapper);

  minView.appendChild(projectCard);
}

function removeCard(btn) {
  let btnCard = btn.parentElement.parentElement;

  let allCards = document.querySelectorAll(".project-card");
  allCards.forEach((card) => {
    card.remove();
  });

  projects.splice(btnCard.dataset.index, 1);
}

function displayProjects() {
  for (const project of projects) {
    newProjectCard(project);
  }
  setDatasetIndexProjects();
}

function setDatasetIndexProjects() {
  let index = 0;
  const projCards = document.querySelectorAll(".project-card");
  projCards.forEach((projCard) => {
    projCard.dataset.proj_id = index;
    index++;
  });
}

function pushProject(project) {
  projects.push(project);
}

export { Project, newProjectCard, pushProject, displayProjects };
