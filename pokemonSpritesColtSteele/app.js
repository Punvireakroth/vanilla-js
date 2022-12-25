const container = document.getElementById('container');
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


for(let i = 1; i < 800; i++){
    const newImg = document.createElement('img');

    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    container.appendChild(newImg);
}