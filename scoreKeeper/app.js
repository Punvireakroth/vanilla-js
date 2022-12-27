let playerOne = document.getElementById("p1Button");
let playerTwo = document.getElementById("p2Button");
let p1DisplayScore = document.getElementById("p1Display");
let p2DisplayScore = document.getElementById("p2Display");
let reset = document.getElementById("reset");
let selectWinningScore = document.getElementById("select");

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 0;
let isGameOver = false;

const playerOneClick = () => {
  if (!isGameOver) {
    playerOneScore += 1;
    if (playerOneScore === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      playerOne.disabled = true;
      playerTwo.disabled = true;
    }
      p1DisplayScore.innerHTML = playerOneScore;
  }
};

const playerTwoClick = () => {
  if (!isGameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      playerOne.disabled = true;
      playerTwo.disabled = true;
    }
    p2DisplayScore.innerHTML = playerTwoScore;
  }
};

const whenReset = () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  p1DisplayScore.textContent = playerOneScore;
  p2DisplayScore.textContent = playerTwoScore;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  playerOne.disabled = false;
  playerTwo.disabled = false;
  isGameOver = false;
};


reset.addEventListener("click", whenReset);

playerOne.addEventListener("click", playerOneClick);

playerTwo.addEventListener("click", playerTwoClick);

selectWinningScore.addEventListener('change', function (){
    winningScore = parseInt(this.value);
    whenReset();
})