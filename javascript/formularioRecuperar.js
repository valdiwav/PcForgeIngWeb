$(document).ready(function(){  
    $('#recuperar1').validate({
        rules:{
            email:{
                required: true,
                email: true
                
            }
        },

        messages:{
            email:{
                required:"Por favor, ingrese un email",
                email:"Email ingresado es invalido"
            }
        },

        submitHandler:function(form){
            form.submit();
        }
    
});

});