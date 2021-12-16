import { project, projects, task } from "./projects";

export const newProject = document.querySelector('.new-project');
export const addButton = document.querySelector('#submit');

export const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    // const projectFormStyle = getComputedStyle(projectForm)
    // if (projectFormStyle.zIndex == "-1"){
    projectForm.style.zIndex = "0";
    projectForm.animate([
        {transform: "scale(0.3)",},
        {transform: "scale(1)",}
    ], 150);
};


export const addProject = () => {
    const nameInput = document.querySelector('#name');
    const dateInput = document.querySelector('#date');
    const priorityInput = getPriority()
    const newProject = new project(nameInput.value,dateInput.value, priorityInput)
    projects.push(newProject)
    console.log(projects)
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
