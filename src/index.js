import _ from 'lodash';
import './style.css';
import { project, projects, task } from './projects';
import * as DOM from './DOM';

const testProject = new project('test title', 'test description', 'test dueDate', 'test priority', 'test checklist')
const testTask1 = new task('test task title', 'test task description');
const testTask2 = new task('test task title2', 'test task description2');

DOM.newProject.addEventListener('click', DOM.openProjectForm);
DOM.addButton.addEventListener('click', DOM.addProject);
DOM.cancelButton.addEventListener('click', DOM.closeProjectForm);