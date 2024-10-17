const productsContainer = document.querySelector(".products");
const cartContainer = document.querySelector(".cart");
const checkoutButton = document.querySelector(".btn-checkout");
const cartTotalSumLabel = document.querySelector(".cartTotalSumLabel");

const products = [
  { id: "001", title: "Jeans", price: 200 },
  { id: "002", title: "T-shirt", price: 170 },
  { id: "003", title: "Jacket", price: 360 },
];

let cart = [];
let cartTotal = 0;

function findProductById(productId) {
  return products.find(product => product.id === productId);
}

function getIdFromClass(classList, prefix, separator) {
  const idClass = [...classList].find(name => name.startsWith(prefix + separator));
  const id = idClass.split(separator)[1];
  return id;
}

function updateCartTotal() {
  cartTotal = 0;
  cart.forEach(item => {
    cartTotal += findProductById(item[0]).price;
  });
  cartTotalSumLabel.textContent = cartTotal;
}

function renderArticles() {
  productsContainer.innerHTML = "";
  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="grid-item productId-${product.id}">
        <div class="grid-item__title">${product.title}</div>
        <div class="grid-item__price">${product.price}:-</div>
        <button class="btn-addToCart full-width">Add to cart</button>
      </div>`;
  });
}

function renderCart() {
  cartContainer.innerHTML = "";
  cart.forEach(item => {
    const product = findProductById(item[0]);

    cartContainer.innerHTML += `
      <div class="list-item productId-${product.id} cartId-${item[1]}">
        <div class="list-item__title">${product.title}</div>
        <div class="list-item__price">${product.price}:-</div>
        <button class="btn-removeFromCart btn--warning small">Remove</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const cartId = String(Date.now() + Math.random()).replace(".", "");
  cart.push([productId, cartId]);
  renderCart();
}

function removeFromCart(cartId) {
  cart = cart.filter(product => product[1] !== cartId);
  renderCart();
}

document.querySelector("body").addEventListener("click", (e) => {
  // console.log(e);

  // Add to cart
  if (e.target.classList.contains("btn-addToCart")) {
    console.log("Added to cart");
    const parent = e.target.parentElement;
    const id = getIdFromClass(parent.classList, "productId", "-");
    addToCart(id);
    updateCartTotal();
  }
  // Remove from cart
  else if (e.target.classList.contains("btn-removeFromCart")) {
    console.log("Removed from cart");
    const parent = e.target.parentElement;
    const id = getIdFromClass(parent.classList, "cartId", "-");
    removeFromCart(id);
    updateCartTotal();
  }
  // Checkout
  else if (e.target.classList.contains("btn-checkout")) {

  }
});

renderArticles();

// const payment = 2000;
// const totalPrice = 850;

// const coins = [
//   [1000, "sedlar"],
//   [500, "sedlar"],
//   [100, "sedlar"],
//   [50, "sedlar"],
//   [20, "sedlar"],
//   [10, "mynt"],
//   [1, "mynt"]
// ];

// const getCoinsAmount = (coin, payment) => Math.floor(payment / coin);
// const getRemainingCash = (coin, cash) => cash % coin;



// function pay(payment, totalPrice) {
//   let remainingCash = payment - totalPrice;
//   let message = `Du betalade ${payment}kr för ditt köp på ${totalPrice}kr, och fick tillbaka i växel:\n`;

//   const coinsAmount = [
//     [1000, 0],
//     [500, 0],
//     [100, 0],
//     [50, 0],
//     [20, 0],
//     [10, 0],
//     [1, 0]
//   ];

//   if (remainingCash < 0) {
//     console.log(`${payment}kr räcker inte för att betala ditt köp på ${totalPrice}kr. Det saknas ${Math.abs(remainingCash)}kr.`);
//     return;
//   } else if (remainingCash == 0) {
//     console.log(`Du betalade ${payment}kr för ditt köp på ${totalPrice}kr och fick ingen växel tillbaka.`);
//     return;
//   }

//   coinsAmount.forEach((coin, index) => {
//     if (remainingCash >= coin[0]) {
//       coin[1] = getCoinsAmount(coin[0], remainingCash);
//       remainingCash = getRemainingCash(coin[0], remainingCash);

//       if (coin[1] > 0) {
//         message += `${coin[1]} st ${coin[0]}-kronors ${coins[index][1]}\n`;
//       }
//     }
//   });

//   console.log(message);
// }

// pay(payment, totalPrice);