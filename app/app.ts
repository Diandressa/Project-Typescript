import { ItemController } from "./controller/item-controller.js";

const itemController = new ItemController();
const form = document.querySelector('form')!;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    itemController.adiciona();
})




