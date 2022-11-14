import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserAge from './js/UserAge';

function handleform (event) {
  event.preventDefault();
  let currAge = document.getElementById('input1').value;
  let uAge1 = new UserAge(currAge)
  uAge1.findMercAge()
  let currAgeMerc = uAge1.mercury
  document.getElementById('p1a').innerHTML = currAgeMerc
 
  document.getElementById('p1b').innerHTML =  uAge1.mercYears()

  uAge1.findVenAge()
  let currAgeVen = uAge1.venus
  document.getElementById('p2a').innerHTML = currAgeVen
 
  document.getElementById('p2b').innerHTML =  uAge1.venYears()

  uAge1.findMarsAge()
  let currAgeMars = uAge1.mars
  document.getElementById('p3a').innerHTML = currAgeMars
 
  document.getElementById('p3b').innerHTML =  uAge1.marsYears()

  uAge1.findJupAge()
  let currAgeJup = uAge1.jupiter
  document.getElementById('p4a').innerHTML = currAgeJup
 
  document.getElementById('p4b').innerHTML =  uAge1.jupYears()
}






window.addEventListener('load', function() {
  this.document.querySelector("form").addEventListener("submit", handleform)
});
