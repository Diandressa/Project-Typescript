import { Lista } from "../models/lista.js";
import { Listas } from "../models/listas.js";
import { ListasView } from "../view/listas.view.js";

export class ListaController {
    dataInput:HTMLInputElement
    nomeInput:HTMLInputElement
    horaInput:HTMLInputElement
    private listasArray = new Listas;
    listasView = new ListasView("#listasView")

    constructor(){
        this.dataInput = document.querySelector("#data") as HTMLInputElement;
        this.nomeInput = document.querySelector("#nome") as HTMLInputElement;
        this.horaInput = document.querySelector("#hora") as HTMLInputElement;
        this.listasView.update(this.listasArray)
    }

    criarLista():void{
        const data = new Date(this.dataInput.value + 'T00:00:00');

        const instanciaLista = new Lista(data,this.nomeInput.value, this.horaInput.value)

        this.listasArray.adiciona(instanciaLista)

        this.listasView.update(this.listasArray)

        this.limparForm();
        
    }

    limparForm():void{
        this.nomeInput.value = ''
        this.dataInput.value = ''
        this.horaInput.value = ''
        this.nomeInput.focus();
    }

}





