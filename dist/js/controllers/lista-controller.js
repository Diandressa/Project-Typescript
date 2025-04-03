export class ListaController {
    constructor() {
        this.dataInput = document.querySelector("#data");
        this.nomeInput = document.querySelector("#nome");
    }
    criarLista() {
        const data = new Date(this.dataInput.value).toLocaleDateString('pt-BR');
        console.log(data);
        console.log(this.nomeInput.value);
    }
}
