export default class Thief {
  constructor() {
    this.name = 'Sneeki Peatmoss';
    this.level = 1;
    this.maxHealth = 25;
    this.health = 25;
    this.atk = 5;
    this.mag = 5;
    this.maxMana = 10;
    this.mana = 10;
    this.exp = 0;
    this.location = '';
  }

  chance() {
    return Math.floor(Math.random() * 100) + 1;
  }

  attack(randNum) {
    if (randNum <= 80) {
      return this.atk;
    }else{
      return this.atk / 2;
    }
  }

  magic(randNum) {
    if (randNum <= 80) {
      return this.mag;
    } else {
      return this.mag / 2;
    }
  }

  lvlUp() {
    if (this.exp >= 60) {
      this.exp -= 60;
      this.level += 1;
      this.maxHealth += 5;
      this.health = this.maxHealth;
      this.atk += 2;
      this.mag += 2;
      this.maxMana += 3;
      this.mana = this.maxMana;
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