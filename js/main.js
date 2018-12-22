
window.addEventListener('load', init);
//Globals

// Available levels
const levels = {
  easy: 5,
  medium : 3,
  hard : 1
};

// To change levels
const  currentLevel = levels.easy ;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'collocations',
  'watching',
  'circle',
  'circlet',
  'cirrus',
  'citation',
  'calm',
  'sweet',
  'goal',
  'coding',
  'angel',
  'hat',
  'home',
  'claim',
  'clamber',
  'clamy',
  'dealership',
  'debacie',
  'dear',
  'desmond',
  'debate',
  'aim',
  'scam',
  'school',
  'is',
  'javascript',
  'service',
  'worker',
  'luteeph',
  'balogun',
  'agbero',
  'yoruba',
  'igbo',
  'aim',
  'play',
  'learn',
  'sleep',
  'code',
  'read',
  'burn',
  'bridges',
  'android'
];

// Initialize game
function init() {
  // SHow number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words); 
  //start matching on word input
  wordInput.addEventListener('input', startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

//Start Match
function startMatch(){
  if (matchWords()){
   isPlaying = true;
   time = currentLevel + 1;
   showWord(words);
   wordInput.value = '';
   score++;
  }
  // If the score is negative one display zero
  if (score === -1){
    scoreDisplay.innerHTML = 0;
  }else {
    scoreDisplay.innerHTML = score;
  }
  
}

// Match currentWord to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = "correct!!!";
    return true;
  }else {
    message.innerHTML = "Incorrect";
    return false;
  }
}

//Pick & show random word
function showWord(words){
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if(time > 0){
    //Decrement
    time--;

  }else if (time === 0){
    isPlaying = false;
  }
  // Show time
  timeDisplay. innerHTML = time;
}

// Check game status
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = "Game Over !!!";
    score = -1;
  }
}