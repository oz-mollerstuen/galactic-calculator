export default class Wizard {
  constructor() {
    this.health = 20;
    this.atk = 5;
    this.mag = 8;
  }
  chance() {
    return Math.floor(Math.random(100) + 1)
  }
  attack(randNum) {
    if (randNum <= 60) {
      return this.atk;
    }else{
      return this.atk / 2;
    }
  }
  magic(randNum) {
    if (randNum <= 85) {
      return this.mag;
    } else {
      return this.mag / 2;
    }
  }
}

