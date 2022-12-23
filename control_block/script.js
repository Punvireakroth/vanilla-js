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


    //opacity of the block
    let opacity = this.document.getElementById('opacity');
    opacity.addEventListener('input', function(){
        block.style.opacity = opacity.value;
    })

    //shape of the block
    let okButton = document.getElementById('ok-shape');
    let shape = document.getElementById('select');

    okButton.addEventListener('click', function(){
        if(shape.value == '1'){
            block.style.borderRadius = '0';
            block.style.transform = `rotate(0deg)`;
        } else if(shape.value == '2'){
            block.style.borderRadius = '50%';
        }else if(shape.value === '3'){
            block.style.borderRadius = '0';
            block.style.transform = `rotate(45deg)`;
        }
    })
})
