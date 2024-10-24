class Task {

    #titre;
    #id;
    #isCompleted;

    constructor(titre, id) {
        this.#titre = titre;
        this.#id = id;
        this.#isCompleted = false;
    }

    get titre() {
        return this.#titre;
    }    

    get id() {
        return this.#id;
    }

    get isCompleted() {
        return this.#isCompleted;
    }

    set titre(titre) {
        this.#titre = titre;
    }

    set id(id) {
        this.#id = id;
    }

    set isCompleted(isCompleted) {
        this.#isCompleted = isCompleted;
    }

}

export { Task };