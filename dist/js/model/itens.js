export class Itens {
    constructor() {
        this.itens = [];
    }
    adiciona(item) {
        this.itens.push(item);
    }
    lista() {
        return [...this.itens];
    }
}
