
const keyboard = document.querySelector(".game-area__keyboard");
const WordsArea = document.querySelector(".game-area__secret");
const hintText = document.querySelector(".game-area__text");
const gameScore = document.querySelector(".game-area__score");
const gameImg = document.querySelector(".intro__img");
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
        word: "bananas",
        hint: "very tasty yellow fruits that grow only on palm trees"
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
        word: "Spongebob",
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
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
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
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
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
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
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
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
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
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
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
    WordsArea.innerHTML = wordVue.split("").map(() => `<li class="letter"></li>`).join("");
  }

  const initGame = (button, clickedLetter) => {
    console.log(button, clickedLetter);
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
console.log(wordVue, hintVue);