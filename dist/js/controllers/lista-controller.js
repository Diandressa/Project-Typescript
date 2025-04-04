export class ListaController {
    constructor() {
        this.dataInput = document.querySelector("#data");
        this.nomeInput = document.querySelector("#nome");
        this.horaInput = document.querySelector("#hora");
    }
    criarLista() {
        const data = new Date(this.dataInput.value + 'T00:00:00').toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        console.log(data);
        console.log(this.horaInput.value);
        console.log(this.nomeInput.value);
        this.requiredForm(this.nomeInput.value);
    }
    requiredForm(nome) {
        const label = this.nomeInput.previousElementSibling;
        if (!nome) {
            label.classList.add("invalid");
        }
        this.nomeInput.addEventListener("input", () => {
            label.classList.remove("invalid");
        });
    }
}
