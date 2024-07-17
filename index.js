let cart =  [];

function addToCart(name, price){
    let existingItem =cart.find((item) => item.name === name);
    if (existingItem){
        existingItem.quantity++;
    } else{
        cart.push({name, price, quantity: 1});
    }

    updateCart();
}

function updateCart(){
    let cartCount = document.getElementById("cart-count")
    let cartItems = document.getElementById("cart-items");
    let totalAmount = document.getElementById("total-amount");

    cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item) =>{
        total += item.price * item.quantity;
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity}
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
            `;
            cartItems.appendChild(cartItem);
    })
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

function cartDetails() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.style.display =
    cartDetails.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});