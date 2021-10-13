let cart = []
if (JSON.parse(localStorage.getItem("shoppingCart"))){ 
   cart = JSON.parse(localStorage.getItem("shoppingCart")) 
   console.log(cart)
} else {
   let cart = [] 
}

//formulario

 $(".formulario").on("submit",function(e){
 e.preventDefault();
 console.log($("#nombre").val())
 console.log($("#email").val())
 console.log($("#telefono").val())
 console.log($("#consulta").val())
 })

 function validarTelefono(){
    let value = document.getElementById('telefono').value;
    
    if(value.length < 10){
       console.log("No es un numero correcto")
       document.getElementById('telefono').style.color = 'red';
    }else {
       console.log("Numero correcto")
       document.getElementById('telefono').style.color = 'black';
    }
    
    console.log(value);
 }
 
 

 