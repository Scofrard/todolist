import { TaskManager } from './TaskManager.js';  

const taskManager = new TaskManager();

const inputField = document.querySelector('input[type="text"]'); 
const addButton = document.querySelector('button');  
const taskList = document.querySelector('ul');

// Fonction pour afficher les tâches
function renderTasks() {
    taskManager.tasks.forEach(task => {
        const li = document.createElement('li');  
        li.textContent = task.titre; 
        taskList.appendChild(li);  // Ajouter la tâche à la liste HTML
    });
}

// Ajout de l'événement sur le bouton "Ajouter"
addButton.addEventListener('click', () => {
    const taskTitle = inputField.value.trim();  // Récupérer le texte entré par l'utilisateur
    if (taskTitle) {
        taskManager.addTask(taskTitle); 
        renderTasks(); 
    }
});
