import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { ItensView } from "../view/itens-view.js";
import { MensagemView } from "../view/mensagem-view.js";
export class ItemController {
    constructor() {
        this.itens = new Itens();
        this.itensView = new ItensView('#listasView', '#totalView');
        this.mensagensView = new MensagemView('.alert', '#totalView');
        this.contador = 0;
        this._item = document.querySelector('#item');
        this._quantidade = document.querySelector('#quantidade');
        this._valor = document.querySelector('#valor');
        this.itensView.update(this.itens);
    }
    criarItem() {
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        let id = this.contador++;
        const item = new Item(this._item.value, quantidade, valor, id);
        this.adiciona(item);
        this.limparCampo();
        this.scrollBottom();
    }
    scrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }
    limparCampo() {
        this._item.value = '';
        this._quantidade.value = '';
        this._valor.value = '';
        this._item.focus();
    }
    adiciona(item) {
        this.itens.adiciona(item);
        this.atualizaView(item);
        this.mensagensView.update("Adicionado com sucesso");
    }
    remove() {
        const btnDelete = document.querySelectorAll('.btn-delete');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const buttonClicado = event.currentTarget;
                const itemId = buttonClicado.getAttribute('data-id');
                console.log(itemId);
                this.itens.remove(Number(itemId));
                this.itensView.update(this.itens);
                this.mensagensView.update("Item removido");
                this.atualizaView();
            });
        });
    }
    recomecar() {
        this.itens = new Itens();
        this.itensView.update(this.itens);
        this.mensagensView.update("Lista apagada");
    }
    atualizaView(itens) {
        this.itensView.update(this.itens);
        this.remove();
    }
}
