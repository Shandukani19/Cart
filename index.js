let cart = [];
function addToCart(name, price, image) {
  let existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  updateCartCount();
  displayCartItems();
  updateTotalAmount();
}

function updateCartCount() {
  let cartCount = document.getElementById("cart-count");
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function cartDetails() {
  let cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = "block";
  displayCartItems();
}

function closeCart() {
  let cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = "none";
}

function displayCartItems() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `<p> <img src="${item.image}"> ${item.name} - ${item.price} x ${item.quantity}</p> 
    <button onClick = 'decreaseQuantity()' > - </button> 
    <button onClick = 'addToCart('${item.name}')'> + </button>`;
    cartItems.appendChild(itemDiv);
  });
}

//
function removefromCart(name) {
  let itemIndex = cart.findIndex((item) => item.name === name);
  if (itemIndex > -1) {
    cart[itemIndex].quantity--;
    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
    }
    updateCartCount();
    displayCartItems();
  }
}

function updateTotalAmount() {
  let totalAmountSpan = document.getElementById("total-amount");
  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}
