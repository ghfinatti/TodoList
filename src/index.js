import '/dist/style.css';
import { restoreLocalStorage } from './projects';
import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';
import * as Classes from './projects';

//projects listeners
DOMProj.newProject.addEventListener('click', DOMProj.openProjectForm);
DOMProj.addButton.addEventListener('click', DOMProj.addProjectToApp);
DOMProj.cancelButton.addEventListener('click', DOMProj.closeProjectForm);
DOMProj.deleteBtn.addEventListener('click',DOMProj.deleteProject);
DOMProj.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',DOMProj.populateProjectScreen)});
DOMProj.editBtn.addEventListener('click',DOMProj.editProject);

//tasks listeners
DOMTask.addTaskBtn.addEventListener('click', DOMTask.addTaskToArray);
DOMTask.taskInput.addEventListener('keyup', DOMTask.addTaskWithEnter);

DOMProj.renderUI();