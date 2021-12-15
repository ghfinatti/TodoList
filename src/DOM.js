export const newProject = document.querySelector('.new-project');

export const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    if (projectForm.style.zIndex == "-1"){
        projectForm.style.zIndex = 0;
        projectForm.animate([
            {opacity: 0,},
            {opacity: 1,},
        ], 1000);
    }else{
        console.log(projectForm.style);
    };
};
