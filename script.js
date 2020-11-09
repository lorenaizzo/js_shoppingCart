// Me guardo los tbody de cada tabla para mostrar los productos
const productsTable = document.querySelector('#products-table tbody');
const cartTable = document.querySelector('#cart-table tbody');
const amountMessage = document.getElementById('amount');

let cart = [];

// Funcion para dibujar la tabla de productos
function drawProductsTable() {
    for (let i = 0; i < products.length; i++) {
        
        const tr = createTr(products[i], true); // true para agregar evento
        productsTable.appendChild(tr);
    }
}


function createTr(product, withEvent) {

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdNameTxt = document.createTextNode(product.nombre);
    tdName.appendChild(tdNameTxt);

    const tdPrice = document.createElement('td');
    const tdPriceTxt = document.createTextNode(product.precio);
    tdPrice.appendChild(tdPriceTxt);

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);

    if (withEvent) {
        tr.addEventListener('click', addCart);
    }

    return tr;

}

function addCart(event) {
    
    const index = searchProduct(event.target.innerHTML, products);
    
    if (index != null) { // tambien se puede poner if (index)
        const exist = searchProduct(event.target.innerHTML, cart);

        if( exist == null){
            cart.push(products[index]);

            const tr = createTr(products[index], false); // no le tiene que agregar evento
            cartTable.appendChild(tr);
        }
        else {
            alert("Ya compraste este producto");
        }
    }
    else {
        alert("Error, no se encontro el producto!");
    }

}

function searchProduct(productName, searchArray){
    let index = searchArray.length; // inicializo el indice fuera de rango
    let i = 0;

    // Busco la ubicacion del producto seleccionado en el vector de producto
    // y me guardo el indice.
    while (index == searchArray.length && i < searchArray.length) {
        if(searchArray[i].nombre ==  productName) {
            index = i;
        }
        i++;
    }

    if (index != searchArray.length) { // encontro el producto, en nuestro caso siempre va a ser verdadero pero es mejor asegurarse
        return index;
    }
    else {
        return null;
    }
}

function closePurchase() {
    let amount = 0;

    for (let i = 0; i < cart.length; i++) {
        amount += cart[i].precio;
    }

    amountMessage.innerHTML = "Total de la compra: " + amount;

}

const products = [
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "pan",
        precio: 25
    },
    {
        nombre: "papa",
        precio: 52
    },
    {
        nombre: "palta",
        precio: 55
    },
    {
        nombre: "fideos",
        precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
        precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
        precio: 69
    },
    {
        nombre: "lentejas",
        precio: 85
    },
    {
        nombre: "mandarina",
        precio: 43
    },
    {
        nombre: "banana",
        precio: 79
    },
    {
        nombre: "leche de almendras",
        precio: 145
    },
    {
        nombre: "papel higienico",
        precio: 147
    },
    {
        nombre: "lavandina",
        precio: 55
    },
    {
        nombre: "alcohol en gel",
        precio: 123
    },
    {
        nombre: "shampoo",
        precio: 400
    },
    {
        nombre: "arroz",
        precio: 66
    },
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "salsa de tomate",
        precio: 35
    },
]; 