export default class OctoSlash {
  constructor() {
    this.name = 'Octo Slash';
    this.health = 12;
    this.atk = 3;
    this.exp = 10;
  }

  chance() {
    return Math.floor(Math.random() * 100) + 1;
  }

  attack(randNum) {
    if (randNum <= 50) {
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