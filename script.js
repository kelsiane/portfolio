let skills = document.getElementById('skills-content');
let about = document.getElementById('about-content');
let projects = document.getElementById('projects-content');
let buttonAbout = document.querySelector('#up-or-down1')
let buttonProjects = document.querySelector('#up-or-down2')
let buttonSkills = document.querySelector('#up-or-down3')



function upOrDown (button, div){
button.innerText = '+'

button.addEventListener('click', function (){
    if(div.style.display === 'block'){
        button.innerText = '+'
        div.style.display = 'none';
    }else{
        div.style.display = 'block';
        button.innerText = '-'
    
    }
})
}


upOrDown (buttonAbout, about);
upOrDown (buttonProjects, projects);
upOrDown (buttonSkills, skills);
