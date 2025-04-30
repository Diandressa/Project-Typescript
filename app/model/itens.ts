import { Item } from "./item.js";

export class Itens{
    private itens:Item[] = []
    public somaAcumulado:number = 0;

    public adiciona(item:Item){
        this.itens.push(item)
        this.somaAcumulado = this.somaAcumulado + item.getTotal;
    }

    public remove(id:number):void{
        // Encontrar o id passado na nossa lista
        const itemRemovido = this.itens.find(item => item.getId === id);

        //Se encontrar ele remove da soma e da lista, se não encontrar não faz nada
        if (itemRemovido) {
            // Subtrair o total do item removido de somaAcumulado
            this.somaAcumulado -= itemRemovido.getTotal;
            
            // Remover o item da lista
            this.itens = this.itens.filter(item => item.getId !== id);
        }
    }

    public lista(): readonly Item[]{
        return [... this.itens];
    }
    
}