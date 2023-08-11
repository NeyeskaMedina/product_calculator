//Declaro mis funciones
function calcula_total(){
    let total = Number(quantity.value) * fPrice;
    eTotal.innerHTML = total;
    eQuantity.innerHTML = quantity.value;
    eColor.style.backgroundColor = color.value;
}