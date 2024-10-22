class TaskManager {
    #tasks; 

    constructor() {
        this.#tasks = [];
    }

    // Méthode pour ajouter une nouvelle tâche
    addTask(titre) {
        this.#tasks.push(new Task(titre, this.#tasks.length)); 
    }
    get tasks() {
        return this.#tasks; 
    }
}

export { TaskManager }; 
