import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { ItensView } from "../view/itens-view.js";

export class ItemController {
    private _item:HTMLInputElement;
    private _quantidade:HTMLInputElement;
    private _valor:HTMLInputElement;
    private itens = new Itens();
    private itensView = new ItensView('#listasView');

    constructor(){
        this._item = document.querySelector('#item')!;
        this._quantidade = document.querySelector('#quantidade')!;
        this._valor = document.querySelector('#valor')!;
        this.itensView.update(this.itens)
    }

    adiciona():void{
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);

        const itens = new Item(this._item.value, quantidade, valor);

        this.itens.adiciona(itens)
        this.itensView.update(this.itens)
    }
   
}