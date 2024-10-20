const counterAdd = document.getElementById('counterAdd');
const counterSub = document.getElementById('counterSub');
const counterDisplay = document.getElementById('counterDisplay');

let total = 0;
const limitUp = 10;
const limitLow = 0;

const updateCounterDisplay = () => {
    if (total > limitUp){
        total = limitUp
    }
    if (total < limitLow){
        total = limitLow
    }
    counterDisplay.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${total / limitUp * 255}, 64, 0)`)
};

counterAdd.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
});

counterSub.addEventListener('click', () => {
    total -= 1;
    updateCounterDisplay();
});

updateCounterDisplay();