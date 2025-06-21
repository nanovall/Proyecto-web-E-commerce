export function mostrarCompraExitosa(productos) {
  if (document.querySelector("#compra-exitosa")) return;

  const overlay = document.createElement("div");
  overlay.id = "compra-exitosa";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.backdropFilter = "blur(5px)";
  overlay.style.webkitBackdropFilter = "blur(5px)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "2000";

  const modal = document.createElement("div");
  modal.style.backgroundColor = "white";
  modal.style.borderRadius = "10px";
  modal.style.padding = "2rem";
  modal.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  modal.style.maxWidth = "400px";
  modal.style.textAlign = "center";

  const productosTexto = productos.map((p) => `• ${p.title}`).join("<br>");

  modal.innerHTML = `
    <h4>✔ Compra realizada con éxito</h4>
    <p>Los siguientes productos fueron comprados:</p>
    <div style="text-align:left;margin:1rem 0;">${productosTexto}</div>
    <button id="cerrar-exito" class="btn btn-success">Aceptar</button>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  document.querySelector("#cerrar-exito").addEventListener("click", () => {
    overlay.remove();
  });
}
