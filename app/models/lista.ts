export class Lista {
    private _data:Date;
    private _nome:string;

    constructor(data:Date, nome:string){
        this._data = data;
        this._nome = nome;
    }

    get data():Date{
        return this._data;
    }

    get nome():string{
        return this._nome;
    }
}

