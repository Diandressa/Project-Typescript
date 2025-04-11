export class Item {
    private _item:string;
    private _quantidade:number;
    private _valor:number;

    constructor(item:string, quantidade:number, valor:number){
        this._item = item;
        this._quantidade = quantidade;
        this._valor = valor
    }

    get getItem(){
        return this._item;
    }
    get getQuantidade(){
        return this._quantidade;
    }
    get getValor(){
        return this._valor;
    }
}