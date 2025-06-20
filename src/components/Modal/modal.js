import { guardarEnCarrito } from "../../features/elcarrito.js";


export function createModal(p) {
  let containerModal = document.querySelector("#exampleModal");

  window.guardarEnCarrito = (id) => {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const prod = productos.find((item) => item.id === id);
    if (prod) {
      guardarEnCarrito(prod);
      mostrarToast("Producto agregado al carrito");
    }
  };

  let template = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${p.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <img src="${p.image}" class="img-fluid mb-3" alt="${p.title}" />
          <p>${p.description}</p>
          <p><strong>Precio:</strong> $${p.price}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick='guardarEnCarrito(${p.id})'>
            <span><i class="bi bi-basket3"></i></span> Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;

  containerModal.innerHTML = template;
}

export function mostrarToast(mensaje) {
  const toastContainer = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className = "toast align-items-center text-white bg-success border-0";
  toast.role = "alert";
  toast.ariaLive = "assertive";
  toast.ariaAtomic = "true";
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${mensaje}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toast);

  const bsToast = new bootstrap.Toast(toast, { delay: 2000 });
  bsToast.show();

  // Eliminamos el toast del DOM cuando termina
  toast.addEventListener('hidden.bs.toast', () => toast.remove());
}
