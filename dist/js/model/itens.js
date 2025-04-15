export class Itens {
    constructor() {
        this.itens = [];
        this.somaAcumulado = 0;
    }
    adiciona(item) {
        this.itens.push(item);
        this.somaAcumulado = this.somaAcumulado + item.getTotal;
    }
    lista() {
        return [...this.itens];
    }
}
