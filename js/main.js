$(document).ready(function(){

//Informacion  
$('#btnSolInfo').click(function (e) { 
    e.preventDefault();

    let name = $('#nombreInfo').val();
    let mail = $('#correoInfo').val();
    let subject = $('#asuntoInfo').val();
    let message = $('#mensajeInfo').val();

    if(!name.length || !mail.length || !subject.length || !message.length){
        Swal.fire('¡Alerta!','Debe completar todos los espacios','warning');
    }else{
        Swal.fire('¡Solicitud Enviada!','Su solicitud de información se recibio correctamente, pronto tendrá respuesta','success');
        $('#nombreInfo').val("");
        $('#correoInfo').val("");
        $('#asuntoInfo').val("");
        $('#mensajeInfo').val("");
    }
});

//Register
$('#btnRegister').click(function (e) { 
    e.preventDefault();

    let nameUser = $('#nameUser').val();
    let lastUser = $('#lastUser').val();
    let emailUser = $('#emailUser').val();
    let phoneUser = $('#phoneUser').val();
    let cityUser = $('#cityUser').val();
    let userUser = $('#userUser').val();
    let idUser = $('#idUser').val();
    let passUser = $('#passUser').val();
    let passUser2 = $('#passUser2').val();

    if(!nameUser.length || !lastUser.length || !emailUser.length || !phoneUser.length || !cityUser.length || !userUser.length || !idUser.length || !passUser.length || !passUser2.length){
        Swal.fire('¡Alerta!','Debe completar todos los espacios','warning');
    }else{
        if(passUser==passUser2){
            Swal.fire('¡Registro Existoso!','Se completo el registro correctamente','success');
            $('#nameUser').val('');
            $('#lastUser').val('');
            $('#emailUser').val('');
            $('#passUser').val('');
            $('#passUser2').val('');
        } else {
            Swal.fire('¡Alerta!','Las contraseñas no son iguales','warning');
        }
    }
});

//Login
$('#btnLogin').click(function (e) { 
    e.preventDefault();
    
    let userLogin = $('#usernameLogin').val();
    let passLogin = $('#passwordLogin').val();

    if(!userLogin.length || !passLogin.length){
        Swal.fire('¡Alerta!','Debe completar todos los espacios','warning');
    }else{
        if(userLogin=='Admin' && passLogin=='123'){
            window.location.href='./manager/core/index.html';
        } else if (userLogin == 'Dan' && passLogin == '456') {
            window.location.href='./user/core/index.html';
        }else{
            Swal.fire('¡Alerta!','Usuario o Contraseña Invalida','error');
        }
    }
});

//Reset Pass  
$('#btnResetPass').click(function (e) { 
    e.preventDefault();

    let email = $('#emailReset').val();

    if(!email.length){
        Swal.fire('¡Alerta!','Debe proporcionar un correo electrónico valido','warning');
    }else{
        Swal.fire('¡Petición Enviada!','Se envio el enlace de restablecimiento correctame','success');
        $('#emailReset').val('');
    }
});

















    
})