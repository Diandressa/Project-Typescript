import { Listas } from "../models/listas"

export class ListasView {
    private elemento:HTMLElement

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor) as HTMLElement
    }

    template(listasArray:Listas):string{
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
                        `
                    })}
                </tbody>
            </table>
        `
    }

    update(listasArray:Listas):void{
        this.elemento.innerHTML = this.template(listasArray)
        console.log(listasArray)
    }
}