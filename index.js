const lotto = [];

// for (let i = 0; i < 6; i++) {
//   let num = Math.round(Math.random() * 45 + 1);

//   if (lotto.indexOf(num) === -1) {
//     lotto.push(num);
//   }
// }

while (lotto.length < 6) {
  let num = Math.round(Math.random() * 45 + 1);

  if (lotto.indexOf(num) === -1) {
    lotto.push(num);
  }
}

lotto.sort((a, b) => a - b);

const lottoBox = document.querySelector(".ball");

lottoBox.textContent = lotto;
