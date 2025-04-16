import { View } from "./view.js";
export class ItensView extends View {
    template(model, total) {
        return `
            <table class="table table-striped table-hover table-bordered border-secondary">
                <thead class="table-dark">
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Total item</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    ${model.lista().map(item => {
            return `
                        <tr>
                            <th>
                                <input type="text" class="form-control item setvalor" value=${item.getItem} >
                            </th>
                            <td>
                                <input type="number" class="form-control quantidade setvalor" value=${item.getQuantidade} > 
                            </td>
                            <td>
                                <input type="number" class="form-control valor setvalor" value=${item.getValor} >
                            </td>
                            <td>${item.getTotal}</td>
                        </tr>
                        `;
        }).join('')}
                </tbody>
                <tfoot>
                    <tr>
                    <th colspan="3">Total</th>
                    <td class="table-active">${model.somaAcumulado}</td>
                    </tr>
                </tfoot>
            </table>
                
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    valorItem(item, model) {
        const quantidade = document.querySelector('.quantidade');
        quantidade.addEventListener('keyup', (event) => {
            item.setQuantidade = Number(quantidade.value);
            console.log(item.getTotal);
        });
        const valor = document.querySelector('.valor');
        valor.addEventListener('keyup', (event) => {
            item.setValor = Number(valor.value);
            console.log(item.getTotal);
        });
    }
}
