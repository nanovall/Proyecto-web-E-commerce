import { crearSeccionCarrito } from "./carritocompra.js";
import { mostrarCompraExitosa } from "./compraExitosa.js";

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

export function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  crearSeccionCarrito(carrito);
}

window.finalizarCompra = function () {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length === 0) return;

  mostrarCompraExitosa(carrito);
  localStorage.removeItem("carrito");
  actualizarCarrito([]);
};

window.eliminarTodoElCarrito = function () {
  Swal.fire({
    title: 'Esta a punto de vaciar el carrito',
    text: '¿Seguro que querés eliminar todos los productos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
      actualizarCarrito();
      Swal.fire({
        title: 'Carrito vaciado',
        text: 'Todos los productos han sido eliminados.',
        icon: 'success'
      });
    }
  });
};
