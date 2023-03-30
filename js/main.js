// Scroll revel y menu responsive

document.querySelector(".menu__btn").addEventListener("click", () => {
    document.querySelector(".nav__menu").classList.toggle("show");
});

ScrollReveal().reveal('.portada');
ScrollReveal().reveal('.container-filtro', { delay: 500 });
ScrollReveal().reveal('.container-productos', { delay: 500 });

//lISTA DE PRODUCTOS

const stockProductos = [
    {
      id: 1,
      nombre: "Angel Guardian",
      cantidad: 1,
      precio: 8500,
      img: "./img/remeras/angel_guardian.png",
    },
    {
      id: 2,
      nombre: "Cosmos Blanca",
      cantidad: 1,
      precio: 7000,
      img: "./img/remeras/cosmos_blanca.png",
    },
    {
      id: 3,
      nombre: "Cosmos Crema",
      cantidad: 1,
      precio: 7000,
      img: "./img/remeras/cosmos_crema.png",
    },
    {
      id: 4,
      nombre: "Tokyo",
      cantidad: 1,
      precio: 7500,
      img: "./img/remeras/tokyo.png",
    },
    {
      id: 5,
      nombre: "Hoddie Fuck Luv",
      cantidad: 1,
      precio: 1500,
      img: "./img/hoodie_fuck.png",
    },
  ];

//aa
/*if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }*/


//Declaraciones

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

//LLamado de los productos 

stockProductos.forEach((prod) => {
    const { id, nombre, precio, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `

      <div>
          <div class="porducto">
              <img src="${img}" alt="${nombre}">
              <div class="contenido_productos">
                  <p class="title">${nombre}</p>
                  <h4 class="precio">${precio}</h4>
                  <button class="btn_add" onclick="agregarProducto(${id})">Añadir al Carrito</button>
              </div>
          </div>
      </div>

      `;
    }
  });



  



