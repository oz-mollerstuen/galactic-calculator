export default class NyteRat {
  constructor() {
    this.name = 'Nyte Rat';
    this.health = 12;
    this.atk = 3;
    this.exp = 15;
  }

  chance() {
    return Math.floor(Math.random() * 100) + 1;
  }

  attack(randNum) {
    if (randNum <= 60) {
      return this.atk;
    }else{
      return this.atk / 2;
    }
  }

  isDead() {
    if (this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }
}