let playerOne = document.getElementById('p1Button');
let playerTwo = document.getElementById('p2Button');
let reset = document.getElementById('reset');
let scorePlayerOne = document.getElementById('p1Score');
let scorePlayerTwo = document.getElementById('p2Score');



const resetClick = () => {
    alert("Reset Clicked");
}

reset.addEventListener('click', resetClick);