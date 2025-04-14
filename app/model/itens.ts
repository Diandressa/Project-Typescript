import { Item } from "./item.js";

export class Itens{
    private itens:Item[] = []

    public adiciona(item:Item){
        this.itens.push(item)
    }

    public lista(): readonly Item[]{
        return [... this.itens];
    }
    
}