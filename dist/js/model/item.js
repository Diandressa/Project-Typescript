export class Item {
    constructor(item, quantidade, valor) {
        this._item = item;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get getItem() {
        return this._item;
    }
    get getQuantidade() {
        return this._quantidade;
    }
    get getValor() {
        return this._valor;
    }
    get getTotal() {
        return this._valor * this._quantidade;
    }
}
