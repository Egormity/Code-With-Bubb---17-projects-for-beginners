const buttonAdd = document.getElementById('buttonAdd');
const buttonSub = document.getElementById('buttonSub');
const buttonReset = document.getElementById('buttonReset');
const resultDisplay = document.querySelector('H1');

let result = 0;
const maximum = 25;
const minimum = 0;

const display = () => {
    if (result > maximum){
        result = maximum;
    }
    if (result < minimum){
        result = minimum;
    }
    resultDisplay.textContent = result;
    document.body.style.setProperty('background-color', `hsl(${result / maximum * 360}, 50%, 50%)`)
}

buttonAdd.addEventListener('click', () => {
    result++;
    display();
});

buttonSub.addEventListener('click', () => {
    result--;
    display();
});

buttonReset.addEventListener('click', () => {
    result = 0;
    display();
});

display();