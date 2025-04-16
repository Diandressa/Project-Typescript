import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { ItensView } from "../view/itens-view.js";
import { MensagemView } from "../view/mensagem-view.js";

export class ItemController {
    private _item:HTMLInputElement;
    private _quantidade:HTMLInputElement;
    private _valor:HTMLInputElement;
    private itens = new Itens();
    private itensView = new ItensView('#listasView');
    private mensagensView = new MensagemView('.alert');

    constructor(){
        this._item = document.querySelector('#item')!;
        this._quantidade = document.querySelector('#quantidade')!;
        this._valor = document.querySelector('#valor')!;
        this.itensView.update(this.itens)
    }

    public criarItem():void{
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        const itens = new Item(this._item.value, quantidade, valor);
        
        this.adiciona(itens);
        this.atualizaView(itens);
    }

    public adiciona(itens:Item):void{
        this.itens.adiciona(itens);
        this.atualizaView(itens);
    }
    
    public atualizaView(itens:Item):void{
        this.itensView.update(this.itens)
        this.itensView.valorItem(itens, this.itens)
        this.mensagensView.update("Adicionado com sucesso");        
    }
}