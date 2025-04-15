export class MensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
            <span class="alert alert-info">${model}</span>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
        this.elemento.classList.remove('fade-out');
        setTimeout(() => {
            this.elemento.classList.add('fade-out');
            this.elemento.addEventListener("transitionend", () => {
                this.elemento.innerHTML = '';
            });
        }, 2000);
    }
}
