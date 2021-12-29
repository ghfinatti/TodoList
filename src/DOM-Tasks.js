import { task, projects, saveLocalStorage } from "./projects";
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
        saveLocalStorage();
    };
}

const createTaskDiv = (taskDescription, completed) => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];

    const taskContainer = createDiv('', 'task-container');
    tasksContainer.appendChild(taskContainer);

    const deleteIcon = document.createElement('img')
    deleteIcon.src = 'images/delete.png';
    deleteIcon.classList.add('deleteicon');
    taskContainer.appendChild(deleteIcon)

    const taskLi = document.createElement('li');
    taskLi.classList.add('task');
    taskLi.textContent = taskDescription
    if (completed == true){
        taskLi.classList.add('taskcompleted');
    }
    taskContainer.appendChild(taskLi);
}

export const renderTasks = () => {
    emptyDiv('.taskscontainer');
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    for (let i = 0; i < currentProject.tasks.length; i++){
        createTaskDiv(currentProject.tasks[i].description, currentProject.tasks[i].checklist);
    }

    const deleteBtns = document.querySelectorAll('.deleteicon');
    const taskDescs = document.querySelectorAll('.task');

    for (let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].dataset.tasknum = i;
        taskDescs[i].dataset.tasknum = i;
    }
    
    deleteBtns.forEach(deleteBtn => {deleteBtn.addEventListener('click',deleteTask)});
    taskDescs.forEach(taskDesc => {taskDesc.addEventListener('click',completeTask)});
}

export const addTaskWithEnter = (e) => {
    if(e.keyCode == 13){
        const addTaskBtn = document.querySelector('.addtaskbtn');
        addTaskBtn.click();
        e.target.value = "";
    }
}

const deleteTask = (e) => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];

    const taskIndex = e.target.dataset.tasknum;
    currentProject.tasks.splice(taskIndex, 1);

    renderTasks();
    saveLocalStorage();

}

const completeTask = (e) => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];

    const taskIndex = e.target.dataset.tasknum;
    if (currentProject.tasks[taskIndex].checklist == false){
        currentProject.tasks[taskIndex].checklist = true;
    }else{
        currentProject.tasks[taskIndex].checklist = false;
    }

    renderTasks();
}


