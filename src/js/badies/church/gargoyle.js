export default class Gargoyle {
  constructor() {
    this.name = 'Gargoyle';
    this.health = 20;
    this.atk = 4;
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