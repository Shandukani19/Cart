// Initialize an empty cart array
let cart = [];

// Function to add a product to the cart
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

// Function to update the cart count in the UI
function updateCartCount() {
  let cartCount = document.getElementById("cart-count");
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Function to show cart details
function cartDetails() {
  let cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = "block";
  displayCartItems();
}

// Function to close cart details
function closeCart() {
  let cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = "none";
}

// Function to display cart items in the UI
function displayCartItems() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
    <div class="productPositioning">

     <div class="productImage">
       <div> <img src="${item.image}" class="cartImage"/> </div>
         <div> ${item.name} </div>
     </div>

     <div class="productPrice"> ${item.price} </div>

      <div class="quantityButtons">
      <button onClick='subtractQuantity("${item.name}")'> - </button> 
     <p> ${item.quantity}</p>
      <button onClick='addQuantity("${item.name}")'> + </button>
      </div>

    </div>
    `;
    cartItems.appendChild(itemDiv);
  });
}

// Function to remove a product from the cart
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

// Function to update the total amount in the UI
function updateTotalAmount() {
  let totalAmountSpan = document.getElementById("total-amount");
  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}

// Function to increase the quantity of a product in the cart
function addQuantity(name) {
  let cartProduct = cart.find((item) => item.name === name);
  if (cartProduct) {
    cartProduct.quantity++;
  }
  updateCartCount();
  displayCartItems();
  updateTotalAmount();
}

// Function to decrease the quantity of a product in the cart
function subtractQuantity(name) {
  let cartProduct = cart.find((item) => item.name === name);
  if (cartProduct && cartProduct.quantity > 1) {
    cartProduct.quantity--;
  } else {
    cart = cart.filter((item) => item.name !== name);
  }
  updateCartCount();
  displayCartItems();
  updateTotalAmount();
}
