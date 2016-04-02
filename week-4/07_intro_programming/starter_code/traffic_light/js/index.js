document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
  
  function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
} 
  
function illuminateYellow() {
	clearLights();
  document.getElementById('slowLignt').style.backgroundColor = "yellow";
  
  function clearLights() {

  document.getElementById('slowLight').style.backgroundColor = "black";
}

function illuminateGreen() {
	clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
  
  function clearLights() {

  document.getElementById('goLight').style.backgroundColor = "black";
}

