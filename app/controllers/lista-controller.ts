import { Lista } from "../models/lista.js";
import { Listas } from "../models/listas.js";

export class ListaController {
    dataInput:HTMLInputElement
    nomeInput:HTMLInputElement
    horaInput:HTMLInputElement
    private listasArray = new Listas;

    constructor(){
        this.dataInput = document.querySelector("#data") as HTMLInputElement;
        this.nomeInput = document.querySelector("#nome") as HTMLInputElement;
        this.horaInput = document.querySelector("#hora") as HTMLInputElement;
    }

    criarLista():void{
        const data = new Date(this.dataInput.value + 'T00:00:00');
        console.log(data)
        console.log(this.horaInput.value)
        console.log(this.nomeInput.value)

        this.requiredForm(this.nomeInput.value)

        const instanciaLista = new Lista(data,this.nomeInput.value, this.horaInput.value)

        this.listasArray.adiciona(instanciaLista)
    }

    requiredForm(nome: string):void{
        const label = this.nomeInput.previousElementSibling!;

        if(!nome){
            label.classList.add("invalid");
        }

        this.nomeInput.addEventListener("input", ()=>{
            label.classList.remove("invalid")
        })
    }

}





