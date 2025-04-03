import { Lista } from "../models/lista.js";

export class ListaController {
    dataInput:HTMLInputElement
    nomeInput:HTMLInputElement

    constructor(){
        this.dataInput = document.querySelector("#data") as HTMLInputElement;
        this.nomeInput = document.querySelector("#nome") as HTMLInputElement;
    }

    criarLista(){
        const data = new Date(this.dataInput.value).toLocaleDateString('pt-BR');
        console.log(data)
        console.log(this.nomeInput.value)
    }

}





