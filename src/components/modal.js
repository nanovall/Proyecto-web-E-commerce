export function createModal(p) {
    let containerModal = document.querySelector('#exampleModal');

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
          <button type="button" class="btn btn-primary">Agregar al carrito</button>
        </div>

      </div>
    </div>
  `;

  containerModal.innerHTML = template;
}
