import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';

let projects = [
    {title:"First Project",dueDate:"2050-12-25",priority:"High",tasks:[]}
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
    console.log(projects)
    DOMProj.populateProjectMenu();
    DOMProj.projectName.textContent = `${projects[0].title}`;
    DOMProj.projectDate.textContent = `Date: ${projects[0].dueDate}`;
    DOMProj.projectPriority.textContent = `Priority: ${projects[0].priority}`;

    DOMTask.renderTasks();
}

export { project, task, projects, saveLocalStorage, restoreLocalStorage }