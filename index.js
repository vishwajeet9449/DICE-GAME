let randomNumber1 = Math.round(Math.random() * 5) + 1;
let randomdice = "./images/" + "dice" + randomNumber1 + ".png";
let image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomdice);

let randomNumber2 = Math.round(Math.random() * 5) + 1;
let randomdice2 = "./images/" + "dice" + randomNumber2 + ".png";
let image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomdice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win! Refresh for the next round";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Win! Refresh for the next round";
} else {
  document.querySelector("h1").innerHTML = "Draw 😂 Refresh Me!";
}
