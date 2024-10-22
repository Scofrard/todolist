import { Task } from './Task.js';  // Importation de la classe Task

class TaskManager {
    #tasks; 

    constructor() {
        this.#tasks = [];
    }

    // Méthode pour ajouter une nouvelle tâche
    addTask(titre) {
        console.log(`Ajout de la tâche : ${titre}`); 
        this.#tasks.push(new Task(titre, this.#tasks.length)); 
    }

    get tasks() {
        return this.#tasks; 
    }
}

export { TaskManager };
