import { createCards } from "./cards.js";

//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));
createCards();












