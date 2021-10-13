
let cart = []
if (JSON.parse(localStorage.getItem("shoppingCart"))){ 
   cart = JSON.parse(localStorage.getItem("shoppingCart")) 
   console.log(cart)
} else {
   let cart = []
}

class Product {
   constructor (title, price, stock, img) {
   this.title = title;
   this.price = price;
   this.stock = stock;
   this.img=img;
   }
}


const product1 = new Product ("Set vajilla", 1000, 81, "../contenido/vajilla.jpg") 
const product2 = new Product ("Sillon", 20000, 92, "../contenido/sillon.jpg")
const product3 = new Product ("Cama", 25500, 38, "../contenido/cama.jpg")
const product4 = new Product ("Cajas", 500, 81, "../contenido/cajas.jpg") 
const product5 = new Product ("Sillas", 4000, 81, "../contenido/sillas.jpg") 
const product6 = new Product ("Mesa", 20500, 81, "../contenido/mesa.jpg") 

const dataBase = [product1, product2, product3, product4, product5, product6]


let acumulador = ``;
dataBase.forEach((product) => {
   acumulador += `<div class="col mb-5">
   <div class="card h-100">
       <!-- Product image-->
       <div class="imagen">
       <img src="${product.img}">
       <!-- Product details-->
               <!-- Product name-->
               <div class="info">
               <h3>${product.title}</h3>
               <!-- Product price-->
               $${product.price}
           </div>
       </div>
       <!-- Product actions-->
       <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
           <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="addToCart('${product.title}')" >
           Agregar</a></div>
           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
           <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="deleteCart('${product.title}')" >
           Eliminar</a></div>
       </div>
   </div>
</div>`
});

document.getElementById("productsList").innerHTML = acumulador;



function addToCart (title){
   let productFound = dataBase.find(product => product.title === title);
   if (productFound != undefined){
      cart.push(productFound);
      document.getElementById("contadorCart").innerHTML = cart.length;
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
      cart = JSON.parse(localStorage.getItem("shoppingCart"));
   } else {
      alert("Algo falló");
   }
}


function deleteCart(title) {
   let productFound = dataBase.find(product => product.title === title);
   if (productFound != undefined){
      cart.splice(productFound,1);
      document.getElementById("contadorCart").innerHTML = cart.length;
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
      cart = JSON.parse(localStorage.getItem("shoppingCart"));
   } else {
      alert("Algo falló");
   }
}

