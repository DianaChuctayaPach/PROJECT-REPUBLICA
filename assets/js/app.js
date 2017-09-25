function validar() {
    var nombre, yesname, yescelular, correo, telefono, expresion, expresion1;
    nombre = document.getElementById("nombre").value;
    yesname = document.getElementById("yesname");
    correo = document.getElementById("correo").value;
    yescorreo = document.getElementById("yescelular");
    telefono = document.getElementById("telefono").value;
    yescorreo = document.getElementById("yescelular");

    if (nombre.length > 0 && nombre.match(/^[a-zA-Z\s]*$/)) {
        yesname.innerHTML = "<div style='color:green' ><strong> Nombre Valido ✔</strong> </div>";
    } else {
        var noname = document.getElementById("noname");
        yesname.innerHTML = "<div style='color:red' > <strong>Escribir un Nombre</strong></div>";
    }
    if (correo.length > 0 && correo.match(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i)) {
        yescorreo.innerHTML = "<div style='color:green' ><strong>Correo Correcto</strong></div>";
    } else {
        yescorreo.innerHTML = "<div style = 'color:red' ><strong>Correo Incorrecto</strong></div>";
    }
    if (telefono.length > 0 && telefono.match(/^([0-9]+){9}$/)) {
        yestelefono.innerHTML = "<div style='color:green' ><strong>Numero Correcto</strong></div>";
    } else {
        yestelefono.innerHTML = "<div style = 'color:red' ><strong>Numero Incorrecto</strong></div>";
    }
    /* if (nombre === "" || correo === "" || telefono === "") {
         alert("nombres y correo son obligatorios");
         return (false);
     } else if (nombre.length > 30) {
         alert("El nombre es muy largo");
         return false;
     } else if (correo.length > 100) {
         alert("El correo es muy largo");
         return false;
     } else if (!expresion.test(correo)) {
         alert("El correo no es válido");
         return false;
     } else if (telefono.length > 1) {
         alert("El telefono es muy largo");
         return false;
     } else if (!expresion1.test(telfono)) {
         alert("El telefono no es válido");
         return false;
     }*/

}
validar();