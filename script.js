function contactTeam(productName) {
    alert(`Thank you for your interest in ${productName}. Please contact our team at the following numbers: +20 106 351 5106 +20 102 966 5151 +20 109 356 5359`);
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
