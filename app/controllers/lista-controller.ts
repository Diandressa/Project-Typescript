import { Lista } from "../models/lista.js";

export class ListaController {
    data:HTMLInputElement
    nome:HTMLInputElement

    constructor(){
        this.data = document.getElementById("#data");
        this.nome = document.querySelector("#nome");
    }

    criarLista(){
        console.log(this.data.value)
        console.log(new Lista(new Date(), "Andressa"))
        return new Lista(new Date(), "Andressa")
    }

}





