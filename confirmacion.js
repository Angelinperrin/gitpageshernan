// function saveAddress() {
//     const address = document.getElementById('address').value;
//     localStorage.setItem('address', address);
//     alert('Dirección guardada!');
// }

// document.getElementById('address-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     const paymentMethod = {};
//     formData.forEach((value, key) => {
//         paymentMethod[key] = value;
//     });
//     localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
//     window.location.href = 'confirmacion.html';
// });



// JavaScript para manejar el carrito de compras

// Función para agregar productos al carrito
function addToCart(name, price, image) {
    // Recupera el carrito del localStorage o crea uno nuevo si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Crea un objeto de producto
    const product = { name, price, image };

    // Añade el producto al carrito
    cart.push(product);

    animateAddToCart(image);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para renderizar los productos en el carrito
function renderCart() {
    const cartItemsElement = document.getElementById('cartItems');
    let totalAmount = 0;

    // Limpia el contenido del carrito antes de renderizar
    cartItemsElement.innerHTML = '';

    // Renderiza cada producto en el carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productImageElement = document.createElement('img');
        productImageElement.src = item.image; // Aquí se establece la ruta de la imagen
        productImageElement.alt = item.name;

        const productNameElement = document.createElement('h3');
        productNameElement.textContent = item.name;

        const productPriceElement = document.createElement('p');
        productPriceElement.textContent = 'Precio: $' + item.price.toFixed(2);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => removeProduct(item);

        productElement.appendChild(productImageElement);
        productElement.appendChild(productNameElement);
        productElement.appendChild(productPriceElement);
        productElement.appendChild(removeButton);

        cartItemsElement.appendChild(productElement);

        totalAmount += item.price;
    });

    // Renderiza el total
    document.getElementById('totalAmount').textContent = '$' + totalAmount.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeProduct(product) {
    // Filtra el carrito para eliminar el producto seleccionado
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== product.name);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Vuelve a renderizar el carrito
    renderCart();
}

// Redirigir a la página de confirmación
function checkout() {
    window.location.href = 'confirmacion.html';
}

// Renderiza el carrito al cargar la página
window.onload = renderCart;


function animateAddToCart(imageSrc) {
    const animationElement = document.getElementById('cart-animation');
    const animationImage = document.getElementById('animation-image');

    // Establecer la imagen de la animación
    animationImage.src = imageSrc;

    // Mostrar la animación
    animationElement.classList.add('animate');

    // Ocultar la animación después de 1.5 segundos
    setTimeout(() => {
        animationElement.classList.remove('animate');
    }, 1500);
}