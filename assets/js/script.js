// Declaro las variables

let quantity = document.querySelector('#iQuantity');
let color = document.querySelector('#iColor');
let price = document.querySelector('#sPrice');
let eTotal = document.querySelector('#sTotaled');
let eQuantity = document.querySelector('#sQuantity');
let eColor = document.querySelector('#iColors');

const fPrice = 785999;

// Escucho evento Click y llamo a mi funcion

document.getElementById("iCalcula").addEventListener("click", () => {
    calcula_total();
});

