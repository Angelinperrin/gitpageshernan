
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


   // Función para limpiar el carrito
   function clearCart() {
    // Elimina los elementos del carrito del localStorage
    localStorage.removeItem('cart');
    // Actualiza la visualización del carrito
    updateCartView();
}

// Asigna un evento de clic al botón para limpiar el carrito
document.getElementById('clearCartBtn').addEventListener('click', clearCart);

