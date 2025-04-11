import { Item } from "./item.js";

export class Items{
    private items:Item[] = []

    adiciona(item:Item){
        this.items.push(item)
        console.log(this.items)
    }
    
}