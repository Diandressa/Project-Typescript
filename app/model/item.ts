export class Item {
    private _item:string;
    private _quantidade:number;
    private _valor:number;
    private _id:number;

    constructor(item:string, quantidade:number, valor:number, id:number){
        this._item = item;
        this._quantidade = quantidade;
        this._valor = valor;
        this._id = id;
    }

    get getId(){
        return this._id;
    }
    get getItem(){
        return this._item;
    }
    get getQuantidade(){
        return this._quantidade;
    }
    get getValor(){
        return this._valor.toLocaleString('pt-BR',  {style:'currency', currency: 'BRL'});
    }

    get getTotal(){
        return this._valor * this._quantidade;
    }

    get getTotalFormatado(){
        return (this._valor * this._quantidade).toLocaleString('pt-BR',  {style:'currency', currency: 'BRL'});
    }
}