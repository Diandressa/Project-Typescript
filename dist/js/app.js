import { ListaController } from "./controllers/lista-controller.js";
const controller = new ListaController();
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.criarLista();
});
