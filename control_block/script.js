window.addEventListener('load', function(){
    let block = document.getElementById('block');
    // position Y controll
    let posY = document.getElementById('pos-y');

    posY.addEventListener('input', function(){
        block.style.top = posY.value + 'px';
    })
    
    // position x
    let posX = document.getElementById('pos-x');
    posX.addEventListener('input', function(){
        block.style.left = posX.value + 'px';
    })

    // size of the block
    let size = document.getElementById('size');
    size.addEventListener('input', function(){
        block.style.transform = `scale(${size.value})`;
    })
      
})
