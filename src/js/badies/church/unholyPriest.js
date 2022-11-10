export default class unholyPriest {
  constructor() {
    this.name = 'Unholy Priest';
    this.health = 25;
    this.atk = 5;
    this.exp = 20;
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