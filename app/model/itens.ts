import { Item } from "./item.js";

export class Itens{
    private itens:Item[] = []
    public somaAcumulado:number = 0;

    public adiciona(item:Item){
        this.itens.push(item)
        this.somaAcumulado = this.somaAcumulado + item.getTotal;
    }

    public lista(): readonly Item[]{
        return [... this.itens];
    }
    
}