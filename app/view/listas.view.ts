import { Listas } from "../models/listas"

export class ListasView {
    private elemento:HTMLElement

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor) as HTMLElement
    }

    template(listasArray:Listas):string{
        return `
            <table class="table table-hover table-striped table-bordered">
                <thead class="text-bold">
                    <tr>
                        <th>Lista</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    ${listasArray.lerLista().map(item => {
                        return `
                        <tr>
                            <td>${item.getNome}</td>
                            <td>${new Intl.DateTimeFormat().format(item.getData)}</td>
                            <td>${item.getHora}</td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    update(listasArray:Listas):void{
        this.elemento.innerHTML = this.template(listasArray)
        console.log(listasArray)
    }
}