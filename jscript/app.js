

//Defino los precios para facilitar el cambio en la publicación

let precioCasioCuero= 174000
let precioNautica =193000
let precioTommi = 316000
let precioCasiom = 184000
let precioPrunm = 48000
let precioPrunc = 37000
/* let precioarosPerlas = 25000
let precioarosPerlasb= 38000
let preciocollarPerlas= 114000
let preciocollarPerlasn= 180000
let preciopulsPerlas= 75000
let preciopulsPerlasD= 35000  */




//RELOJ CASIO MALLA DE CUERO
// Saco el contenido en texto de la marca-titulo
//luego el anterior se debe incorporar como segundo parametro a la función
/* let casioCueroDescrip = `${casio_cuero.marca+casio_cuero.codigo+casio_cuero.precio}` */

let casioCuero = document.getElementById("idcasioC")//caputro el elemento por su id

let titulocasioCuero = casioCuero.textContent 

let casioCueroDescrip = "Mtp-vt55b Cuero $"+ precioCasioCuero  //defino la variable a cambiar


//RELOJ NAUTICA
let nautica = document.getElementById("idnautica")

let tituloNautica = nautica.textContent  

let nauticaDescrip = "A19852 Acero $"+ precioNautica
//RELOJ TOMMI
let tommi = document.getElementById("idtommi")

let tituloTommi = tommi.textContent  

let tommiDescrip = "N1710630 Azul $"+ precioTommi
//RELOJ CASIO METAL
let casioMetal= document.getElementById("idcasioM")

let tituloCasiom= casioMetal.textContent  

let casioMetalDescrip= "Mtp-vt01b Metal $" + precioCasiom
//RELOJ PRUNE METAL
let pruneMetal= document.getElementById("idprunM")

let tituloPrunm= pruneMetal.textContent  

let pruneMetalDescrip= "Prg-5048 metal $" + precioPrunm

//RELOJ PRUNE CUERO
let pruneCuero= document.getElementById("idprunC")

let tituloPrunc= pruneCuero.textContent  

let pruneCueroDescrip= "249-05 cuero  $" + precioPrunc

//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)
/*

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



*/



//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 