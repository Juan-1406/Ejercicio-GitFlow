function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

function calcularPrecioFinal(precio, tipoCliente) {
  let descuento = 0;
  
  if (tipoCliente === "estudiante") {
    descuento = precio * 0.15;
  }
  return calcularTotal(precio, descuento);
}

module.exports = { calcularTotal, calcularPrecioFinal };
