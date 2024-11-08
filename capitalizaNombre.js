function enMayusculas(){  
    document.getElementById("texto").value = document.getElementById("texto").value.toUpperCase();
}
function enMayusculasPropioElemento(element){
    element.value = element.value.toUpperCase();
}
//let elemento = document.getElementById("texto");
//elemento.addEventListener("keyup",(event) => toUpperCasePropioElemento(event.target));