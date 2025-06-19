import { createCards, renderCards } from './components/Cards/cards.js';
import { crearSeccionCarrito } from "./cosas/carritocompra.js";
import { filtrarProductos } from "./cosas/filtrado.js";

// Inicializar carrito si no existe
if (!localStorage.getItem("carrito")) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

// Render productos y carrito
createCards();
crearSeccionCarrito(JSON.parse(localStorage.getItem("carrito")));

// Filtro en tiempo real
document.querySelector("#filter").addEventListener("input", (e) => {
  const texto = e.target.value;
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  const filtrados = filtrarProductos(texto, productos);
  renderCards(filtrados);
});
