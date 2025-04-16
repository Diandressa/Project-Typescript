import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { ItensView } from "../view/itens-view.js";
import { MensagemView } from "../view/mensagem-view.js";
export class ItemController {
    constructor() {
        this.itens = new Itens();
        this.itensView = new ItensView('#listasView');
        this.mensagensView = new MensagemView('.alert');
        this._item = document.querySelector('#item');
        this._quantidade = document.querySelector('#quantidade');
        this._valor = document.querySelector('#valor');
        this.itensView.update(this.itens);
    }
    criarItem() {
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        const itens = new Item(this._item.value, quantidade, valor);
        this.adiciona(itens);
        this.atualizaView(itens);
    }
    adiciona(itens) {
        this.itens.adiciona(itens);
        this.atualizaView(itens);
    }
    atualizaView(itens) {
        this.itensView.update(this.itens);
        this.itensView.valorItem(itens, this.itens);
        this.mensagensView.update("Adicionado com sucesso");
    }
}
