let elemento_ = document.getElementById('teste1');
let elemento = document.getElementById('teste2');
let about = document.getElementById('about-content');

about.classList.add('hidden');

elemento_.classList.add('hidden')

elemento.onclick = function(){
    console.log("helllo world")
    about.classList.remove('hidden');
    elemento_.classList.remove('hidden')
    elemento.classList.add('hidden')
}

elemento_.onclick = function (){
    about.classList.add('hidden')
    elemento_.classList.add('hidden')
    elemento.classList.remove('hidden')
}