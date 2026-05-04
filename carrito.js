function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

let carrito = [];
const botonesAgregar = document.querySelectorAll('.add-to-card');
const contador = document.getElementById('cart-count');
const listaCarrito = document.getElementById('lista-carrito');
const carritoContainer = document.getElementById('carrito-container');
const cartIcon = document.getElementById('cart-icon');

cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    carritoContainer.style.display = carritoContainer.style.display === 'none' ? 'block' : 'none';
});

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.juego-card');
        
        const juego = {
            id: Date.now(),
            titulo: card.querySelector('h3:nth-of-type(1)').innerText,
            precio: card.querySelector('h3:nth-of-type(2)').innerText
        };

        carrito.push(juego);
        renderizarCarrito();
    });
});


function renderizarCarrito() {
    
    listaCarrito.innerHTML = '';
    
    carrito.forEach(juego => {
        const li = document.createElement('li');
        li.innerHTML = `${juego.titulo} - ${juego.precio} <button onclick="quitar(${juego.id})">❌</button>`;
        listaCarrito.appendChild(li);
    });

  
    contador.innerText = carrito.length;
}

window.quitar = function(id) {
    carrito = carrito.filter(juego => juego.id !== id);
    renderizarCarrito();
};


