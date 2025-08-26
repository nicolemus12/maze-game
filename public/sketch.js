let player;
let celina;

function preload() {
  celina = loadImage("/public/images/celina.png");
}

function setup() {
  createCanvas(500, 500);
  player = new Player(0, 20, 40, 40, celina)
}

function draw() {
  background(220, 246, 252);

  //   MAZE 1
    strokeWeight(6);
    line(120, 2, 120, 350);
    line(210, 2, 210, 120);
    line(250, 250, 250, 350);
    line(330, 350, 330, 430);
    line(120, 120, 210, 120);
    line(500, 250, 250, 250);
    line(500, 350, 250, 350);
      line(120, 430, 0, 430);

    textSize(20);
    fill('green'); // text for the entrance in green
    text('ENTRANCE', 5, 30);

    textSize(22);
    fill('red'); //text for the exit in red
    text('EXIT', 40, 470);

  player.display(); // displays character
  // player.handleInput(); // makes character move if wasd keys r held
}

