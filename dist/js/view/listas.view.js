export class ListasView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(listasArray) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Lista</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    ${listasArray.lerLista().map(item => {
            return `
                        <td>${item.getNome}</td>
                        <td>${new Intl.DateTimeFormat().format(item.getData)}</td>
                        <td>${item.getHora}</td>
                        `;
        })}
                </tbody>
            </table>
        `;
    }
    update(listasArray) {
        this.elemento.innerHTML = this.template(listasArray);
        console.log(listasArray);
    }
}
