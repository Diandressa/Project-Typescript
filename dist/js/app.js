import { ListaController } from "./controllers/lista-controller.js";
const controller = new ListaController(new Date(), "Andressa");
controller.criarLista();
const form = document.querySelector(".form");
console.log(form);
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     controller.criarLista()
// })
