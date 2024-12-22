

//Defino los precios para facilitar el cambio en la publicación


let precioaliO24 = 750000
let precioaliOB= 800000
let precioaliOBri= 950000
let precioaliORBri= 1425000

//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)

//ALIANZA ORO 24

let aliO24= document.getElementById("idaliO24")

let tituloAliO24 = aliO24.textContent 

let aliO24Descrip = "AO24 Gravada   $" + precioaliO24

//ALIANZA ORO BLANCO

let aliOB = document.getElementById("idaliOB")

let titulaliOB = aliOB.textContent

let aliOBDescrip = "AOB 18 kilates $" + precioaliOB

//ALIANZA ORO BRILLANTE
let aliOBri = document.getElementById("idaliOBri")

let tituloaliObri = aliOBri.textContent

let aliObriDescrip = "AOBri 1.8mm $"+ precioaliOBri

//ALIANZA ORO BRILLANTE

let aliORBri = document.getElementById("idaliORBri")

let tituloaliORbri = aliORBri.textContent

let aliORbriDescrip = "AORBri 1.8mm $"+ precioaliORBri



//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 