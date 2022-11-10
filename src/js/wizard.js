export default class Wizard {
  constructor() {
    this.name = 'Goat Pope';
    this.level = 1;
    this.maxHealth = 20;
    this.health = 20;
    this.atk = 4;
    this.mag = 8;
    this.maxMana = 20;
    this.mana = 20;
    this.exp = 0;
    this.location = '';
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

  magic(randNum) {
    if (randNum <= 85) {
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

