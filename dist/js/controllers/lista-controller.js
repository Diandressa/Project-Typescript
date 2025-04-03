import { Lista } from "../models/lista.js";
export class ListaController {
    constructor() {
        this.data = document.getElementById("#data");
        this.nome = document.querySelector("#nome");
    }
    criarLista() {
        console.log(new Lista(new Date(), "Andressa"));
        return new Lista(new Date(), "Andressa");
    }
}
