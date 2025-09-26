let input = document.querySelector(".input");
let btn1 = document.querySelector(".ajouter");
let taskadded = document.querySelector(".task-added-prompt");
let taskDeleted = document.querySelector(".task-deleted-prompt");
let taskparagraphe = document.createElement('p');
let deletedPara = document.createElement('p');
let btn2 = document.querySelector('.supprimer');
let promptXAdd = document.getElementById('add');
let promptXDelete = document.getElementById('delete');
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
        taskparagraphe.textContent = `Tâche : "${input.value}" ajoutée avec succès !`;
        bgBlur.classList.add('blur');

    }
    input.value = '';


}

function supprimer() {
    taskDeleted.append(deletedPara);
    taskDeleted.style.display = "block";
    deletedPara.textContent = "Tâche supprimée avec succès !";
    bgBlur.classList.add('blur');
}

promptXAdd.addEventListener('click', () => {

    taskadded.style.display = 'none';
    bgBlur.classList.remove('blur');
});

promptXDelete.addEventListener('click', () => {

    taskDeleted.style.display = 'none';
    bgBlur.classList.remove('blur');
});