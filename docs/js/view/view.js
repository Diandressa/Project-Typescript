export class View {
    constructor(seletor, total) {
        this.elemento = document.querySelector(seletor);
        this.totalView = document.querySelector(total);
    }
}
