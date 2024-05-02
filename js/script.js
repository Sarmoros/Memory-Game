const emojis = ["⭐", "⭐", "🌈", "🌈", "🌞", "🌞", "🌙", "🌙", "🌎", "🌎", "🦄", "🦄", "🌺", "🌺", "🥥", "🥥"];

var shuf_emojis = emojis.sort(() => (Math.random() > .5 ) ? 2 : -1);
for (var i=0; i<emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function() {
        this.classList.add('flipped'); 
        setTimeout(function() {
            if (document.querySelectorAll('.flipped').length > 1){
                if (document.querySelectorAll('.flipped')[0].innerHTML == document.querySelectorAll('.flipped')[1].innerHTML){
                    document.querySelectorAll('.flipped')[0].classList.add('boxMatch')
                    document.querySelectorAll('.flipped')[1].classList.add('boxMatch')

                    document.querySelectorAll('.flipped')[1].classList.remove('flipped')
                    document.querySelectorAll('.flipped')[0].classList.remove('flipped')
                    
                    if (document.querySelectorAll('.boxMatch').length == emojis.length){
                        alert('You win!')
                    } 
                } else {
                    document.querySelectorAll('.flipped')[1].classList.remove('flipped')
                    document.querySelectorAll('.flipped')[0].classList.remove('flipped')
                    }
                }
        },500)
    }

    document.querySelector('.game').appendChild(box);
}