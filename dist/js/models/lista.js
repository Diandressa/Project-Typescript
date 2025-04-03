export class Lista {
    constructor(data, nome) {
        this._data = data;
        this._nome = nome;
    }
    get getData() {
        return new Date(this._data);
    }
    get getNome() {
        return this._nome;
    }
}
