   // Configuración de productos con stock y descuentos
    const productos = {
    casioCuero: { 
        nombre: 'Reloj Casio Lptv', 
        precio: 143801.65, 
        stock: 8,
        descuento: 0  // 10% de descuento
    },
    nautica: { 
        nombre: 'Reloj Nautica A19852 Acero', 
        precio: 159504.13, 
        stock: 5,
        descuento: 0  // 5% de descuento
    },
    tommi: { 
        nombre: 'Reloj Tommi N1710630 Azul', 
        precio: 257851.24, 
        stock: 8,
        descuento: 0  // Sin descuento
    },
    casioMetal: { 
        nombre: 'Reloj Casio Mtp-vt01b', 
        precio: 152066.12, 
        stock: 12,
        descuento: 0  // Sin descuento
    },
    pruneMetal: { 
        nombre: 'Reloj Prune metal Prg-5048', 
        precio: 39669.42, 
        stock: 8,
        descuento: 0  // Sin descuento
    },
    pruneCuero: { 
        nombre: 'Reloj Prune cuero 249-05', 
        precio: 30578.51, 
        stock: 6,
        descuento: 0  // Sin descuento
    },
    aperlas: { 
        nombre: 'Perlas Aros grandes', 
        precio: 20661.16, 
        stock: 18,
        descuento: 0  // Sin descuento
    },
    aperlasb: { 
        nombre: 'Perlas Aros brillantes', 
        precio: 31404.96, 
        stock: 12,
        descuento: 0  // Sin descuento
    },
    collarPerlas: { 
        nombre: 'Collar de Perlas', 
        precio: 94214.88, 
        stock: 9,
        descuento: 0  // Sin descuento
    },
    collarPerlasn: { 
        nombre: 'Collar de Perlas Negras', 
        precio: 148760.33, 
        stock: 6,
        descuento: 0  // Sin descuento
    },
    pulsPerlas: { 
        nombre: 'Pulsera de Perlas Cultivadas', 
        precio: 61983.47, 
        stock: 8,
        descuento: 0  // Sin descuento
    },
    pulsPerlasd: { 
        nombre: 'Pulsera de Perlas Doradas', 
        precio: 28925.62, 
        stock: 15,
        descuento: 0  // Sin descuento
    },
    alianzaO24: { 
        nombre: 'Alianza Oro 24 Kilates', 
        precio: 619834.71, 
        stock: 4,
        descuento: 0  // Sin descuento
    },
    alianzaOB: { 
        nombre: 'Alianza Oro Blanco 18K', 
        precio: 661157.03, 
        stock: 6,
        descuento: 0  // Sin descuento
    
},
alianzaBrill: { 
        nombre: 'Alianza Oro con Brillante', 
        precio: 785123.97, 
        stock: 5,
        descuento: 0  // Sin descuento
    
},
    anilloPM: { 
        nombre: 'APM Mosanita 2.4mm', 
        precio: 107438.02, 
        stock: 10,
        descuento: 0  // Sin descuento
    
},
    anilloOC: { 
        nombre: 'Anillo Oro Circonia', 
        precio: 223140.50, 
        stock: 6,
        descuento: 0  // Sin descuento
    
},
    anilloOr: { 
        nombre: 'Anillo Oro Rubí', 
        precio: 231404.96, 
        stock: 5,
        descuento: 0  // Sin descuento
    
},
    anilloOBC: { 
        nombre: 'AOB Circonia 2.2 mm', 
        precio: 272727.27, 
        stock: 8,
        descuento: 0  // Sin descuento
    
},
    cubana: { 
        nombre: 'PCU Pulsera Cubana', 
        precio: 45454.55, 
        stock: 20,
        descuento: 0  // Sin descuento
    
},
    cubicOnix: { 
        nombre: 'POP Oro y Plata', 
        precio: 57851.24, 
        stock: 5,
        descuento: 0  // Sin descuento
    
},
    platasw: { 
        nombre: 'PSW Pulsera Plata Swarosky', 
        precio: 44628.10, 
        stock: 12,
        descuento: 0  // Sin descuento
    
},
    serpCob: { 
        nombre: 'PSC Serpiente Cobre', 
        precio: 18181.82, 
        stock: 16,
        descuento: 0  // Sin descuento
    
},
    tablet: { 
        nombre: 'Tablet', 
        precio: 300, 
        stock: 8,
        descuento: 0  // Sin descuento
    
}
}

// Constante para el IVA
const IVA = 0.21;  // 21% de IVA

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

function agregarAlCarrito(nombre, precio, productoKey) {
    // Obtener el producto específico
    const producto = productos[productoKey];

    // Validar stock
    if (producto.stock <= 0) {
        alert('¡Producto agotado!');
        return;
    }

    // Obtener el carrito actual del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Agregar nuevo producto
    carrito.push({ 
        nombre: producto.nombre, 
        precio: producto.precio,
        productoKey: productoKey
    });
    
    // Reducir stock
    producto.stock--;
    document.getElementById(`stock-${productoKey}`).textContent = producto.stock;
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar vista del carrito
    renderizarCarrito();
}

function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');
    const descuentoCarrito = document.getElementById('descuento-carrito');
    const ivaCarrito = document.getElementById('iva-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Limpiar lista anterior
    listaCarrito.innerHTML = '';
    
    // Totales iniciales
    let subtotal = 0;
    let descuentoTotal = 0;
    
    // Renderizar cada producto
    carrito.forEach((producto, index) => {
        const productoInfo = productos[producto.productoKey];
        const li = document.createElement('li');
        
        // Calcular descuento individual
        const descuentoProducto = productoInfo.descuento * producto.precio;
        const precioConDescuento = producto.precio - descuentoProducto;
        
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio} 
            ${productoInfo.descuento > 0 ? 
                `<span class="descuento">(Desc. ${(productoInfo.descuento * 100).toFixed(0)}%: 
                -$${descuentoProducto.toFixed(2)})</span>` 
                : ''}
        `;
        
        // Botón para eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
        
        // Sumar al subtotal y descuentos
        subtotal += producto.precio;
        descuentoTotal += descuentoProducto;
    });
    
    // Calcular IVA
    const ivaTotal = (subtotal - descuentoTotal) * IVA;
    const total = subtotal - descuentoTotal + ivaTotal;
    
    // Actualizar totales
    subtotalCarrito.textContent = subtotal.toFixed(2);
    descuentoCarrito.textContent = descuentoTotal.toFixed(2);
    ivaCarrito.textContent = ivaTotal.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Recuperar el producto para devolver stock
    const producto = productos[carrito[index].productoKey];
    producto.stock++;
    document.getElementById(`stock-${carrito[index].productoKey}`).textContent = producto.stock;
    
    // Eliminar producto por índice
    carrito.splice(index, 1);
    
    // Actualizar localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Renderizar de nuevo
    renderizarCarrito();
}

function vaciarCarrito() {
    // Restaurar stock de todos los productos
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(item => {
        const producto = productos[item.productoKey];
        producto.stock++;
        document.getElementById(`stock-${item.productoKey}`).textContent = producto.stock;
    });
    
    // Limpiar localStorage
    localStorage.removeItem('carrito');
    
    // Renderizar
    renderizarCarrito();
}

function cargarCarrito() {
    // Cargar carrito al iniciar la página
    renderizarCarrito();
}

// Funciones de Checkout
function mostrarCheckout() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Validar que hay productos en el carrito
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Mostrar modal de checkout
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'flex';
    
    // Actualizar totales en el modal
    const subtotal = parseFloat(document.getElementById('subtotal-carrito').textContent);
    const descuento = parseFloat(document.getElementById('descuento-carrito').textContent);
    const iva = parseFloat(document.getElementById('iva-carrito').textContent);
    const total = parseFloat(document.getElementById('total-carrito').textContent);
    
    document.getElementById('modal-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('modal-descuento').textContent = descuento.toFixed(2);
    document.getElementById('modal-iva').textContent = iva.toFixed(2);
    document.getElementById('modal-total').textContent = total.toFixed(2);
}

function realizarCompra() {
    // Simular compra
    alert('¡Compra realizada con éxito!');
    
    // Vaciar carrito
    localStorage.removeItem('carrito');
    
    // Cerrar modal
    cerrarCheckout();
    
    // Renderizar carrito vacío
    renderizarCarrito();
}

function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}