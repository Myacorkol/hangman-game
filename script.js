    //download html structure
    // Создаем структуру сайта в виде DOM-элементов
    const container = document.createElement('div');
    container.className = 'container';

    const introInner = document.createElement('div');
    introInner.className = 'intro__inner';

    const intoImg = document.createElement('img');
    intoImg.className = 'intro__img';
    intoImg.src = 'images/hangman-0.svg';

    const intoTitle = document.createElement('h1');
    intoTitle.className = 'title';
    intoTitle.textContent = 'Hangman game';

    const intoSubTitle = document.createElement('h3');
    intoSubTitle.className = 'subtitle';
    intoSubTitle.textContent = 'Thai questions';

    const gameAreaEl = document.createElement('div');
    gameAreaEl.className = 'game-area';

    const gameAreaList = document.createElement('ul');
    gameAreaList.className = 'game-area__secret';

    const gameAreaText = document.createElement('p');
    gameAreaText.className = 'game-area__hint';
    gameAreaText.textContent = 'Hint:';

    const gameAreaQuestion = document.createElement('b');
    gameAreaQuestion.className = 'game-area__text';

    const gameAreaQuesses = document.createElement('p');
    gameAreaQuesses.className = 'game-area__guesses';
    gameAreaQuesses.textContent = 'Hint:';

    const gameAreaSc = document.createElement('b');
    gameAreaSc.className = 'game-area__score';

    const gameAreaKey = document.createElement('div');
    gameAreaKey.className = 'game-area__keyboard';

    //popup

    const popupDiv = document.createElement('div');
    popupDiv.className = 'popup';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup__content';

    const popupImage = document.createElement('img');
    popupImage.className = 'popup__img';
    popupImage.src = 'images/lost.gif';

    const popupTitleItem = document.createElement('h3');
    popupTitleItem.className = 'popup__title';
    popupTitleItem.textContent = 'Game over';

    const gameAreaTextItem = document.createElement('p');
    gameAreaTextItem.className = 'popup__text';

    const gameAreaBtnItem = document.createElement('button');
    gameAreaBtnItem.className = 'popup__btn';
    gameAreaBtnItem.textContent = 'Play again:';



    // Получаем тег body и добавляем в него контейнер
    const body = document.querySelector('body');
    body.appendChild(container);
    body.appendChild(popupDiv);
    // Добавляем элементы в контейнер
    container.appendChild(introInner);
    container.appendChild(gameAreaEl);
    introInner.appendChild(intoImg);
    introInner.appendChild(intoTitle);
    introInner.appendChild(intoSubTitle);
    gameAreaEl.appendChild(gameAreaList);
    gameAreaEl.appendChild(gameAreaText);
    gameAreaText.appendChild(gameAreaQuestion);
    gameAreaEl.appendChild(gameAreaQuesses);
    gameAreaQuesses.appendChild(gameAreaSc);
    gameAreaEl.appendChild(gameAreaKey);
    popupDiv.appendChild(popupContent);
    popupContent.appendChild(popupImage);
    popupContent.appendChild(popupTitleItem);
    popupContent.appendChild(gameAreaTextItem);
    popupContent.appendChild(gameAreaBtnItem);



const keyboard = document.querySelector(".game-area__keyboard");
const WordsArea = document.querySelector(".game-area__secret");
const hintText = document.querySelector(".game-area__text");
const gameScore = document.querySelector(".game-area__score");
const gameImg = document.querySelector(".intro__img");
//modal
const modal = document.querySelector(".popup");
const modalImg = document.querySelector(".popup__img");
const modalTitle = document.querySelector(".popup__title");
const modalTextEnd = document.querySelector(".popup__text");
const modalButton = document.querySelector(".popup__btn");
const wordList = [
    {
        word: "phuket",
        hint: "The most popular island for tourism in Thailand"
    },
    {
        word: "plankton",
        hint: "They are bites you in the sea"
    },
    {
        word: "buddhizm",
        hint: "the most popular local religion"
    },
    {
        word: "banana",
        hint: "very tasty yellow fruit that grow only on palm trees"
    },
    {
        word: "muaythai",
        hint: "the most common type of boxing in Thailand"
    },
    {
        word: "chang",
        hint: "the most popular beer in Thailand"
    },
    {
        word: "hotel",
        hint: "many tourists stay at this place"
    },
    {
        word: "spongebob",
        hint: "Are you ready, kids? Aye, aye, Captain! Who lives in a pineapple under the sea?"
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "monks",
        hint: "These people wear yellow robes and live in temples"
    },
    {
        word: "instagram",
        hint: "Which social network are tourists sure to post a couple of vacation photos to?"
    },
    {
        word: "passport",
        hint: "What document must you have on hand when traveling?"
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "pattong",
        hint: "Which Phuket beach is considered the most party place on the island?"
    },
    {
        word: "summer",
        hint: "There is only one season in Phuket, which one?"
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "What will help you cheer up in the morning?"
    },
    {
        word: "motorbike",
        hint: "The most common transport in Thailand and Asia in general"
    },
    {
        word: "watermelon",
        hint: "The largest berry in the world"
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "snow",
        hint: "it is white and cold, in Thailand it can only be seen in the refrigerator"
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "marijuana",
        hint: "Which drug is completely legal in Thailand"
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "You are walking through the jungle and hear the sound of falling water, what could it be?"
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "andaman",
        hint: "On the shore of which sea is the Kingdom of Thailand located?"
    },
    {
        word: "monkeys",
        hint: "small agile animals that live in the jungle and love bananas"
    },
    {
        word: "English",
        hint: "What language do you need to know to communicate with foreigners?"
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "april",
        hint: "In what month is Thai New Year celebrated?"
    },
    {
        word: "illuzion",
        hint: "the name of the most popular club on the island of Phuket"
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "tenge",
        hint: "You can get sick of it if you'll be bitten by mosquitoes while on vacation"
    },
    {
        word: "snake",
        hint: "they are poisonous and crawl on the ground, there are more than 160 species of them in Thailand"
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
];
let wordVue = '';
let hintVue = '';
let currentWord;
let correctLetters = [];
let wrongAnswerCount = 0;
const maxAttempts = 6;

//reset game
const resetGame = () => {
    correctLetters = [];
    wrongAnswerCount = 0;
    gameImg.src = `images/hangman-${wrongAnswerCount}.svg`;
    gameScore.innerText = `${wrongAnswerCount} / ${maxAttempts}`;
    keyboard.querySelectorAll('button').forEach(btn => btn.disabled = false);
    WordsArea.innerHTML = wordVue.split("").map(() => `<li class="letter"></li>`).join("");
    modal.classList.remove('open');
}
//Получаем случайный объект из колекции wordList
function getRandomObject() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }
// Записываем информацию в переменные
  function setRandomInfo() {
    const randomObject = getRandomObject();
    wordVue = randomObject.word;
    hintVue = randomObject.hint;
    currentWord = wordVue;
    hintText.innerText = hintVue;
    resetGame();
  }
  const gameOver = (win) => {
    setTimeout(() => {
        //show modal function
        const modalText = win ? `You won, congratulations!` : `You lose, the correct word was:`;
        modalImg.src = `images/${win ? 'victory' : 'lost'}.gif`;
        modalTitle.innerText = `${win ? 'We have a winner' : 'Game over'}`;
        modalTextEnd.innerHTML = `${modalText} <b>${currentWord}</b>`;
        modal.classList.add('open');
    }, 400);

  }

  const initGame = (button, clickedLetter) => {
    //check exist or not
    if (currentWord.includes(clickedLetter)) {
        //show correct letters on the game desk
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                WordsArea.querySelectorAll("li")[index].innerText = letter;
                WordsArea.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongAnswerCount += 1;
        gameImg.src = `images/hangman-${wrongAnswerCount}.svg`;
    }
    button.disabled = true;
    gameScore.innerText = `${wrongAnswerCount} / ${maxAttempts}`;
    //checking game status
    if (wrongAnswerCount === maxAttempts) {
        return gameOver (false);
    }
    if (correctLetters.length === currentWord.length) {
        return gameOver (true);
    }


  }

//Create keyboard and add Event listeners for any button
for (let i = 97; i <= 122; i += 1) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}
getRandomObject();
setRandomInfo();
modalButton.addEventListener('click', function() {
    getRandomObject();
    setRandomInfo();
})
console.log(wordVue, hintVue);
