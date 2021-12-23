import { task, projects, project } from "./projects";
import { projectName, getProjectByIndex, createDiv, emptyDiv } from "./DOM-Projects";

export const addTaskBtn = document.querySelector('.addtaskbtn');
export const taskInput = document.querySelector('.taskinput');
const tasksContainer = document.querySelector('.taskscontainer');

export const addTaskToArray = () => {
    if (taskInput.value != ""){ 
        const newTask = new task(taskInput.value);
        const currentProject = projects[getProjectByIndex(projectName.textContent)];
        newTask.addToProject(currentProject);
        taskInput.value = "";
        renderTasks();
    };
}

const createTaskDiv = (taskDescription) => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];

    const taskContainer = createDiv('', 'task-container');
    tasksContainer.appendChild(taskContainer);

    const deleteIcon = document.createElement('img')
    deleteIcon.src = '/src/images/delete.png';
    deleteIcon.classList.add('deleteicon');
    taskContainer.appendChild(deleteIcon)

    const taskLi = document.createElement('li');
    taskLi.classList.add('task');
    taskLi.textContent = taskDescription
    //taskLi.dataset.tasknum = currentProject.tasks.length-1
    taskContainer.appendChild(taskLi);
}

export const renderTasks = () => {
    emptyDiv('.taskscontainer');
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    console.log(currentProject)
    for (let i = 0; i < currentProject.tasks.length; i++){
        createTaskDiv(currentProject.tasks[i].description);
    }

    const deleteBtns = document.querySelectorAll('.deleteicon');
    const taskDescs = document.querySelectorAll('.task');

    for (let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].dataset.tasknum = i;
        taskDescs[i].dataset.tasknum = i;
    }
    
    deleteBtns.forEach(deleteBtn => {deleteBtn.addEventListener('click',deleteTask)});
}

export const addTaskWithEnter = (e) => {
    if(e.keyCode == 13){
        const addTaskBtn = document.querySelector('.addtaskbtn');
        addTaskBtn.click();
        e.target.value = "";
    }
}

export const deleteTask = (e) => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];

    const taskIndex = e.target.dataset.tasknum;
    console.log(taskIndex);

    currentProject.tasks.splice(taskIndex, 1);

    renderTasks();

}
