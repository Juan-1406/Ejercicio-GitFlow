const assert = require("assert");
const { calcularTotal, calcularPrecioFinal } = require("../src/descuentos");

assert.strictEqual(calcularTotal(100, 20), 80);
assert.strictEqual(calcularTotal(50, 0), 50);


assert.strictEqual(calcularPrecioFinal(10000, "estudiante"), 8500);
assert.strictEqual(calcularPrecioFinal(20000, "normal"), 20000);
assert.strictEqual(calcularPrecioFinal(15000, "estudiante"), 12750);

console.log("Tests ejecutados correctamente");
