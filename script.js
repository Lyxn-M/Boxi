function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}
let counter = 400; 
const goal = 500; 
const progressBar = document.getElementById('progress');
const counterElement = document.getElementById('counter');


function updateCounter() {
  counterElement.textContent = counter;
  const progressWidth = (counter / goal) * 100;
  progressBar.style.width = `${progressWidth}%`;
}


function incrementCounter() {
  counter++;
  updateCounter();
}


counter = 0;
updateCounter();
