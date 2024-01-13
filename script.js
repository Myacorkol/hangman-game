
const keyboard = document.querySelector(".game-area__keyboard");



//Create keyboard
for (let i = 97; i <= 122; i += 1) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
}