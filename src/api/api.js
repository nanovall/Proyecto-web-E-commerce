export function getProducts() {
    let resultados = fetch('https://web-api-products.runasp.net/api/Products')
    .then(res=>res.json())
    .then((data)=>data);

    return resultados
}