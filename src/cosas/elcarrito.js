import { crearSeccionCarrito } from "./carritocompra.js";

export function guardarEnCarrito(p) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  validarpEnCarrito(carrito, p);
  guardarEnLocalStorage(carrito);
  crearSeccionCarrito(carrito);
}

export function validarpEnCarrito(carrito, p) {
  const index = carrito.findIndex((item) => item.id === p.id);
  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    p.cantidad = 1;
    carrito.push(p);
  }
}

// Permitir que otras funciones del navegador lo usen
window.cambiarCantidad = (id, cambio) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  const index = carrito.findIndex((p) => p.id === id);
  if (index !== -1) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad < 1) {
      carrito.splice(index, 1);
    }
    guardarEnLocalStorage(carrito);
    crearSeccionCarrito(carrito);
  }
};

window.eliminarProducto = (id) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = carrito.filter((p) => p.id !== id);
  guardarEnLocalStorage(carrito);
  crearSeccionCarrito(carrito);
};

function guardarEnLocalStorage(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Para recargar desde otros archivos si se necesita
export function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  crearSeccionCarrito(carrito);
}
