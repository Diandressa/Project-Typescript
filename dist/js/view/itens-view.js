import { View } from "./view.js";
export class ItensView extends View {
    template(model) {
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
                                R$ ${item.getValor} 
                            </td>
                            <td>R$ ${item.getTotal}</td>
                            <td>
                                <button class="btn btn-delete" data-id="${item.getId}"><i class="bi bi-trash3-fill text-danger"></i></button>
                            </td>
                        </tr>
                        `;
        }).join('')}
                </tbody>
                <tfoot>
                    <tr class="table-success">
                    <th colspan="3">Total</th>
                    <td class="table-active">R$ ${model.somaAcumulado}</td>
                    <th></th>
                    </tr>
                </tfoot>
            </table>
                
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
