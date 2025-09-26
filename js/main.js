// DOM ELEMENTS
const input = document.getElementById('write-task');
const addTaskBtn = document.getElementById('add-task');
const taskAddedPrompt = document.getElementById('task-added-prompt');
const taskParagraph = document.createElement('p');
const deleteTaskBtn = document.getElementById('delete-task');


// EVENT LISTENERS
addTaskBtn.addEventListener('click', (e) => {

    e.preventDefault();
    taskAdded();
});

deleteTaskBtn.addEventListener('click', (e) => {

    e.preventDefault();
    taskDeletion();
});


// FUNCTIONS
function taskAdded() {

    // Si la valeur de l'input est vide, j'affiche ce message :
    if (!input.value) {
        console.log("Veuillez entrer une tâche.");
    } else {
        taskAddedPrompt.append(taskParagraph);
        /*
        La syntaxe ${} permet d'insérer dynamiquement une valeur, ici, la valeur de l'élément input.
        Cette syntaxe s'utilise uniquement pour les valeurs présentes entre les backtics (`...`)
        */
        taskParagraph.textContent = `Tâche : "${input.value}" ajoutée avec succès !`;

        taskAddedPrompt.style.display = 'block';
        
        input.value = '';
    }
}