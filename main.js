import { TaskManager } from './TaskManager.js';  

const taskManager = new TaskManager();

const inputField = document.querySelector('input[type="text"]'); 
const addButton = document.querySelector('button');  
const taskList = document.querySelector('ul');
const errorMessage = document.getElementById('error-message');

// Fonction pour afficher les tâches
function renderTasks() {
    // Vider la liste avant de la recréer
    taskList.innerHTML = '';

    // Afficher chaque tâche dans la liste
    taskManager.tasks.forEach((task, index) => {
        const li = document.createElement('li');  
        li.className = "py-4 flex items-center justify-between";

        // Créer le conteneur pour la checkbox
        const taskContainer = document.createElement('div');
        taskContainer.className = "flex items-center";

        // Ajouter une case à cocher
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mr-2";
        checkbox.checked = false; 

        // Ajouter le titre de la tâche
        const taskTitle = document.createElement('span');
        taskTitle.textContent = task.titre;

        // Ajouter le bouton supprimer
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "flex-shrink-0 bg-red-500 hover:bg-red-700 text-white text-sm border-4 border-red-500 hover:border-red-700 py-1 px-2 rounded";
        
        // Ajouter un événement de suppression sur le bouton (Note : Il faut l'afficher dans la boucle pour qu ele bouton soit lié à la bonne tâche)
        deleteButton.addEventListener('click', () => {
            taskManager.removeTask(index);
            renderTasks();
        });

        // Ajouter tous les éléments créés au conteneur et à la liste
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskTitle);
        li.appendChild(taskContainer);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Ajout de l'événement sur le bouton "Ajouter"
addButton.addEventListener('click', () => {
    const taskTitle = inputField.value.trim();  // Récupérer le texte entré par l'utilisateur

    if (taskTitle !== "") {
        // Si le champ n'est pas vide, cacher le message d'erreur et ajouter la tâche
        errorMessage.classList.add('hidden');
        taskManager.addTask(taskTitle); 
        inputField.value = '';  // Vider le champ de saisie après ajout
        renderTasks(); 
    } else {
        // Si le champ est vide, afficher le message d'erreur
        errorMessage.classList.remove('hidden');
    }
});
