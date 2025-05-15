export class Itens {
    constructor() {
        this.itens = [];
        this.somaAcumulado = 0;
        this.acumuladoFormatado = '';
    }
    adiciona(item) {
        this.itens.push(item);
        this.somaAcumulado = Math.round((this.somaAcumulado + item.getTotal) * 100) / 100;
        this.acumuladoFormatado = this.somaAcumulado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    remove(id) {
        // Encontrar o id passado na nossa lista
        const itemRemovido = this.itens.find(item => item.getId === id);
        //Se encontrar ele remove da soma e da lista, se não encontrar não faz nada
        if (itemRemovido) {
            // Subtrair o total do item removido de somaAcumulado
            this.somaAcumulado -= itemRemovido.getTotal;
            this.acumuladoFormatado = this.somaAcumulado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            // Remover o item da lista
            this.itens = this.itens.filter(item => item.getId !== id);
        }
    }
    lista() {
        return [...this.itens];
    }
}
