import { getProducts } from "../api/api.js";
import { createModal } from "./modal.js";

let containerCards = document.querySelector("#list-products");

export function renderCards(data) {
  containerCards.innerHTML = ""; // Limpiar antes de pintar

  data.forEach((p) => {
    let template = `
      <div class="col">
        <div class="card">
          <img src="${p.image}" class="card-img-top" alt="${p.title}">
          <div class="card-body">
            <h5 class="card-title text-truncate">${p.title}</h5>
            <p class="card-text">Acá van los detalles posho</p>
            <button type="button" class="btn btn-primary" onclick='losdetalles(${p.id})' id="${p.id}">
              Más Detalles
            </button>
          </div>
        </div>
      </div>`;
    containerCards.innerHTML += template;
  });
}

export function createCards() {
  getProducts().then((data) => {
    localStorage.setItem("productos", JSON.stringify(data));

    window.losdetalles = (id) => {
      const productos = JSON.parse(localStorage.getItem("productos")) || [];
      const p = productos.find((prod) => prod.id === id);
      if (p) {
        createModal(p);
        const modal = new bootstrap.Modal(
          document.getElementById("exampleModal")
        );
        modal.show();
      }
    };

    renderCards(data); // Pintar todos al inicio
  });
}
