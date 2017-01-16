
class Drumkit {

  constructor() {
    this.init();
  }

  init() {

    window.addEventListener('keydown', (e) => {

      this.playSound(e);

    });

  }

  playSound(e) {

    const keyCode = e.keyCode;

    this.findAudioToPlay(keyCode);

  }

  addStyle(element) {

    element.addEventListener('transitionend', (e) => {

      this.removeStyle(element);

    });

    element.classList.add('playing');

  }

  removeStyle(element) {

    element.removeEventListener('transitionend', this.removeStyle);

    element.classList.remove('playing');

  }

  findAudioToPlay(code) {

    const audioElement = document.querySelector('audio[data-key="'+ code +'"]');

    if (!audioElement) return;

    const keyElement = document.querySelector('.key[data-key="'+ code +'"]');

    this.addStyle(keyElement);

    audioElement.currentTime = 0;

    audioElement.play();

  }

}

const drums = new Drumkit();
