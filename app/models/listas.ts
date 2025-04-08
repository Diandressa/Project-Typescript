import { Lista } from "./lista";

export class Listas {
    private listas:Lista[] = [];

    adiciona(instanciaLista:Lista):void{
        //adiciona no array listas
        this.listas.push(instanciaLista);
        console.log(this.listas)
    }
    	
    //Leitura da lista, da cópia do array listas
    lerLista(): readonly Lista[]{
        return [...this.listas]
    }
}

const listasArray = new Listas();