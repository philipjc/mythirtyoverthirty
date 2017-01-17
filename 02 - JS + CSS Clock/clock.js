
class Clock {

  constructor() {
    this.hourHand = document.querySelector('.hour-hand');
    this.minHand = document.querySelector('.min-hand');
    this.secondHand = document.querySelector('.second-hand');

    // this.tick();
  }

  setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsInDegrees = (seconds / 60) * 360;

    this.secondHand.attributes.style.transform = `rotate(${seconds}deg)`; // webkittransform??? 
  }

  tick() {
    setInterval(this.setDate, 1000);
  }
}

const clock = new Clock();



// base 100 the time
