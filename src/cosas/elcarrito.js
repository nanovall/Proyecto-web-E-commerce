export function guardarEnCarrito(p) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  validarpEnCarrito(carrito, p);
  guardarEnLocalStorage(carrito);
}

export function validarpEnCarrito(carrito, p) {
  let existeproducto = carrito.findIndex((item) => item.id === p.id);
  if (existeproducto !== -1) {
    carrito[existeproducto].cantidad += 1;
  } else {
    p.cantidad = 1;
    carrito.push(p);
  }
}

function guardarEnLocalStorage(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
