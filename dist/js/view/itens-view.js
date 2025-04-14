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
                        `;
        })}
                </tbody>
                <tfoot>
                    <tr>
                    <th colspan="2">Total</th>
                    <td class="table-active">${this.update}</td>
                    </tr>
                </tfoot>
            </table>
                
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
