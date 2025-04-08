export class Lista {
    constructor(data, nome, hora) {
        this._data = data;
        this._nome = nome;
        this._hora = hora;
    }
    get getData() {
        return new Date(this._data);
    }
    get getHora() {
        return this._hora;
    }
    get getNome() {
        return this._nome;
    }
}
