export function filtrarProductos(texto, productos) {
  if (texto === "") return productos;
  return productos.filter((prod) =>
    prod.title.toLowerCase().includes(texto.toLowerCase())
  );
}
