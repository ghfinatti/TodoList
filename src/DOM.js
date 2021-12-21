import { project, projects, task } from "./projects";

export const newProject = document.querySelector('#add-project-btn');
export const addButton = document.querySelector('#submit');
export const cancelButton = document.querySelector('#cancel');
export const projectsFromMenu = document.querySelectorAll('.project');
export const deleteBtn = document.querySelector('.deletebutton');

export const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    if (getComputedStyle(projectForm).zIndex == "-1"){
        projectForm.style.zIndex = "0";
        projectForm.animate([
            {transform: "scale(0.3)",},
            {transform: "scale(1)",}
        ], 150);
    };
};

export const closeProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.animate([
        {transform: "scale(1)",},
        {transform: "scale(0)",}
    ], 150);
    setTimeout(() => {projectForm.style.zIndex = "-1"}, 150);
};

export const addProjectToArray = () => {
    const nameInput = document.querySelector('#name');
    const dateInput = document.querySelector('#date');
    const priorityInput = getPriority()
    const repeatedName = checkForRepeatedName(nameInput.value);
    if (repeatedName == true){
        alert("Project name already used")
    }
    else if (priorityInput === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
    }else{
        const newProject = new project(nameInput.value,dateInput.value, priorityInput);
        newProject.addToProjects()
        addProjectToMenu(nameInput.value);
        closeProjectForm()
    }
};

const createDiv = (text, cssClass) => {
    const newElement = document.createElement('div');
    newElement.classList.add(cssClass);
    newElement.textContent = text;
    return newElement
}

export const addProjectToMenu = (projectName) => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectDiv = createDiv('','project');
    const nameDiv = createDiv(projectName);
    const arrowDiv = createDiv('>','arrow');

    projectDiv.dataset.projectnum = projects.length-1;
    nameDiv.dataset.projectnum = projects.length-1;
    arrowDiv.dataset.projectnum = projects.length-1;

    projectsContainer.appendChild(projectDiv);
    projectDiv.appendChild(nameDiv);
    projectDiv.appendChild(arrowDiv);

    const projectsFromMenu = document.querySelectorAll('.project');
    projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',populateProjectScreen)});
};


const getPriority = () => {
    const priorityInput = document.querySelectorAll('.priority-btns');
    if (priorityInput[0].checked == true){
        return "High"
    }else if(priorityInput[1].checked == true){
        return "Normal"
    }else if(priorityInput[2].checked == true){
        return "Low"
    }else{
        return null
    }
}

const emptyDiv = (div) => {
    const divToBeEmpty = document.querySelector(div);
    while (divToBeEmpty.firstChild){
        divToBeEmpty.removeChild(divToBeEmpty.lastChild);
    };
};

export const populateProjectScreen = (e) => {
    const todosDisplay = document.querySelector('.todos-display');
    const projectPosition = e.target.dataset.projectnum;
    const projectName = document.querySelector('.project-name');
    const projectDate = document.querySelector('.project-date');
    const projectPriority = document.querySelector('.project-priority');
    const deleteBtn = document.querySelector('.deletebutton');

    projectName.textContent = `${projects[projectPosition].title}`;
    projectDate.textContent = `Date: ${projects[projectPosition].dueDate}`;
    projectPriority.textContent = `Priority: ${projects[projectPosition].priority}`;

    emptyDiv('.project-tasks');
    
    //Project Header
    // const projectHeader = createDiv('', 'project-header');
    // const projectName = createDiv(projects[projectPosition].title,'project-name');
    // const projectDate = createDiv(`Date: ${projects[projectPosition].dueDate}`,'project-date');
    // const projectPriority = createDiv(`Priority: ${projects[projectPosition].priority}`, 'project-priority');
    // const deleteBtn = document.createElement('input');
    // deleteBtn.classList.add('deletebutton');
    // deleteBtn.type = 'button';
    // deleteBtn.value = 'Delete';
    // todosDisplay.appendChild(projectHeader);
    // projectHeader.appendChild(projectName);
    // projectHeader.appendChild(projectDate);
    // projectHeader.appendChild(projectPriority);
    // projectHeader.appendChild(deleteBtn);

    //Project Tasks

    //create logic for populating with selected project info.

    //deleteBtn.addEventListener('click', getProjectByName);
}

export const getProjectByName = () => {
    const projectName = document.querySelector('.project-name');
    let i = 0
    while(projects[i].title != projectName.textContent){
        i++        
    }
    return i
}

const checkForRepeatedName = (name) => {
    let repeatedName = false
    for(let i = 0; i < projects.length; i++){
        if (name === projects[i].title){
            repeatedName = true
        }
    }
    return repeatedName
}

