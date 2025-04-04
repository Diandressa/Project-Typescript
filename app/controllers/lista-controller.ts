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
        const data = new Date(this.dataInput.value + 'T00:00:00').toLocaleDateString('pt-BR', {timeZone: 'America/Sao_Paulo'});
        console.log(data)
        console.log(this.horaInput.value)
        console.log(this.nomeInput.value)

        this.listasArray.adiciona()

        this.requiredForm(this.nomeInput.value)

        return new Lista(data, this.horaInput.value,this.nomeInput.value)
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





