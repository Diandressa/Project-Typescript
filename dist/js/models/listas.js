export class Listas {
    constructor() {
        this.listas = [];
    }
    adiciona(instanciaLista) {
        //adiciona no array listas
        this.listas.push(instanciaLista);
        console.log(this.listas);
    }
    //Leitura da lista, da cópia do array listas
    lerLista() {
        return [...this.listas];
    }
}
const listasArray = new Listas();
