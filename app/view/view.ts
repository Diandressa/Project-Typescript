export abstract class View<T>{
    protected elemento: HTMLElement;
    protected totalView: HTMLElement;

    constructor(seletor:string, total:string){
        this.elemento = document.querySelector(seletor)!;
        this.totalView = document.querySelector(total)!;
    }

    protected abstract template(model:T):string;

    public abstract update(model:T):void;
}