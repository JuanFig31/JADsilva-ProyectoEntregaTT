

//Defino los precios para facilitar el cambio en la publicación


let precioaniPM = 130000
let precioaniOCir= 270000
let precioaniORub= 280000
let precioaniOBCir= 330000

//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)

//Anillo Plata - Mossanita

let aniPM= document.getElementById("idaniPM")

let tituloaniPM = aniPM.textContent 

let aniPMDescrip = "APM Mosanita 2.4mm $" + precioaniPM

//Anillo Oro - Circonia

let aniOCir = document.getElementById("idaniOCir")

let titulaniOCir = aniOCir.textContent

let aniOCirDescrip = "AO Circonia 2.2 mm $" + precioaniOCir

//Anillo Oro - Rubí
let aniORub = document.getElementById("idaniORub")

let tituloaniORub = aniORub.textContent

let aniORubDescrip = "AO Rubí 2.2 mm $"+ precioaniORub

//Anillo Oro Blanco - Circonia

let aniOBCir = document.getElementById("idaniOBCir")

let tituloaniOBCir = aniOBCir.textContent

let aniOBCirDescrip = "AOB 18k 2.2 mm $"+ precioaniOBCir



//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 