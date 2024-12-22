

//Defino los precios para facilitar el cambio en la publicación


let precioarosPerlas = 25000
let precioarosPerlasb= 38000
let preciocollarPerlas= 114000
let preciocollarPerlasn= 180000
let preciopulsPerlas= 75000
let preciopulsPerlasD= 35000 

//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)
//Aros perlas

let arosPerlas= document.getElementById("idaperlas")

let tituloAperlas = arosPerlas.textContent 

let arosPerlasDescrip = "AP grandes  $" + precioarosPerlas

//Aros perlas y Brillantes

let arosPerlasb = document.getElementById("idaperlasb")

let tituloarosPerlasb = arosPerlasb.textContent

let arosPerlasbDescrip = "AP brillantes $" + precioarosPerlasb

//Collar de Perlas
let collarPerlas = document.getElementById("idcollarp")

let titulocollarPerlas = collarPerlas.textContent

let collarPerlasDescrip = "CP cultivadas $"+preciocollarPerlas

// Pulsera perlas doradas

let pulsPerlasD = document.getElementById("pulsPerlasD")

let titulopulsPerlasD = pulsPerlasD.textContent

let pulsPerlasDdescrip = "PPD pigmentada $"+ preciopulsPerlasD

//Collar perlas Negras

let collarPerlasn = document.getElementById("idcollarpN")

let titulocollarPerlasn = collarPerlasn.textContent

let collarPerlasnDescrip = "CPN Tahití $"+ preciocollarPerlasn

//Pulsera de Perlas

let pulsPerlas = document.getElementById("idpulsp")

let titulopulsPerlas= pulsPerlas.textContent

let pulsPerlasDescrip = "PP cultivadas $"+ preciopulsPerlas







//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 