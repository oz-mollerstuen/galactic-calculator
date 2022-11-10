export default class Warrior {
  constructor() {
    this.name = 'Billi the Beserker';
    this.level = 1;
    this.maxHealth = 15;
    this.health = 15;
    this.atk = 9;
    this.mag = 2;
    this.maxMana = 5;
    this.mana = 5;
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
    if (randNum <= 50) {
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