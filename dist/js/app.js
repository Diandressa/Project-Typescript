import { ItemController } from "./controller/item-controller.js";
const itemController = new ItemController();
const form = document.querySelector('form');
const recomecar = document.querySelector('#recomecar');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    itemController.criarItem();
});
recomecar.addEventListener('click', () => {
    itemController.recomecar();
});
