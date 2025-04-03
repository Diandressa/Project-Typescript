import { Lista } from "../models/lista.js";

export class ListaController {
    private inputData:Date 
    private inputNome:string

    constructor(inputData:Date, inputNome:string){
        this.inputData = inputData
        this.inputNome = inputNome
    }

    criarLista():void{
        console.log(this.inputData)
        console.log(this.inputNome)
    }

}





