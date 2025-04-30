import { ItemController } from "../controller/item-controller.js";
import { Item } from "../model/item.js";
import { Itens } from "../model/itens.js";
import { View } from "./view.js";

export class ItensView extends View<Itens>{

    protected template(model:Itens): string{
        return `
            <table class="table table-striped table-hover table-bordered border-secondary">
                <thead class="table-dark">
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Total item</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
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
                            <td>${item.getTotal}</td>
                            <td>
                                <button class="btn btn-delete" data-id="${item.getId}"><i class="bi bi-trash3-fill text-danger"></i></button>
                            </td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
                <tfoot>
                    <tr>
                    <th colspan="3">Total</th>
                    <td class="table-active">${model.somaAcumulado}</td>
                    </tr>
                </tfoot>
            </table>
                
        `
    }

    public update(model:Itens):void{
        this.elemento.innerHTML = this.template(model)
    }      
}