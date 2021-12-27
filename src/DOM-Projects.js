import { project, projects, saveLocalStorage } from "./projects";
import { renderTasks } from "./DOM-Tasks";

export const newProject = document.querySelector('#add-project-btn');
export const addButton = document.querySelector('#submit');
export const cancelButton = document.querySelector('#cancel');
export const projectsFromMenu = document.querySelectorAll('.project');
export const deleteBtn = document.querySelector('.deletebutton');
export const editBtn = document.querySelector('.editbutton');
export const projectName = document.querySelector('.project-name');
export const projectDate = document.querySelector('.project-date');
export const projectPriority = document.querySelector('.project-priority');

const priorityInput = document.querySelectorAll('.priority-btns');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');

export const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    nameInput.value = "";
    dateInput.value = "";
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

export const addProjectToApp = () => {
    const priority = getPriority(priorityInput)
    const repeatedName = checkForRepeatedName(nameInput.value);
    if (repeatedName == true){
        alert("Project name already used")
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
    }else{
        const newProject = new project(nameInput.value,dateInput.value, priority);
        newProject.addToProjects()
        populateProjectMenu();
        closeProjectForm();
        updateToLastCreatedProject();
        saveLocalStorage();
    }
};

const updateToLastCreatedProject = () => {
    const lastProjectIndex = projects.length-1;
    projectName.textContent = `${projects[lastProjectIndex].title}`;
    projectDate.textContent = `Date: ${projects[lastProjectIndex].dueDate}`;
    projectPriority.textContent = `Priority: ${projects[lastProjectIndex].priority}`;
    
    renderTasks();
}

export const createDiv = (text, cssClass) => {
    const newElement = document.createElement('div');
    newElement.classList.add(cssClass);
    newElement.textContent = text;
    return newElement
}

const addProjectToMenu = (projectName) => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectDiv = createDiv('','project');
    const nameDiv = createDiv(projectName,'menuprojectname');
    const arrowDiv = createDiv('>','arrow');

    projectsContainer.appendChild(projectDiv);
    projectDiv.appendChild(nameDiv);
    projectDiv.appendChild(arrowDiv);

    const projectsFromMenu = document.querySelectorAll('.menuprojectname');
    projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',populateProjectScreen)});
};


const getPriority = (priorityNode) => {
    if (priorityNode[0].checked == true){
        return "High"
    }else if(priorityNode[1].checked == true){
        return "Normal"
    }else if(priorityNode[2].checked == true){
        return "Low"
    }else{
        return null
    }
}

export const emptyDiv = (div) => {
    const divToBeEmpty = document.querySelector(div);
    while (divToBeEmpty.firstChild){
        divToBeEmpty.removeChild(divToBeEmpty.lastChild);
    };
};

export const populateProjectScreen = (e) => {
    const projectPosition = getProjectByIndex(e.target.textContent);

    projectName.textContent = `${projects[projectPosition].title}`;
    projectDate.textContent = `Date: ${projects[projectPosition].dueDate}`;
    projectPriority.textContent = `Priority: ${projects[projectPosition].priority}`;
    
    renderTasks();

}

export const getProjectByIndex = (projectName) => {
    let i = 0
    while(projects[i].title != projectName){
        i++
    }
    return i
}

const checkForRepeatedName = (name) => {
    let repeatedName = false
    for(let i = 0; i < projects.length; i++){
        if (name.toLowerCase() === projects[i].title.toLowerCase()){
            repeatedName = true
        }
    }
    return repeatedName
}

export const populateProjectMenu = () => {
    emptyDiv('.projects-container');
    for (let i = 0; i < projects.length;i++){
        addProjectToMenu(projects[i].title);
    }
}

export const deleteProject = () => {
    if (projects.length > 1){
        const projectPosition = getProjectByIndex(projectName.textContent);
        projects.splice(projectPosition,1);
        populateProjectMenu();
        updateToLastCreatedProject();
    }else{
        alert(`You can't delete all projects`);
    }
}

export const editProject = () => {
    addButton.value = "Edit";
    addButton.removeEventListener('click', addProjectToApp);
    
    openProjectForm();
    
    //const currentProject = projects[getProjectByIndex(projectName.textContent)];
    const dateString = projectDate.textContent.split(" ")[1]
    const priorityString = projectPriority.textContent.split(" ")[1]
    
    dateInput.value = dateString;
    nameInput.value = projectName.textContent;
    
    if(priorityString == "High"){
        priorityInput[0].checked = true
    } else if (priorityString == "Normal"){
        priorityInput[1].checked = true
    } else {
        priorityInput[2].checked = true
    }

    addButton.addEventListener('click', editProjectArray)

}

const editProjectArray = () => {
    const currentProject = projects[getProjectByIndex(projectName.textContent)];
    const priority = getPriority(priorityInput);
    const repeatedName = checkForRepeatedName(nameInput.value);
    const checkNameChange = !(projectName.textContent = nameInput.value);
    if (repeatedName == true && checkNameChange == true){
        alert("Project name already used");
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information");
    }else{
        currentProject.title = nameInput.value;
        currentProject.dueDate = dateInput.value;
        currentProject.priority = priority;

        projectName.textContent = `${currentProject.title}`;
        projectDate.textContent = `Date: ${currentProject.dueDate}`;
        projectPriority.textContent = `Priority: ${currentProject.priority}`;
        
        populateProjectMenu();
        closeProjectForm();
        addButton.value = "Add";
        addButton.removeEventListener('click', editProjectArray);
        addButton.addEventListener('click', addProjectToApp);
        saveLocalStorage();
    }
}