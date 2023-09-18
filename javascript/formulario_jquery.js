$(document).ready(function(){
    $('#formulario').validate({
        rules:{
            user:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:5
            },
            verpassword:{
                required:true,
                equalTo: password
            },

            comuna:{
                required:true
            },
            region:{
                required: true
            },
            terminos:{
                required: true
            },

            rut:{
                required:true,
                validarRut:true
            }
        },
        messages:{
            user:"Por favor, escriba un nombre de usuario valido",
            email:{
                required:"Por favor, ingrese su correo electronico",
                email:"Por favor ingrese un correo valido",
            },
            password:{
                required:"Por favor, ingrese una contraseña",
                minlength:"La contraseña debe tener al menos 5 caracteres"
            },
            verpassword:{
                required:"Ingrese nuevamente su contraseña",
                equalTo:"Las contraseñas no son identicas",
                
            },
            rut:{
                required:"Por favor, ingrese un rut",
                validarRut:"Rut ingresado no valido (Sin puntos)"
            },
            
            region:{
                required:"Por favor, ingrese su región"
            },
            comuna:{
                required: "Por favor, ingrese su comuna"
            },
            terminos:{
                required: "Por favor, acepte términos y condiciones"
            }
        },

        
    
        submitHandler:function(form){
            form.submit();
        }

        
    })

    $.validator.addMethod("validarRut",function(value, element) {
        return /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(value);
    });
});