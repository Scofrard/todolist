class TaskManager {

    #tasks
    constructor() {
        this.#tasks = [];
    }
    addTask(titre) {
        this.#tasks.push(new Task(titre, this.#tasks.length));
    }

    deleteTask(id) {
        this.#tasks.splice(id, 1);
    }

    updateTask(id, titre) {
        this.#tasks[id].titre = titre;
    }

    get tasks() {
        return this.#tasks;
    }
    
}