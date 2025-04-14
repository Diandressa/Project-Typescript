import { Itens } from "../model/itens.js";
import { Item } from "../model/item.js";

export class ItensView{
    protected elemento:HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)!;
    }

    protected template(model:Itens): string{
        return `
            <table class="table table-striped table-hover table-bordered border-secondary">
                <thead class="table-dark">
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    ${model.lista().map(item => {
                        return `
                        <tr>
                            <th>${item.getItem}</th>
                            <td>${item.getQuantidade}</td>
                            <td>${item.getValor}</td>
                        </tr>
                        `
                    })}
                </tbody>
                <tfoot>
                    <tr>
                    <th colspan="2">Total</th>
                    <td class="table-active">${this.total.getTotal}</td>
                    </tr>
                </tfoot>
            </table>
                
        `
    }

    public update(model:Itens):void{
        this.elemento.innerHTML = this.template(model)
    }
}