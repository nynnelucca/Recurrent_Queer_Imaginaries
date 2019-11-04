/*
Recurrent Queer Imaginaries (2019) by Winnie Soon and Helen Pritchard
More: http://siusoon.net/recurrent-queer-imaginaries/
Last update: 4 Nov 2019

CREDIT:
FONT - https://fontlibrary.org/en/font/textura-libera
GIF/motion graphic by Rafel Araujo - https://giphy.com/gifs/animation-loop-dark-xUA7aQJxHftDbAFMic
p5.js - https://p5js.org/

What it does:
- loading the source text and put each word into an array
- match the words based on the seed text and perform diastic generation
- Generate motto every x seconds with a loading transitional graphic
- the motto will type out character by character on display

How to use:
1. change the variable of seedtext
2. change the path of source text
3. change the variable of auto timer
4. change the transitional logo and loading time under setTimeout
5. change the speed of typing

Note:
source file:
- no punctuation e.g . , ! ? ( ) " " ; ' ', line break
*/
let font;
let text_size = 50;
let gif_incantation;
let gif_size = 750;
let rnnText;
let splitWord;
let seedText ="not for self but for all";
let timer = 60000;  //1 sec = 1000
let seedWord = [];
let finalWord =[];

function preload() {
  rnnText = loadStrings("data/RNN_EditedText.txt");
  //rnnText = loadStrings("data/input.csv");
  font = loadFont('libraries/TexturaLiberaTenuisX-Medium.otf');
  gif_incantation = createImg("data/incantation.gif", "incantation");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  splitWord = rnnText[0].split(" ");
  seedWord = seedText.split(" ");
  print(splitWord.length); //word count
  gif_incantation.size(gif_size,gif_size);
  gif_incantation.position(width/2-gif_size/2, height/2-gif_size/2);
  setInterval(generateMotto, timer);
}

function draw() {}

function generateMotto() {
  background(255);
  gif_incantation.show();
  setTimeout(loadMotto, 10000); //loading time
}

function loadMotto() {
  background(255);
  finalWord.splice(0);
  for (let i = 0; i<seedWord.length; i++) {
    for (let w = 0; w < seedWord[i].length; w++) {
      append(finalWord, diastic(seedWord[i].charAt(w),w));
    }
  }
  gif_incantation.hide();
  writeMotto();
}

function diastic(letter, pox) {
    //use a for loop to check against all the array items and see any matches the letter and pox
    //then push (append()) to a new temp array and at the end randomly pick one from that new temp array
    let tempList = [];
    for(let i=0; i<splitWord.length; i++) {
        if (splitWord[i].indexOf(letter) == pox) {
          append(tempList, splitWord[i]);
        }
    }
    let selectedPox = Math.floor(Math.random() * tempList.length);
    print(letter + ": " + tempList.length); //no of words are within the range based on the seed text
    return tempList[selectedPox];
}

function writeMotto() {
  let motto ="";
  let counter =0;
  for (let i=0; i<seedWord.length; i++){
      motto = motto + "\n" + seedWord[i].toUpperCase() +"(" + seedWord[i].length+ ") ";
    for (let c=0; c<seedWord[i].length; c++) {
      motto = motto + finalWord[counter].toLowerCase() + " ";
      counter++;
    }
  }
  // text design and Writing
  textFont(font);
  textSize(text_size);
  textAlign(LEFT, TOP);
  fill(0);
  noStroke();
  let sWidth = textWidth("NOT FOR SELF BUT FOR ALL");
  typeWriter(motto, 0, width/2-sWidth/2, height/4, 100);
}

function typeWriter (sentence, n, x, y, speed) {
  //text(motto, width/2-sWidth/2, height/4, width, height);
  if (n < (sentence.length)) {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function mousePressed() {
  //generateMotto();
}
