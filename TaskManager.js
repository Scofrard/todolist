import { Task } from './Task.js';  // Importation de la classe Task

class TaskManager {
    #tasks; 

    constructor() {
        this.#tasks = [];
    }

    // Méthode pour ajouter une nouvelle tâche
    addTask(titre) {
        //console.log(`Ajout de la tâche : ${titre}`); 
        this.#tasks.push(new Task(titre, this.#tasks.length)); 
    }

    removeTask(id) {
        this.#tasks = this.#tasks.filter(task => task.id !== id); 
    }

    get tasks() {
        return this.#tasks; 
    }
}

export { TaskManager };
