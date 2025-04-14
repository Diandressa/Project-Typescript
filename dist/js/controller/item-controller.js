import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { ItensView } from "../view/itens-view.js";
export class ItemController {
    constructor() {
        this.itens = new Itens();
        this.itensView = new ItensView('#listasView');
        this._item = document.querySelector('#item');
        this._quantidade = document.querySelector('#quantidade');
        this._valor = document.querySelector('#valor');
        this.itensView.update(this.itens);
    }
    adiciona() {
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        const items = new Item(this._item.value, quantidade, valor);
        this.itens.adiciona(items);
        this.itensView.update(this.itens);
    }
}
