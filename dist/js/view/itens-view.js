export class ItensView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                                <input type="text" class="form-control tablevalue" value=${item.getItem} >
                            </th>
                            <td>
                                <input type="text" class="form-control tablevalue" value=${item.getQuantidade} > 
                            </td>
                            <td>
                                <input type="text" class="form-control tablevalue" value=${item.getValor} >
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
}
