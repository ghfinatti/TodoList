import './style.css';
import { restoreLocalStorage } from './projects';
import * as DOMProj from './DOM-Projects';
import * as DOMTask from './DOM-Tasks';

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

// export function saveLocalStorage(){
//     localStorage.setItem('projects', JSON.stringify(projects));
// }

// function restoreLocalStorage(){
//     projects = JSON.parse(localStorage.getItem('projects'));
//     console.log(projects)
//     DOMProj.populateProjectMenu();
//     projectName.textContent = `${projects[0].title}`;
//     projectDate.textContent = `Date: ${projects[0].dueDate}`;
//     projectPriority.textContent = `Priority: ${projects[0].priority}`;

//     DOMTask.renderTasks();
// }

restoreLocalStorage();