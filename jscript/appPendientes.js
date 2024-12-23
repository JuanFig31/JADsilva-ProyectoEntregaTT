

//Defino los precios para facilitar el cambio en la publicación


let precioqblanco = 18000
let precioqazul= 15000
let precioaoro= 30000
let precioarosa= 27000


//Ante la imposibilidad de trabajar en un solo archivo js por algún tipo de interferencia entre variables 
//y siendo necesario que funcione lo subdivido en vario archivos js (uno por variedad de productos hasta que le encuentre solución)
//AROS QUARZO BLANCO

let qblanco= document.getElementById("idqblanco")

let tituloqblanco = qblanco.textContent 

let qblancoDescrip = "AQB Gota $18000 $" + precioqblanco

//AROS QUARZO BLANCO

let qazul = document.getElementById("idqazul")

let tituloqazul = qazul.textContent

let qazulDescrip = "AQA Piedras $" + precioqazul

//AROS ORO GRANDES
let aoro = document.getElementById("idaoro")

let tituloaoro = aoro.textContent

let aoroDescrip = "AOG 18 kilates $"+precioaoro

// AROS DE ROSA ORO Y PLATA

let arosa = document.getElementById("idarosa")

let tituloarosa = arosa.textContent

let arosadescrip = "AR Oro y Plata $"+ precioarosa




//Pongo en una función la manipulación del texto que tome los parámetros del título-marca y la descripción
//Las compara, al ser distinta una con la otra cambia cada vez que se haga clic, para evitar repetir codigo con variables definidas

function cambiarTexto(nombreOriginal,titulo, leyenda){
    
    if(nombreOriginal.textContent == titulo){
        nombreOriginal.textContent = leyenda} 
    
    else{ nombreOriginal.textContent = titulo}   } 