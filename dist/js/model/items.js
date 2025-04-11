export class Items {
    constructor() {
        this.items = [];
    }
    adiciona(item) {
        this.items.push(item);
        console.log(this.items);
    }
}
