export class ListaController {
    constructor(inputData, inputNome) {
        this.inputData = inputData;
        this.inputNome = inputNome;
    }
    criarLista() {
        console.log(this.inputData);
        console.log(this.inputNome);
    }
}
