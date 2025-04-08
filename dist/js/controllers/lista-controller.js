import { Lista } from "../models/lista.js";
import { Listas } from "../models/listas.js";
export class ListaController {
    constructor() {
        this.listasArray = new Listas;
        this.dataInput = document.querySelector("#data");
        this.nomeInput = document.querySelector("#nome");
        this.horaInput = document.querySelector("#hora");
    }
    criarLista() {
        const data = new Date(this.dataInput.value + 'T00:00:00');
        console.log(data);
        console.log(this.horaInput.value);
        console.log(this.nomeInput.value);
        this.requiredForm(this.nomeInput.value);
        const instanciaLista = new Lista(data, this.nomeInput.value, this.horaInput.value);
        this.listasArray.adiciona(instanciaLista);
    }
    requiredForm(nome) {
        const label = this.nomeInput.previousElementSibling;
        if (!nome) {
            label.classList.add("invalid");
        }
        this.nomeInput.addEventListener("input", () => {
            label.classList.remove("invalid");
        });
    }
}
