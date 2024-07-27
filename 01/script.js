function removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) 
        return;
    key.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) 
        return; //stops function
    audio.currentTime = 0; //rewinds audio to start 
    audio.play();
    key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound)
  window.addEventListener('keyup', removeTransition)