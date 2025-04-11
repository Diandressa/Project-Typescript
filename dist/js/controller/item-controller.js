import { Item } from "../model/item.js";
import { Items } from "../model/items.js";
export class ItemController {
    constructor() {
        this.items = new Items();
        this._item = document.querySelector('#item');
        this._quantidade = document.querySelector('#quantidade');
        this._valor = document.querySelector('#valor');
    }
    adiciona() {
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        const items = new Item(this._item.value, quantidade, valor);
        this.items.adiciona(items);
    }
}
