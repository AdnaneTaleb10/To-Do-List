const modalOptions = document.querySelector("#modal-options");
const formsModal = document.querySelector("#modal-form");
const createBtn = document.querySelector("#new-task");
const createTaskBtn = document.querySelector("#create-task");

export default function loadModals() {
  createBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "visible";
    closeModalBheavior(modalOptions);
  });

  createTaskBtn.addEventListener("click", () => {
    modalOptions.style.visibility = "hidden";
    formsModal.style.visibility = "visible";
    closeModalBheavior(formsModal);
  });
}

function closeModalBheavior(modal) {
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.visibility = "hidden";
    }
  };
}
