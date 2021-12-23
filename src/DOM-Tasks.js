import { task, projects, project } from "./projects";
import { projectName, getProjectByIndex, createDiv, emptyDiv } from "./DOM-Projects";

export const addTaskBtn = document.querySelector('.addtaskbtn');
export const taskInput = document.querySelector('.taskinput');
const tasksContainer = document.querySelector('.taskscontainer');

export const addTaskToArray = () => {
    const newTask = new task(taskInput.value);
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    newTask.addToProject(currentProject);

    //createTaskDiv(newTask.description);
    renderTasks();
    console.log(projects)
}

const createTaskDiv = (taskDescription) => {
    const taskContainer = createDiv('', 'task-container');
    tasksContainer.appendChild(taskContainer);

    const taskLi = document.createElement('li');
    taskLi.classList.add('task');
    taskLi.textContent = taskDescription
    taskContainer.appendChild(taskLi);

    console.log(taskLi)

    const deleteIcon = document.createElement('img')
    deleteIcon.src = '/src/images/delete.png';
    deleteIcon.classList.add('deleteicon');
    taskContainer.appendChild(deleteIcon)

}

const renderTasks = () => {
    emptyDiv('.taskscontainer');
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    for (let i = 0; i < currentProject.tasks.length; i++){
        createTaskDiv(currentProject.tasks[i].description);
    }
}

export const addTaskWithEnter = (e) => {
    if(e.keyCode == 13){
        const addTaskBtn = document.querySelector('.addtaskbtn');
        addTaskBtn.click();
        e.target.value = "";
    }
}