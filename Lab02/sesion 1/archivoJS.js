function onclickebutton(msj){
    saludo="Hola \nBienvenido a Javascript: "+msj;
    alert(saludo);
}

$(document).ready(function(){
    $(".btn_btn-primary_miclase").click(function(){
        let text= $(this).val();
        onclickebutton(text);
    });
});