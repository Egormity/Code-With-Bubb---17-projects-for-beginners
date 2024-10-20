const button = document.querySelector('button');
const hex = document.querySelector('label');

const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const randomHexValue = () => {
    const randomHexPosition = Math.floor(Math.random() * hexArray.length);
    return hexArray[randomHexPosition];
};

const randomHex = () => {
    let hexString = ``;
    for (let i = 0; i < 6; i++){
        hexString += randomHexValue();
    }
    console.log(hexString);
}

button.addEventListener('click', () => {
    const finalHex = `#${randomHex()}`;
    document.body.style.setProperty('background-color', finalHex);
    hex.textContent = finalHex;
});