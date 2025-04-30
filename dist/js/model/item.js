export class Item {
    constructor(item, quantidade, valor, id) {
        this._item = item;
        this._quantidade = quantidade;
        this._valor = valor;
        this._id = id;
    }
    get getId() {
        return this._id;
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
