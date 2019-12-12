class SodaMachine {
    constructor(args = {}) {
        this.sodas = args.sodas;
        this.cash = args.cash;
    }

    currentInventoryCount() {
        return this.sodas.length;

    }

    findSoda(sodaBrand) {
        for (let i = 0; i < this.sodas.length ; i++) {
            if(this.sodas[i].brand===sodaBrand) return  this.sodas[i]
        }
    }

    sell(sodaBrand) {
        for (let i = 0; i < this.sodas.length; i++) {
            if(this.sodas[i].brand === sodaBrand){
                this.cash += this.sodas[i].price;
                this.sodas.splice(i,1);
            }
        }
    }
}

