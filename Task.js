class Task {

    #titre;
    #id;

    constructor(titre, id) {
        this.#titre = titre;
        this.#id = id;
    }

    get titre() {
        return this.#titre;
    }    

    get id() {
        return this.#id;
    }

    set titre(titre) {
        this.#titre = titre;
    }

    set id(id) {
        this.#id = id;
    }



}