// src/components/Cards/cards.js

import { getProducts } from "../../api/api.js";
import { createModal } from "../Modal/modal.js";
import {
  toggleFavorito,
  renderBoton,
  initFavoritos,
} from "../../features/ModalFav/fav.js";

const containerCards = document.querySelector("#list-products");

export function renderCards(data) {
  containerCards.innerHTML = "";

  data.forEach(p => {
    const tpl = `
      <div class="col">
        <div class="card">
          <img src="${p.image}" class="card-img-top" alt="${p.title}">
          <div class="card-body">
            <div class="card-body-header">
              <h5 class="card-title text-truncate">${p.title}</h5>
              <button id="fav-${p.id}" class="btn-fav-card">♡</button>
            </div>
            <p class="card-text">${p.description}</p>
            <!-- Botón favorito -->
            <!-- Botón detalles / modal -->
            <button type="button"
                    class="btn btn-primary"
                    onclick="losdetalles(${p.id})"
                    id="${p.id}">
              Más Detalles
            </button>
          </div>
        </div>
      </div>
    `;
    containerCards.insertAdjacentHTML("beforeend", tpl);

    const favBtn = document.getElementById(`fav-${p.id}`);
    favBtn.addEventListener("click", () => toggleFavorito(p));
  });

  initFavoritos();
}

export function createCards() {
  getProducts().then(data => {
    localStorage.setItem("productos", JSON.stringify(data));

    window.losdetalles = id => {
      const productos = JSON.parse(localStorage.getItem("productos")) || [];
      const prod = productos.find(item => item.id === id);
      if (prod) {
        createModal(prod);
        new bootstrap.Modal(document.getElementById("exampleModal")).show();
      }
    };

    renderCards(data);
  });
}
