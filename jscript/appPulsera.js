

//Defino los precios para facilitar el cambio en la publicación


let preciocubana = 55000
let precioonix= 70000
let precioswar= 54000
let preciosercob= 22000


//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)
//PULSERA CUBANA    

let cubana= document.getElementById("idcubana")

let tituloCubana = cubana.textContent 

let cubanaDescrip = "PCU Plata Brill $" + preciocubana

//PULSERA ONIX ORO Y PLATA

let onix = document.getElementById("idonix")

let tituloonix = onix.textContent

let onixDescrip = "POP Oro y Plata $" + precioonix

//PULSERA SWAROSKY PLATA
let swar = document.getElementById("idsw")

let tituloswar = swar.textContent

let swarDescrip = "PSW Plata Swarosky $"+precioswar

// PULSERA SERPIENTE COBRE

let sercob = document.getElementById("idsercob")

let titulosercob = sercob.textContent

let sercobdescrip = "PSC Serpiente $"+ preciosercob




//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 