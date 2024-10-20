const newColorBtnElement = document.getElementById('newColorButton');
const currentColorElement = document.getElementById('currentColor');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);

    const randomHexValue = hexValues[randomIndexPosition];

    return randomHexValue;
}

function getRandomHexString(stringLenght){
    let hexString = '';
    for (let i = 0; i < stringLenght; i++){
        hexString += getRandomHexValue();
    }

    return hexString;
}

newColorBtnElement.addEventListener('click', () => {
    const randomHexString = `#${getRandomHexString(6)}`;

    document.body.style.setProperty('background-color', randomHexString);
    currentColorElement.textContent = randomHexString;
});