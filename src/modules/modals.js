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
    closeModalBheavior(modalOptions);
  });

  createTaskBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "hidden";
    formsModal.style.visibility = "visible";
    taskForm.style.visibility = "visible";
    projectFrom.style.visibility = "hidden";
    closeModalBheavior(formsModal , taskForm);
  });

  createProjectBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "hidden";
    formsModal.style.visibility = "visible";
    projectFrom.style.visibility = "visible";
    taskForm.style.visibility = "hidden";
    closeModalBheavior(formsModal , projectFrom);
  });

  addTask.addEventListener("click" , (event) => {
    event.preventDefault()
  })

  addProj.addEventListener("click" , (event) => {
    event.preventDefault()
  })
}

function closeModalBheavior(modal , form) {
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.visibility = "hidden";
      form.style.visibility = "hidden";
    }
  };
}
