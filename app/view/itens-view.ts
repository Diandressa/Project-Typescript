import { ItemController } from "../controller/item-controller.js";
import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { View } from "./view.js";

export class ItensView extends View<Itens>{

    protected template(model:Itens): string{
        return `
            <table class="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Total item</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="table table-group-divider table-striped-columns">
                    ${model.lista().map(item => {
                        return `
                        <tr>
                            <th>
                                ${item.getItem} 
                            </th>
                            <td>
                                ${item.getQuantidade} 
                            </td>
                            <td>
                                ${item.getValor} 
                            </td>
                            <td>R$ ${item.getTotalFormatado}</td>
                            <td>
                                <button class="btn btn-delete" data-id="${item.getId}"><i class="bi bi-trash3-fill text-danger"></i></button>
                            </td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
                <tfoot>
                    <tr class="table-success">
                    <th colspan="4">Total</th>
                    <td class="table-active">${model.acumuladoFormatado}</td>
                    </tr>
                </tfoot>
            </table>
                
        `
    }

    protected total(model:Itens):string{
        return `
            Total: ${model.acumuladoFormatado}
        `
    }

    public update(model:Itens):void{
        this.elemento.innerHTML = this.template(model)
        this.totalView.innerHTML = this.total(model)
    }      
}