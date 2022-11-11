import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Wizard from '../src/js/wizard.js';
import Warrior from '../src/js/warrior.js';
import Thief from '../src/js/thief.js';
import OctoSlash from './js/badies/cave/octoSlash.js';
import NyteRat from './js/badies/cave/nyterat.js';
import Gargoyle from './js/badies/church/gargoyle.js';
import UnholyPriest from './js/badies/church/unholypriest.js';
import octoSlash from './assets/images/octoslash.png';
import nyteRat from './assets/images/nyterat.png';
import gargoyle from './assets/images/gargoyle.png';
import unholy from './assets/images/unholy.png';

let currCharacter;
let currBadie;

const handleWizard = (event) => {
  event.preventDefault();
  currCharacter = new Wizard();
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('charImg').setAttribute("src", "assets/images/goatpope.png");
  document.getElementById('heroName').innerHTML = currCharacter.name;
  document.getElementById('heroLevel').innerHTML = currCharacter.level;
  document.getElementById('heroHealth').innerHTML = currCharacter.health;
  document.getElementById('heroAttack').innerHTML = currCharacter.atk;
  document.getElementById('heroMagic').innerHTML = currCharacter.mag;
  document.getElementById('heroMana').innerHTML = currCharacter.mana;
  document.getElementById('heroExp').innerHTML = currCharacter.exp;
};

const handleWarrior = (event) => {
  event.preventDefault();
  currCharacter = new Warrior();
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('charImg').setAttribute("src", "assets/images/warrior.png");
  document.getElementById('heroName').innerHTML = currCharacter.name;
  document.getElementById('heroLevel').innerHTML = currCharacter.level;
  document.getElementById('heroHealth').innerHTML = currCharacter.health;
  document.getElementById('heroAttack').innerHTML = currCharacter.atk;
  document.getElementById('heroMagic').innerHTML = currCharacter.mag;
  document.getElementById('heroMana').innerHTML = currCharacter.mana;
  document.getElementById('heroExp').innerHTML = currCharacter.exp;
};

const handleThief = (event) => {
  event.preventDefault();
  currCharacter = new Thief();
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('charImg').setAttribute("src", "assets/images/thief.png");
  document.getElementById('heroName').innerHTML = currCharacter.name;
  document.getElementById('heroLevel').innerHTML = currCharacter.level;
  document.getElementById('heroHealth').innerHTML = currCharacter.health;
  document.getElementById('heroAttack').innerHTML = currCharacter.atk;
  document.getElementById('heroMagic').innerHTML = currCharacter.mag;
  document.getElementById('heroMana').innerHTML = currCharacter.mana;
  document.getElementById('heroExp').innerHTML = currCharacter.exp;
};

const handleCave = (event) => {
  event.preventDefault();
  currCharacter.location = 'cave';
  document.getElementById('locations').setAttribute('class', 'hidden');
  document.getElementById('choice').removeAttribute('class', 'hidden');
};

const handleChurch = (event) => {
  event.preventDefault();
  currCharacter.location = 'church';
  document.getElementById('locations').setAttribute('class', 'hidden');
  document.getElementById('choice').removeAttribute('class', 'hidden');
};

const handleEngage = (event) => {
  event.preventDefault();
  let randomizer = currCharacter.chance();
  if (currCharacter.location === "cave") {
    if (randomizer <= 50) {
      currBadie = new OctoSlash();
      document.getElementById("badieImg").setAttribute("src", octoSlash);
    } else {
      currBadie = new NyteRat();
      document.getElementById("badieImg").setAttribute("src", nyteRat);
    }
    document.getElementById('badieName').setAttribute('style', 'color: black;')
    document.getElementById("badieName").innerText = currBadie.name;
    document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
  } else {
    if (randomizer <= 70) {
      currBadie = new Gargoyle();
      document.getElementById("badieImg").setAttribute("src", gargoyle);
    } else {
      currBadie = new UnholyPriest();
      document.getElementById("badieImg").setAttribute("src", unholy);
    }
    document.getElementById('badieName').setAttribute('style', 'color: black;')
    document.getElementById("badieName").innerText = currBadie.name;
    document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
  }
  document.getElementById('choice').setAttribute('class', 'hidden');
  document.getElementById('moves').removeAttribute('class', 'hidden');
};

const handleLeave = (event) => {
  event.preventDefault();
  currCharacter.location = '';
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('choice').setAttribute('class', 'hidden');
  //picture

};

const handleAttack = (event) => {
  event.preventDefault();
  let curAttack = currCharacter.attack(currCharacter.chance());
  document.getElementById("dead").innerText = null;
  currBadie.health -= curAttack;
  document.getElementById("badieAtkDamage").innerHTML = `-${curAttack}`;
  document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
  if (!currBadie.isDead()) {
    curAttack = currBadie.attack(currBadie.chance())
    currCharacter.health -= curAttack;
    document.getElementById("heroHealth").innerText = currCharacter.health;
    document.getElementById("atkDamage").innerHTML = `-${curAttack}`;
  } else {
    currCharacter.exp += currBadie.exp;
    currCharacter.lvlUp();
    document.getElementById('heroName').innerHTML = currCharacter.name;
    document.getElementById('heroLevel').innerHTML = currCharacter.level;
    document.getElementById('heroHealth').innerHTML = currCharacter.health;
    document.getElementById('heroAttack').innerHTML = currCharacter.atk;
    document.getElementById('heroMagic').innerHTML = currCharacter.mag;
    document.getElementById('heroMana').innerHTML = currCharacter.mana;
    document.getElementById('heroExp').innerHTML = currCharacter.exp;
    document.getElementById("heroExp").innerText = currCharacter.exp;
    if (currCharacter.mana + 3 < currCharacter.maxMana) {
      currCharacter.mana += 3;
    } else {
      currCharacter.mana = currCharacter.maxMana;
    }
    document.getElementById('heroMana').innerHTML = currCharacter.mana;
    document.getElementById('badieName').setAttribute('style', 'color: red;')
    document.getElementById("badieName").innerText = "DEAD MEAT!";
    document.getElementById("badieAtkDamage").innerHTML = null;
    document.getElementById("atkDamage").innerHTML = null;
    document.getElementById('badieHealth').innerHTML = null;
    document.getElementById('choice').removeAttribute('class', 'hidden');
    document.getElementById('moves').setAttribute('class', 'hidden');
  }
  if (currCharacter.isDead()) {
    document.getElementById("dead").innerText = 'DEAD MEAT!';
    document.getElementById('heroHealth').innerHTML = 0;
    document.getElementById('moves').setAttribute('class', 'hidden');
    document.getElementById('reset').removeAttribute('class', 'hidden');
  }
};

const handleMagic = (event) => {
  event.preventDefault();
  let curAttack;
  if (currCharacter.mana < 3) {
    document.getElementById("dead").innerText = 'NOT ENOUGH MANA!';
  } else {
    document.getElementById("dead").innerText = null;
    currCharacter.mana -= 3;
    document.getElementById('heroMana').innerHTML = currCharacter.mana;
    curAttack = currCharacter.magic(currCharacter.chance());
    currBadie.health -= curAttack;
    document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
    document.getElementById("badieAtkDamage").innerHTML = `-${curAttack}`;
    if (!currBadie.isDead()) {
      curAttack = currBadie.attack(currBadie.chance());
      currCharacter.health -= curAttack;
      document.getElementById("heroHealth").innerText = currCharacter.health;
      document.getElementById("atkDamage").innerHTML = `-${curAttack}`;
    } else {
      currCharacter.exp += currBadie.exp;
      currCharacter.lvlUp();
      document.getElementById('heroName').innerHTML = currCharacter.name;
      document.getElementById('heroLevel').innerHTML = currCharacter.level;
      document.getElementById('heroHealth').innerHTML = currCharacter.health;
      document.getElementById('heroAttack').innerHTML = currCharacter.atk;
      document.getElementById('heroMagic').innerHTML = currCharacter.mag;
      document.getElementById('heroMana').innerHTML = currCharacter.mana;
      document.getElementById('heroExp').innerHTML = currCharacter.exp;
      document.getElementById("heroExp").innerText = currCharacter.exp;
      document.getElementById('badieName').setAttribute('style', 'color: red;');
      document.getElementById("badieName").innerText = "DEAD MEAT!";
      document.getElementById("atkDamage").innerHTML = null;
      document.getElementById("badieAtkDamage").innerHTML = null;
      if (currCharacter.mana + 3 < currCharacter.maxMana) {
        currCharacter.mana += 3;
      } else {
        currCharacter.mana = currCharacter.maxMana;
      }
      document.getElementById('heroMana').innerHTML = currCharacter.mana;
      document.getElementById('badieHealth').innerHTML = null;
      document.getElementById('choice').removeAttribute('class', 'hidden');
      document.getElementById('moves').setAttribute('class', 'hidden');
    }
    if (currCharacter.isDead()) {
      document.getElementById("dead").innerText = 'DEAD MEAT!';
      document.getElementById('heroHealth').innerHTML = 0;
      document.getElementById('moves').setAttribute('class', 'hidden');
      document.getElementById('reset').removeAttribute('class', 'hidden');
    }
  }
};

const handleHeal = (event) => {
  event.preventDefault();
  if (currCharacter.mana < 5) {
    document.getElementById("dead").innerText = 'NOT ENOUGH MANA!';
  } else {
    currCharacter.health = currCharacter.maxHealth;
    currCharacter.mana -= 5;
    document.getElementById('heroHealth').innerHTML = currCharacter.health;
    document.getElementById('heroMana').innerHTML = currCharacter.mana;
    currCharacter.health -= currBadie.attack(currBadie.chance())
    document.getElementById("heroHealth").innerText = currCharacter.health;
  }
  if (currCharacter.isDead()) {
    document.getElementById("dead").innerText = 'DEAD MEAT!';
    document.getElementById('moves').setAttribute('class', 'hidden');
    document.getElementById('reset').removeAttribute('class', 'hidden');
  }
};

const handleRestart = () => {
  window.location.reload();
};

addEventListener('load', function () {
  document.getElementById('wizard').addEventListener('click', handleWizard);
  document.getElementById('warrior').addEventListener('click', handleWarrior);
  document.getElementById('thief').addEventListener('click', handleThief);
  document.getElementById('cave').addEventListener('click', handleCave);
  document.getElementById('church').addEventListener('click', handleChurch);
  document.getElementById('engage').addEventListener('click', handleEngage);
  document.getElementById('leave').addEventListener('click', handleLeave);
  document.getElementById('attack').addEventListener('click', handleAttack);
  document.getElementById('magic').addEventListener('click', handleMagic);
  document.getElementById('heal').addEventListener('click', handleHeal);
  document.getElementById('restart').addEventListener('click', handleRestart);
});

