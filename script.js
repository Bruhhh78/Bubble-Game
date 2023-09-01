// ************** MAKE BUBBLE **************
function makeBubble() {
  var bub = "";
  for (let i = 1; i <= 216; i++) {
    var ranBubNumber = Math.floor(Math.random() * 10);
    bub += `<div class="bubble">${ranBubNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = bub;
}

// ************** Set The Timer **************
var timer = 60;
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerInt").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML =`<h1> Game Over</h1>`
    }
  }, 1000);
}

// ************** Set Hit Section **************
var ranhitNum = 0;
function getNewHit() {
  ranhitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = ranhitNum;
}

// ************** Score Section **************
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (data) {
  var clickednumber = Number(data.target.textContent);
  if (clickednumber === ranhitNum) {
    increaseScore();
    makeBubble();
    getNewHit();
    console.log("Congratulation! You Got a Score :)");
  }else{
    console.log("You Clicked Wrong Bubble!")
    document.querySelector("#pbtm").innerHTML=`<h1>You Clicked Wrong Bubble!</h1>`
  }
});

runTimer();
makeBubble();
getNewHit();
// increaseScore();
