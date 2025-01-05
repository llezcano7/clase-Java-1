// Desarrollar un programa en JavaScript que permita calcular el descuento aplicado a una compra 
// según el monto total y la categoría del cliente (Regular o VIP). 
// Finalmente, muestra el monto final a pagar y un texto que indique el descuento aplicado.

// Reglas de descuento:
// - Si el cliente es "Regular" y gasta menos de $50, no tiene descuento.
// - Si el cliente es "Regular" y gasta entre $50 (inclusive) y $100, tiene un 5% de descuento.
// - Si el cliente es "Regular" y gasta más de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta menos de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta $100 o más, tiene un 20% de descuento.

let cliente1 = "regular";
let cliente2= "vip";

let gasto1= 50;
let gasto2= 100

let descuento1 = 5;
let descuento2 = 10;
let descuento3 = 20;

if  (cliente1 < gasto1) {
   alert ("no tiene descuento")
} else if (cliente1 >= gasto1 && cliente1 <= gasto2) {
    alert ("tiene un 5% de descuento")
}
else if (cliente > gasto2) {
    alert ("tiene un 10% de descuento")
}

//CLIENTE VIP

if (cliente2 < gasto2) {
    alert ("tiene 10% de descuento")
} else if (cliente2 >= gasto2) {
 alert ("tiene un 20% de descuento")
} 
