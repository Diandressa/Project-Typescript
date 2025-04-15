export abstract class View<T>{
    protected elemento: HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)!;
    }

    protected abstract template(model:T):string;

    public abstract update(model:T):void;
}