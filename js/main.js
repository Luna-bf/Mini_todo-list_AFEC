let input = document.querySelector(".input");
let btn1 = document.querySelector(".ajouter");
let taskadded = document.querySelector(".task-added-prompt");
let taskparagraphe = document.createElement('p');
let btn2 = document.querySelector('.supprimer');
let promptX = document.getElementById('prompt-x');
let bgBlur = document.getElementById('blur');

btn1.addEventListener("click", ajouter);
btn2.addEventListener("click", supprimer);

function ajouter() {
    if (!input.value) {
        console.log("veuillez entrer une tâche .");
    }
    else {


        taskadded.append(taskparagraphe);
        taskadded.style.display = "block";
        taskparagraphe.textContent = `Tâche : "${input.value}" ajouté avec succès !`;
        bgBlur.classList.add('blur');

    }
    input.value = '';


}

function supprimer() {
    if (!taskparagraphe.value) {

        alert("tache supprimer avec succès !");
    }
}

promptX.addEventListener('click', () => {

    taskadded.style.display = 'none';
    bgBlur.classList.remove('blur');
});