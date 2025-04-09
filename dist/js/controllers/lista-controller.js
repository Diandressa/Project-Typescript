import { Lista } from "../models/lista.js";
import { Listas } from "../models/listas.js";
import { ListasView } from "../view/listas.view.js";
export class ListaController {
    constructor() {
        this.listasArray = new Listas;
        this.listasView = new ListasView("#listasView");
        this.dataInput = document.querySelector("#data");
        this.nomeInput = document.querySelector("#nome");
        this.horaInput = document.querySelector("#hora");
        this.listasView.update(this.listasArray);
    }
    criarLista() {
        const data = new Date(this.dataInput.value + 'T00:00:00');
        const instanciaLista = new Lista(data, this.nomeInput.value, this.horaInput.value);
        this.listasArray.adiciona(instanciaLista);
        this.listasView.update(this.listasArray);
        this.limparForm();
    }
    limparForm() {
        this.nomeInput.value = '';
        this.dataInput.value = '';
        this.horaInput.value = '';
        this.nomeInput.focus();
    }
}
