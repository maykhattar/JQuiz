var questionBox = document.querySelector("#questionBox"); //Display queston "KO"
// var characterChoices = document.querySelectorAll(".characterChoices"); // Display choices
var characterBoxes = document.querySelectorAll(".characterBoxes"); // Boxes to click
var questionNoDisplay = document.querySelector("#questionNoDisplay"); //1 in 1/20
var totalQuestionNoDisplay = document.querySelector("#totalQuestionNoDisplay"); //20 in 1/20
var nextBtn = document.querySelector("#nextBtn");
var gameStatus = document.querySelector("#status");

var mode = ""; // to choose hiragana or katakana or romaji

var pickedCharacterRomaji = ""; //to show in romaji
var pickedCharacterSameForm = "";
var clickedCharacter = "";
var randomCharactersArray = [];
var characterList = [];
var characterArray = []; // to get characters according to mode. hiragana only for example.
var isOver = false;
var score = 0;
var totalGame = 1;
var wrongClick = 0;
init();

function init(){
  score = 0;
  totalGame = 1;
  reset();
}
function reset(){

    mode = ""; // to choose hiragana or katakana or romaji
    pickedCharacterRomaji = ""; //to show in romaji
    pickedCharacterSameForm = "";
    clickedCharacter = "";
    randomCharactersArray = [];
    characterList = [];
    characterArray = []; // to get characters according to mode. hiragana only for example.
    isOver = false;
  // get mode, default (hiragana)
    mode = "hiragana";
  // set characterList
    setupCharacterList();
  // get characterArray
    getCharacterArray();
  // call newGame
    newQuestion();
  //add event listener to characterBoxes
    characterBoxesEventListener();

  //Keep Score
}
function newGame(){
  gameStatus.textContent = "Choose the correct answer";
  totalGame++;
  if(totalGame<=20){
    reset();
    questionNoDisplay.textContent = totalGame;
    totalQuestionNoDisplay.textContent = "20";
  }
}
function characterBoxesEventListener(){
  for(var i=0;i<characterBoxes.length;i++){
      characterBoxes[i].addEventListener("click",function(){
        clickedCharacter = this.textContent;

        //Check answer
          if(isCorrect()){
            newGame();
            score++;
          }else{
            gameStatus.textContent = "Try Again!";
          }
      });
  }
}
function setupCharacters(){
  for(var i=0;i<randomCharactersArray.length;i++){
    characterBoxes[i].textContent = randomCharactersArray[i];
  }
}
function randomCharacter(){
  var randomNumber = Math.floor(Math.random()*6);
  return randomCharactersArray[randomNumber];
}
function isCorrect(){
  return clickedCharacter === pickedCharacterSameForm ? true:false;
}
function getCharacterArray(){
  for(var i=0;i<characterList.length;i++){
    if(mode === "hiragana"){
      characterArray[i] = characterList[i].hiragana;}
    // else if (mode === "katagana"){
    //   characterArray[i] = characterList[i].katakana;
    // }
  }
}
function getRandomCharactersArray(){
  var randomNumber = 0;
  for(var i=0;i<6;i++){
     randomNumber = Math.floor(Math.random()*46);
     randomCharactersArray.push(characterArray[randomNumber]);
  }
}
function newQuestion(){
  // get random characters for randomCharactersArray
    getRandomCharactersArray();
  // get random pickedCharacterRomaji from randomCharacterArray
    pickedCharacterSameForm= randomCharacter();
    var index = characterArray.indexOf(pickedCharacterSameForm);
    pickedCharacterRomaji = characterList[index].romaji;
  // show pickedCharacterRomaji to questionCharacter
    questionBox.textContent = pickedCharacterRomaji;
  // setup randomCharacterArray to characterBoxes
    setupCharacters();
}




function setupCharacterList(){
  characterList = [
    {
      hiragana :  "あ",
      romaji : "a",
      katakana : "ア",
      group : "A"
    },
    {
      hiragana :  "い",
      romaji : "i",
      katakana : "イ",
      group : "A"
    },
    {
      hiragana :  "う",
      romaji : "u",
      katakana : "ウ",
      group : "A"
    },
    {
      hiragana :  "え",
      romaji : "e",
      katakana : "エ",
      group : "A"
    },
    {
      hiragana :  "お",
      romaji : "o",
      katakana : "オ",
      group : "A"
    },
    {
      hiragana :  "か",
      romaji : "ka",
      katakana : "カ",
      group : "KA"
    },
    {
      hiragana :  "き",
      romaji : "ki",
      katakana : "キ",
      group : "KA"
    },
    {
      hiragana :  "く",
      romaji : "ku",
      katakana : "ク",
      group : "KA"
    },
    {
      hiragana :  "け",
      romaji : "ke",
      katakana : "ケ",
      group : "KA"
    },
    {
      hiragana :  "こ",
      romaji : "ko",
      katakana : "コ",
      group : "KA"
    },
    {
      hiragana :  "さ",
      romaji : "sa",
      katakana : "サ",
      group : "SA"
    },
    {
      hiragana :  "し",
      romaji : "shi",
      katakana : "シ",
      group : "SA"
    },
    {
      hiragana :  "す",
      romaji : "su",
      katakana : "ス",
      group : "SA"
    },
    {
      hiragana :  "せ",
      romaji : "se",
      katakana : "セ",
      group : "SA"
    },
    {
      hiragana :  "そ",
      romaji : "so",
      katakana : "ソ",
      group : "SA"
    },
    {
      hiragana :  "た",
      romaji : "ta",
      katakana : "タ",
      group : "TA"
    },
    {
      hiragana :  "ち",
      romaji : "chi",
      katakana : "チ",
      group : "TA"
    },
    {
      hiragana :  "つ",
      romaji : "tsu",
      katakana : "ツ",
      group : "TA"
    },
    {
      hiragana :  "て",
      romaji : "te",
      katakana : "テ",
      group : "TA"
    },
    {
      hiragana :  "と",
      romaji : "to",
      katakana : "ト",
      group : "TA"
    },
    {
      hiragana :  "な",
      romaji : "na",
      katakana : "ナ",
      group : "NA"
    },
    {
      hiragana :  "に",
      romaji : "ni",
      katakana : "ニ",
      group : "NA"
    },
    {
      hiragana :  "ぬ",
      romaji : "nu",
      katakana : "ヌ",
      group : "NA"
    },
    {
      hiragana :  "ね",
      romaji : "ne",
      katakana : "ネ",
      group : "NA"
    },
    {
      hiragana :  "の",
      romaji : "no",
      katakana : "ノ",
      group : "NA"
    },
    {
      hiragana :  "は",
      romaji : "ha",
      katakana : "ハ",
      group : "HA"
    },
    {
      hiragana :  "ひ",
      romaji : "hi",
      katakana : "ヒ",
      group : "HA"
    },
    {
      hiragana :  "ふ",
      romaji : "fu",
      katakana : "フ",
      group : "HA"
    },
    {
      hiragana :  "へ",
      romaji : "he",
      katakana : "ヘ",
      group : "HA"
    },
    {
      hiragana :  "ほ",
      romaji : "ho",
      katakana : "ホ",
      group : "HA"
    },
    {
      hiragana :  "ま",
      romaji : "ma",
      katakana : "マ",
      group : "MA"
    },
    {
      hiragana :  "み",
      romaji : "mi",
      katakana : "ミ",
      group : "MA"
    },
    {
      hiragana :  "む",
      romaji : "mu",
      katakana : "ム",
      group : "MA"
    },
    {
      hiragana :  "め",
      romaji : "me",
      katakana : "メ",
      group : "MA"
    },
    {
      hiragana :  "も",
      romaji : "mo",
      katakana : "モ",
      group : "MA"
    },
    {
      hiragana :  "ら",
      romaji : "ra",
      katakana : "ラ",
      group : "RA"
    },
    {
      hiragana :  "り",
      romaji : "ri",
      katakana : "リ",
      group : "RA"
    },
    {
      hiragana :  "る",
      romaji : "ru",
      katakana : "ル",
      group : "RA"
    },
    {
      hiragana :  "れ",
      romaji : "re",
      katakana : "レ",
      group : "RA"
    },
    {
      hiragana :  "ろ",
      romaji : "ro",
      katakana : "ロ",
      group : "RA"
    },
    {
      hiragana :  "や",
      romaji : "ya",
      katakana : "ヤ",
      group : "YA"
    },
    {
      hiragana :  "ゆ",
      romaji : "yu",
      katakana : "ユ",
      group : "YA"
    },
    {
      hiragana :  "よ",
      romaji : "yo",
      katakana : "ヨ",
      group : "YA"
    },
    {
      hiragana :  "わ",
      romaji : "wa",
      katakana : "ワ",
      group : "WA"
    },
    {
      hiragana :  "を",
      romaji : "o",
      katakana : "ヲ",
      group : "WA"
    },
    {
      hiragana :  "ん",
      romaji : "n",
      katakana : "ン",
      group : "WA"
    }
  ];
}
