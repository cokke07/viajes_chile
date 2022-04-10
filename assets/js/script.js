//declararemos eventos y metodos Jquery
$(document).ready(function () {

//contar y mostrar la cantidad de caracteres ingresados en el textarea del formulario de contacto
$('textarea').keyup(updateCount);
$('textarea').keydown(updateCount);

function updateCount() {
    $('#cont2').text($(this).val().length);
}

// evento en el boton de Enviar correo
 $("#enviarMensaje").click(function () {

    alert("Tu mensaje a sido recibido correctamente.")
        
});

});