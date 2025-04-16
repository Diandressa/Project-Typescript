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

    get getTotal(){
        return this._valor * this._quantidade;
    }

    set setItem(novoItem:string){
        this._item = novoItem;
    }

    set setQuantidade(novoValor:number){
        this._quantidade = novoValor;
    }

    set setValor(novoQuantidade:number){
        this._valor = novoQuantidade;
    }
}