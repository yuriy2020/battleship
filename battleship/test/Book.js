class Book extends Product {
    constructor(options = {}) {
        super()
        this.format = options.format;
    }


    recordDamage() {
        this.damaged = true;
    }

    repair() {
        this.damaged = false;
    }
}
