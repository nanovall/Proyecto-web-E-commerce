import { getProducts } from "../api/api.js";
import { createModal } from "./modal.js";

export function createCards() {
  let containerCards = document.querySelector("#list-products");
  
  getProducts().then((data) => {


window.losdetalles = (p) => {
  createModal(p); 
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
};

   data.forEach((p) => {
        let template = `<div class="col">
                          <div class="card">
                            <img src="${p.image}" class="card-img-top" alt="${p.title}">
                              <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <h5 class="card-title">${p.price}</h5>
                                <p class="card-text">Acá van los detalles posho</p>
                                <button type="button" class="btn btn-primary" onclick='losdetalles(${JSON.stringify(p)})' id="${p.id}"> Más Detalles </button>
                              </div>
                          </div>
                        </div>`;
      containerCards.innerHTML += template;
  });
});

}

