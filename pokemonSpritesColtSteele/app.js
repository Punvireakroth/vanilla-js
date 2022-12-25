const container = document.getElementById('container');
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


for(let i = 1; i < 31; i++){
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    const newImg = document.createElement('img');
    label.innerText = `${i}`;

    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;



    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    container.appendChild(pokemon);
    
}