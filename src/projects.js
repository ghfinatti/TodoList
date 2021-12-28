import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';

let projects = [
    {title:"Finish Odin Project",dueDate:"2022-04-01",priority:"High",
    tasks:[
        {description:"Finish Foundations",checklist:true},
        {description:"Finish To-do App",checklist:true},
        {description:"Finish JavaScript",checklist:false},
        {description:"Learn React",checklist:false},
        {description:"Learn Node.js",checklist:false}]}
];

class project{

    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tasks = [];
    }

    addToProjects(){
        projects.push(this)
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

class task{
    constructor(description){
        this.description = description;
        this.checklist = false;
    }

    addToProject(project){
        project.tasks.push(this)
    }
}

function saveLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function restoreLocalStorage(){
    projects = JSON.parse(localStorage.getItem('projects'));
    DOMProj.populateProjectMenu();
    DOMProj.projectName.textContent = `${projects[0].title}`;
    DOMProj.projectDate.textContent = `Date: ${projects[0].dueDate}`;
    DOMProj.projectPriority.textContent = `Priority: ${projects[0].priority}`;

    DOMTask.renderTasks();
}

export { project, task, projects, saveLocalStorage, restoreLocalStorage }