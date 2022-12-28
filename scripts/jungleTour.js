function playsound(e) {
    let keyCode = null;
    if( typeof e == 'object') {
        keyCode = e.keyCode;
    } else {
        keyCode = parseInt(e);
    }
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(sound) {
        sound.currentTime = 0;
        sound.play();
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        key.classList.add('playing');

        // Remove playing class on audio ended
        sound.addEventListener('ended', () => {
          key.classList.remove('playing');
        })
    }
}
window.addEventListener('keydown', playsound);

// Onclick event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', function() {
    playsound(this.getAttribute('data-key'))
}));

// Remove playing class on transitionEnd
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', function(e) {
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }))