import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserAge from './js/UserAge';

function handleform (event) {
  event.preventDefault();
  let currAge = document.getElementById('input1').value;
  let uAge = new UserAge(currAge)
  let mercCurr = 
  document.getElementById('p1').innerHTML = uAge.


}





window.addEventListener('load', function() {
  this.document.querySelector("form").addEventListener("submit", handleform)
});
