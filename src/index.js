import './style.css';
import { project, projects, task } from './projects';
import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';

//projects listeners
DOMProj.newProject.addEventListener('click', DOMProj.openProjectForm);
DOMProj.addButton.addEventListener('click', DOMProj.addProjectToApp);
DOMProj.cancelButton.addEventListener('click', DOMProj.closeProjectForm);
DOMProj.deleteBtn.addEventListener('click',DOMProj.deleteProject);
DOMProj.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',DOMProj.populateProjectScreen)});

//tasks listeners
DOMTask.addTaskBtn.addEventListener('click', DOMTask.addTaskToArray);
DOMTask.taskInput.addEventListener('keyup', DOMTask.addTaskWithEnter);