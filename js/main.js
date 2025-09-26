let input = document.querySelector(".input");
let btn1 = document.querySelector(".ajouter");
let taskadded = document.querySelector(".task-added-prompt");
let taskparagraphe = document.createElement('p');
let btn2 = document.querySelector('.supprimer');

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
        

    }
        input.value = '';


}

function supprimer() {
    if(!taskparagraphe.value){
        taskparagraphe.style.display ="none";
        taskadded.style.display ="none";
        alert("tache supprimer avec succès !");
    }
}