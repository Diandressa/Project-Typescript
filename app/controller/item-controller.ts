import { Item } from "../model/item.js";
import { Items } from "../model/items.js";

export class ItemController {
    private _item:HTMLInputElement;
    private _quantidade:HTMLInputElement;
    private _valor:HTMLInputElement;
    private items = new Items();

    constructor(){
        this._item = document.querySelector('#item')!;
        this._quantidade = document.querySelector('#quantidade')!;
        this._valor = document.querySelector('#valor')!;
    }

    adiciona():void{
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);

        const items = new Item(this._item.value, quantidade, valor);

        this.items.adiciona(items)

    }
   
}