(function() {

  function addStyle(element) {

    element.addEventListener('transitionend', (e) => {
      removeStyle(element);
    });

    element.classList.add('playing');

  }

  function removeStyle(element) {

    element.removeEventListener('transitionend', removeStyle);

    element.classList.remove('playing');

  }

  function findAudioToPlay(code) {

    var audioElement = document.querySelector('audio[data-key="'+ code +'"]');

    if (!audioElement) return;

    var keyElement = document.querySelector('.key[data-key="'+ code +'"]');

    addStyle(keyElement);

    audioElement.currentTime = 0;

    audioElement.play();

  }

  window.addEventListener('keydown', function(e) {

    var keyCode = e.keyCode;

    findAudioToPlay(keyCode);

  });

})();
