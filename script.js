let ball = document.querySelector(".ball");
let field = document.querySelector(".field");
let post = document.querySelector(".post1");
let scoreDisplay = document.getElementById("score");

let score = 0;

field.onclick = function (event) {
  let fieldRect = field.getBoundingClientRect();
  let x = event.clientX - fieldRect.left - ball.offsetWidth / 2;
  let y = event.clientY - fieldRect.top - ball.offsetHeight / 2;
  console.log("Y", event.clientY);
  console.log("X", event.clientX);

  ball.style.left = x + "px";
  ball.style.top = y + "px";
};
post.onclick = function (event) {
  if (true) {
    score += 1;
    scoreDisplay.textContent = score;
  }
};
