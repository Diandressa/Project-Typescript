export class Lista {
    constructor(data, nome) {
        this._data = data;
        this._nome = nome;
    }
    get data() {
        return this._data;
    }
    get nome() {
        return this._nome;
    }
}
