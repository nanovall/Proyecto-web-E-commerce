import { actualizarCarrito } from "./elcarrito.js";

export function crearSeccionCarrito(carrito) {
  const container = document.querySelector(".offcanvas-body");
  container.innerHTML = "";

  carrito.forEach((producto, index) => {
    let template = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${producto.image}" class="img-fluid rounded-start" alt="${
      producto.title
    }">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.title}</h5>
              <p class="card-text"><strong>Precio:</strong> $${(
                producto.price * producto.cantidad
              ).toFixed(2)}</p>
              <div class="d-flex align-items-center gap-2 mb-2">
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${
                  producto.id
                }, -1)">-</button>
                <span>${producto.cantidad}</span>
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${
                  producto.id
                }, 1)">+</button>
                <button class="btn btn-sm btn-outline-danger ms-auto" onclick="eliminarProducto(${
                  producto.id
                })">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += template;
  });
}
