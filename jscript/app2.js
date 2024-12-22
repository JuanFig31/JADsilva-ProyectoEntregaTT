let nombre = document.getElementById("name")
let apellido = document.getElementById("apellido")
let correo = document.getElementById("mail")



/* De los inputs no se saca el contenido con textconten ya que no son estaticos, se saca el valor con .value */
function validarDatos(){

if (nombre.value=="" || apellido.value=="") {
    alert("Ingrese como mínimo nombre apellido e email")
    } else if( correo.value ==""){
        alert("Le faltó el correo electrónico para que podamos comunicarnos con usted")
    }


}
