import { createCards } from "./components/cards.js";


//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));

createCards();












