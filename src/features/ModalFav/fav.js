const STORAGE_KEY = "favoritos";

export function getFavoritos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function toggleFavorito(producto) {
  const favs = getFavoritos();
  const exists = favs.some(p => p.id === producto.id);
  const nuevos = exists
    ? favs.filter(p => p.id !== producto.id)
    : [...favs, producto];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevos));
  renderBoton(producto.id);
}

export function renderBoton(productId) {
    const btn = document.getElementById(`fav-${productId}`);
    if (!btn) return;
    const isFav = getFavoritos().some(p => p.id === productId);
    // icono
    btn.textContent = isFav ? '♥' : '♡';
    // clase para cambiar color
    btn.classList.toggle('favorited', isFav);
  }

export function renderFavoritosModal() {
  const favs = getFavoritos();
  const modalEl = document.getElementById("exampleModal");

  // Construye el body
  const bodyContent = favs.length
    ? favs.map(p => `
      <div class="fav-item d-flex align-items-center mb-3">
        <img src="${p.image}" alt="${p.title}"
             class="me-3 rounded" style="width:60px;height:60px;object-fit:cover;">
        <div class="flex-grow-1">
          <h5>${p.title}</h5>
        </div>
        <button type="button"
                class="btn-close text-danger btn-remove-fav"
                aria-label="Quitar"
                data-id="${p.id}"></button>
      </div>
    `).join("")
    : "<p>No hay favoritos aún.</p>";

  // Inyecta el markup del modal
  modalEl.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Mis Favoritos</h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          ${bodyContent}
        </div>
      </div>
    </div>
  `;

  // Listeners para los “×” de quitar favorito
  modalEl
    .querySelectorAll(".btn-remove-fav")
    .forEach(btn =>
      btn.addEventListener("click", e => {
        const id = Number(e.currentTarget.dataset.id);
        toggleFavorito({ id });
        renderFavoritosModal();
      })
    );

  // Muestra el modal
  new bootstrap.Modal(modalEl).show();
}

export function initFavoritos() {
  // 1) Botón global que abre el modal
  document
    .getElementById("open-fav-modal")
    ?.addEventListener("click", renderFavoritosModal);

  // 2) Pinta el estado inicial de cada estrella
  getFavoritos().forEach(p => renderBoton(p.id));
}
