let cart = [];
function addToCart(name, price){
  let existingItem = cart.find(item => item.name === name);
  if(existingItem){
    existingItem.quantity += 1;
} else {
  cart.push({name, price, quantity: 1});
} 
updateCartCount();
}

function updateCartCount(){
  let cartCount = document.getElementById('cart-count');
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function cartDetails(){
  let cartDetails = document.getElementById('cart-details');
  cartDetails.style.display = 'block';
  displayCartItems();
}

function displayCartItems(){
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const itemDiv =document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `<p>${item.name} - ${item.price} x ${item.quantity}</p> 
    <button onClick = 'removefromCart('${item.name}')'> remove </button> `;
    cartItems.appendChild(itemDiv);
  })
}

function removefromCart(name){
  let itemIndex = cart.findIndex(item => item.name === name);
  if(itemIndex > -1){
    cart[itemIndex].quantity--;
    if(cart[itemIndex].quantity === 0){
      cart.splice(itemIndex, 1);
    }
    updateCartCount();
    displayCartItems();
    }
  
}

function updateTotalAmount(){
  let totalAmountSpan = document.getElementById('total-amount');
  let totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}