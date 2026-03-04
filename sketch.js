let currentEra = 0; // 0 = Present, 1 = Manchu, 2 = 90s
let isLoading = false;
let loadProgress = 0;

// background image hiine
let imgPresent, imgManchu, imgNineties;

function preload() {
  // url iig ni solino
  imgPresent = loadImage('https://i.imgur.com/OW0hH6v.jpg'); // modern city / computer
  imgManchu = loadImage('https://i.imgur.com/J0lXx0Y.jpg');   // Manchu / Mongolia style
  imgNineties = loadImage('https://i.imgur.com/GmY5f3L.jpg'); // 90s classroom / retro
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  if (isLoading) {
    drawLoading();
    return;
  }

  if (currentEra === 0) drawPresent();
  if (currentEra === 1) drawManchu();
  if (currentEra === 2) drawNineties();
}

function keyPressed() {
  if (key === ' ') {
    startLoading();
  }
}

function startLoading() {
  isLoading = true;
  loadProgress = 0;
}

// loading delgets
function drawLoading() {
  background(0);

  fill(255);
  textSize(32);
  text("Loading historical memory...", width / 2, height / 2 - 50);

  // progress bar
  stroke(255);
  noFill();
  rect(width / 2 - 200, height / 2, 400, 30);

  noStroke();
  fill(0, 255, 0);
  rect(width / 2 - 200, height / 2, 4 * loadProgress, 30);

  loadProgress += 1;

  if (loadProgress >= 100) {
    isLoading = false;
    currentEra++;
    if (currentEra > 2) currentEra = 0; // loop back
  }
}

// present era
function drawPresent() {
  if (imgPresent) {
    image(imgPresent, 0, 0, width, height);
  } else {
    background(10);
  }

  fill(0, 255, 0);
  textSize(40);
  text("YEAR: 2026", width / 2, 100);

  textSize(18);
  for (let i = 0; i < 20; i++) {
    let y = (frameCount * 2 + i * 40) % height;
    fill(0, 255, 0);
    text("> system.online();", width / 2, y);
  }

  fill(255);
  textSize(20);
  text("Press SPACE to travel", width / 2, height - 60);
}

// majiin uy
function drawManchu() {
  if (imgManchu) {
    image(imgManchu, 0, 0, width, height);
  } else {
    background(30, 60, 120);
  }

  fill(255);
  textSize(40);
  text("MANCHU PERIOD", width / 2, 100);

  // simple moving fog
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(255, 255, 255, 30);
    let x = (frameCount + i * 50) % width;
    ellipse(x, height / 2 + sin(frameCount * 0.01 + i) * 50, 200, 100);
  }

  fill(255);
  textSize(20);
  text("Press SPACE to travel", width / 2, height - 60);
}

// 90n onii uy
function drawNineties() {
  if (imgNineties) {
    image(imgNineties, 0, 0, width, height);
  } else {
    background(50);
  }

  fill(255);
  textSize(40);
  text("1990s ERA", width / 2, 100);

  // glitch lines
  for (let i = 0; i < 10; i++) {
    stroke(random(255), random(255), random(255));
    line(0, random(height), width, random(height));
  }

  noStroke();
  fill(255);
  textSize(20);
  text("Press SPACE to travel", width / 2, height - 60);
}