function validarLoguin(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

  if(email.length==""){
    alert("Escribir su email")
  }
  else if(email.search(/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/)){
    alert ('Ingresa la direccion de correo'+ email + 'correcta');
  }

  if(password.length==""){
    alert("Escribir su password")
  }
 else if(password.length(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)){
   alert ('La contraseña del correo ' + password + ' no es valido');
 }
}
