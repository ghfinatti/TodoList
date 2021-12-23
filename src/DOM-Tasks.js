import { task, projects, project } from "./projects";
import { projectName, getProjectByIndex } from "./DOM-Projects";

export const addTaskBtn = document.querySelector('.addtaskbtn');
const taskInput = document.querySelector('.taskinput');

export const addTaskToArray = () => {
    const newTask = new task(taskInput.value);
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    newTask.addToProject(currentProject);
} 