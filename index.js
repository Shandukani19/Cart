let product = [];
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let cart = [];

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (products.length > 0) {
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
              <h2> ${product.name} </h2>
              <div class="price">  R${product.price} </div>
              <button class= "addCart"> add to cart </button>
            `;
      listProductHTML.appendChild(newProduct);
    });
  }
};

const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (item) => item.product_id === product_id
  );
  if (positionThisProductInCart === -1) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    cart[positionThisProductInCart].quantity += 1;
  }
  addCartToHTML();
};



//first code

let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsDiv = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");

  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartItemsDiv.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
            `;
    cartItemsDiv.appendChild(cartItemDiv);
  });
  totalAmount.innerText = total;
}

function changeQuantity(name, delta) {
  const item = cart.find((item) => item.name === name);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((item) => item.name !== name);
    }
  }
  updateCart();
}

function toggleCartDetails() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.style.display =
    cartDetails.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});

