const projects = [
    {title:"First Project",dueDate:"2050-12-25",priority:"High",tasks:[{title:"First Task",checklist:false},{title:"Second Task",checklist:false}]}
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
    constructor(title, checklist){
        this.title = title;
        this.checklist = false;
    }
}

//const testProject = new project('test title', 'test description', 'test dueDate', 'test priority', 'test checklist')

export { project, task, projects }