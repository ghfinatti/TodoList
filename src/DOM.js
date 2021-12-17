import { project, projects, task } from "./projects";

export const newProject = document.querySelector('#add-project-btn');
export const addButton = document.querySelector('#submit');
export const cancelButton = document.querySelector('#cancel');

export const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.style.zIndex = "0";
    projectForm.animate([
        {transform: "scale(0.3)",},
        {transform: "scale(1)",}
    ], 150);
};

export const closeProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.animate([
        {transform: "scale(1)",},
        {transform: "scale(0)",}
    ], 150);
    setTimeout(() => {projectForm.style.zIndex = "-1"}, 150);
};

export const addProject = () => {
    const nameInput = document.querySelector('#name');
    const dateInput = document.querySelector('#date');
    const priorityInput = getPriority()
    if (priorityInput === "none" || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
    }else{
        const newProject = new project(nameInput.value,dateInput.value, priorityInput);
        newProject.addToProjects()
        closeProjectForm()
        console.log(projects)
    }
};

export const getPriority = () => {
    const priorityInput = document.querySelectorAll('.priority-btns');
    if (priorityInput[0].checked == true){
        return "high"
    }else if(priorityInput[1].checked == true){
        return "normal"
    }else if(priorityInput[2].checked == true){
        return "low"
    }else{
        return "none"
    }
}
