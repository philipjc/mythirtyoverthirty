
class Drumkit {

  constructor() {
    this.init();
  }

  init() {

    window.addEventListener('keydown', (e) => {

      const keyCode = e.keyCode;

      findAudioToPlay(keyCode);

    });

  }

  addStyle(element) {

    element.addEventListener('transitionend', (e) => {

      removeStyle(element);

    });

    element.classList.add('playing');

  }

  removeStyle(element) {

    element.removeEventListener('transitionend', removeStyle);

    element.classList.remove('playing');

  }

  findAudioToPlay(code) {

    const audioElement = document.querySelector('audio[data-key="'+ code +'"]');

    if (!audioElement) return;

    const keyElement = document.querySelector('.key[data-key="'+ code +'"]');

    addStyle(keyElement);

    audioElement.currentTime = 0;

    audioElement.play();

  }

}

const drums = new Drumkit;
drums();
