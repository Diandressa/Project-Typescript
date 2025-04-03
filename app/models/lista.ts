export class Lista {
    private _data:Date;
    private _nome:string;

    constructor(data:Date, nome:string){
        this._data = data;
        this._nome = nome;
    }

    get getData():Date{
        return new Date(this._data)
    }

    get getNome():string{
        return this._nome;
    }
}

