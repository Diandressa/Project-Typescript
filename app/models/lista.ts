export class Lista {
    private _data:Date;
    private _nome:string;
    private _hora:string;

    constructor(data:Date, nome:string, hora:string){
        this._data = data;
        this._nome = nome;
        this._hora = hora;
    }

    get getData():Date{
        return new Date(this._data)
    }

    get getHora():string{
        return this._hora
    }

    get getNome():string{
        return this._nome;
    }
}

