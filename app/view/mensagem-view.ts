import { View } from "./view.js"
export class MensagemView extends View<string>{

    public template(model:string):string{
        return `
            <span class="alert alert-info">${model}</span>
        `
    }

    public update(model:string):void{
        this.elemento.innerHTML = this.template(model)
        this.elemento.classList.remove('fade-out')

        setTimeout(() => {
            this.elemento.classList.add('fade-out')

            this.elemento.addEventListener("transitionend", () => {
                this.elemento.innerHTML = ''
            })
        }, 2000)
    }
}