import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Wizard from '../src/js/wizard.js';
import OctoSlash from '../src/js/badies/cave/octoSlash.js';

let currCharacter;
let currBadie;

const handleWizard = (event) => {
  event.preventDefault();
  currCharacter = new Wizard();
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('heroHealth').innerHTML = currCharacter.health;
  document.getElementById('heroAttack').innerHTML = currCharacter.atk;
  document.getElementById('heroMagic').innerHTML = currCharacter.mag;
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
  if (currCharacter.location === "cave") {
    currBadie = new OctoSlash();
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
  currBadie.health -= currCharacter.attack(currCharacter.chance())
  document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
  if (!currBadie.isDead()) {
    currCharacter.health -= currBadie.attack(currBadie.chance())
    document.getElementById("heroHealth").innerText = currCharacter.health;
  } else {
    currCharacter.exp += currBadie.exp;
    document.getElementById("heroExp").innerText = currCharacter.exp
    document.getElementById("badieName").innerText = "That's some fine Taco Nagiri";
    document.getElementById('choice').removeAttribute('class', 'hidden');
    document.getElementById('moves').setAttribute('class', 'hidden');
  }
  if (currCharacter.isDead()) {
    document.getElementById("dead").innerText = 'DEAD MEAT!';
    document.getElementById('moves').setAttribute('class', 'hidden');
    document.getElementById('reset').removeAttribute('class', 'hidden');
  }
};

const handleMagic = (event) => {
  event.preventDefault();
  currBadie.health -= currCharacter.magic(currCharacter.chance())
  document.getElementById("badieHealth").innerText = `Health: ${currBadie.health}`;
  if (!currBadie.isDead()) {
    currCharacter.health -= currBadie.attack(currBadie.chance())
    document.getElementById("heroHealth").innerText = currCharacter.health;
  } else {
    currCharacter.exp += currBadie.exp;
    document.getElementById("heroExp").innerText = currCharacter.exp
    document.getElementById("badieName").innerText = "That's some fine Taco Nagiri";
    document.getElementById('choice').removeAttribute('class', 'hidden');
    document.getElementById('moves').setAttribute('class', 'hidden');
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
  document.getElementById('cave').addEventListener('click', handleCave);
  document.getElementById('church').addEventListener('click', handleChurch);
  document.getElementById('engage').addEventListener('click', handleEngage);
  document.getElementById('leave').addEventListener('click', handleLeave);
  document.getElementById('attack').addEventListener('click', handleAttack);
  document.getElementById('magic').addEventListener('click', handleMagic);
  document.getElementById('restart').addEventListener('click', handleRestart);
});

