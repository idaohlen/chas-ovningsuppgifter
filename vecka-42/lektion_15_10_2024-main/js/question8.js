/* Kassan */
/* Hur mycket har du handlat för?  */
/* Vad betalar du i kassan? */

/* Sedlar, 1000, 500, 100, 50, 20, 10, 1 */

// Input
const payment = 2000;
const totalPrice = 850;

const coins = [
  [1000, "sedlar"],
  [500, "sedlar"],
  [100, "sedlar"],
  [50, "sedlar"],
  [20, "sedlar"],
  [10, "mynt"],
  [1, "mynt"]
];

const getCoinsAmount = (coin, payment) => Math.floor(payment / coin);
const getRemainingCash = (coin, cash) => cash % coin;

function pay(payment, totalPrice) {
  let remainingCash = payment - totalPrice;
  let message = `Du betalade ${payment}kr för ditt köp på ${totalPrice}kr, och fick tillbaka i växel:\n`;

  const coinsAmount = [
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [1, 0]
  ];

  if (remainingCash < 0) {
    console.log(`${payment}kr räcker inte för att betala ditt köp på ${totalPrice}kr. Det saknas ${Math.abs(remainingCash)}kr.`);
    return;
  } else if (remainingCash == 0) {
    console.log(`Du betalade ${payment}kr för ditt köp på ${totalPrice}kr och fick ingen växel tillbaka.`);
    return;
  }

  coinsAmount.forEach((coin, index) => {
    if (remainingCash >= coin[0]) {
      coin[1] = getCoinsAmount(coin[0], remainingCash);
      remainingCash = getRemainingCash(coin[0], remainingCash);

      if (coin[1] > 0) {
        message += `${coin[1]} st ${coin[0]}-kronors ${coins[index][1]}\n`;
      }
    }
  });

  console.log(message);
}

pay(payment, totalPrice);