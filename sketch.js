let intro;
let begin;
let large;
let swimming;
let backg;
let tfont;
let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";

let hasDied = false;
let hasKilled = false;
let hasGreen = false;

function preload() {

  intro = loadImage('Merauder.gif'); //0
  begin = loadImage('MerauderShield.png'); // 1
  attack = loadImage('MerauderGreen.jpg'); // 2
  udead = loadImage('Marauder2.jpg'); // 3
  hisdead = loadImage('MerauderDead.jpg'); // 4
  backg = loadImage('Demon.jpg');
  tfont = loadFont('amazdoom/AmazDooMLeft.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(tfont);
  textSize(57);
  fill(255,165,0);
}

function draw() {
  background(backg);

  text("Merauder Demon V.S DoomGuy", 680, 100, 500, 500);
  text("COMMANDS = Intro, Begin, Shoot, Dash", 2, 20, 500, 200);

  if (state == nextState) {
    if (state == 0) {
      image(intro, 670, 300);
    } else if (state == 1) {
      image(begin, 670, 300);
    } else if (state == 2) {
      image(attack, 670, 300);
    } else if (state == 3) {
      image(udead, 670, 300);
    }
      else if(state == 4){
      image(hisdead,670,300);
    }
  } else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }

    let a = map(counter, 0, 30, 0, 255);
    tint(255, a);
    if (nextState == 0) {
      image(intro, 670, 300);
    } else if (nextState == 1) {
      image(begin, 670, 300);
    } else if (nextState == 2) {
      image(attack, 670, 300);
    } else if (nextState == 3) {
      image(udead, 670, 300);
    }
      else if (nextState == 4) {
      image(hisdead, 670, 300);
    }
    tint(255, 255 - a);
    if (state == 0) {
      image(intro, 670, 300);
    } else if (state == 1) {
      image(begin, 670, 300);
    } else if (state == 2) {
      image(attack, 670, 300);
    } else if (state == 3) {
      image(udead, 670, 300);
    }
    else if (nextState == 4) {
      image(hisdead, 670, 300);
    }
  }

  text(typed, 850, 750, width, 300);

  text(story, 650, 600, 700, 150);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } else if (key == '1') {
    nextState = 1;
  } else if (key == '2') {
    nextState = 2;
  } else if (key == '3') {
    nextState = 3;
  } else if (key == '4') {
    nextState = 4;

  } else if (keyCode == RETURN) {


    if(typed == 'intro'){
      nextState = 0;
      hasDied = false;
      hasKilled = false;
      hasGreen = false;
      typed = '';
      story = "Shoot the Merdauder When His Eyes Are Green"
    }
    else if(typed == 'begin'){
      nextState = 1;
      typed = '';
      story = "Merauder Has Put Up His Shield."
    }
    else if(typed == 'shoot' && nextState == 1){

      typed = '';
      nextState = 3;
      story = 'The Merauder Has Killed you, type "Intro" to restart';
    }
    else if(typed == 'shoot' && nextState == 2){
      hasKilled == true;
      typed ='';
      nextState = 4;
      story = 'You have Killed The Merauder, Congratulations';
    }
    else if(typed == 'dash' && nextState == 1){
      nextState = 2;
      typed = '';
      story = 'The Merdauder is Attacking'
    }
    else if(typed == 'dash' && nextState == 2){
      nextState = 1;
      typed = '';
      story = "Merauder Has Put Up His Shield."
    }

  } else {
    typed += key;
  }
}
