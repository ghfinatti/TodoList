import './style.css';
import { project, projects, task } from './projects';
import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';

const testProject = new project('test title', 'test description', 'test dueDate', 'test priority', 'test checklist')
const testTask1 = new task('test task title', 'test task description');
const testTask2 = new task('test task title2', 'test task description2');

DOMProj.newProject.addEventListener('click', DOMProj.openProjectForm);
DOMProj.addButton.addEventListener('click', DOMProj.addProjectToApp);
DOMProj.cancelButton.addEventListener('click', DOMProj.closeProjectForm);
DOMProj.deleteBtn.addEventListener('click',DOMProj.deleteProject);
DOMProj.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',DOMProj.populateProjectScreen)});

DOMTask.addTaskBtn.addEventListener('click', DOMTask.addTaskToArray);