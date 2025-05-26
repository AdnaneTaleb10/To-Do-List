class Task {
  constructor(taskTitle, projectTitle, dueDate, priority, description) {
    this.taskTitle = taskTitle;
    this.projectTitle = projectTitle;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.done = false;
  }
}

export default Task;
