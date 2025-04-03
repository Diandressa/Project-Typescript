
import { ListaController } from "./controllers/lista-controller.js";

const controller = new ListaController();
controller.criarLista();


const form = document.querySelector('form')!;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.criarLista()
})




