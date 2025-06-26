import { createCards, renderCards } from './components/Cards/cards.js';
import { crearSeccionCarrito } from "./features/carritocompra.js";
import { filtrarProductos } from "./features/filtrado.js";

if (!localStorage.getItem("carrito")) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

createCards();
crearSeccionCarrito(JSON.parse(localStorage.getItem("carrito")));

document.querySelector("#filter").addEventListener("input", (e) => {
  const texto = e.target.value;
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  const filtrados = filtrarProductos(texto, productos);
  renderCards(filtrados);
});
