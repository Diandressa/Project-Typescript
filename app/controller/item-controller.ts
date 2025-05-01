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
    private contador:number = 0;

    constructor(){
        this._item = document.querySelector('#item')!;
        this._quantidade = document.querySelector('#quantidade')!;
        this._valor = document.querySelector('#valor')!;
        this.itensView.update(this.itens)
    }

    public criarItem():void{
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        let id = this.contador++
        const item = new Item(this._item.value, quantidade, valor, id);

        this.adiciona(item)
    }

    public adiciona(item:Item):void{
        this.itens.adiciona(item);
        this.atualizaView(item);
        this.mensagensView.update("Adicionado com sucesso");
    }

    public remove():void{
        const btnDelete = document.querySelectorAll('.btn-delete');
        
        btnDelete.forEach(btn=>{
            btn.addEventListener('click', (event)=>{
                const buttonClicado = event.currentTarget as HTMLElement;
                const itemId = buttonClicado.getAttribute('data-id')!
                
                console.log(itemId)

                this.itens.remove(Number(itemId))
                this.itensView.update(this.itens)
                this.mensagensView.update("Item removido");
                this.atualizaView()
            })
        })
    }
    
    public atualizaView(itens?:Item):void{
        this.itensView.update(this.itens)   
        this.remove()  
    }
}