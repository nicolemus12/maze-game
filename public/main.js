let player;
let celina;

function preload() {
  celina = loadImage("public/images/celina.png");
}

function setup() {
  createCanvas(500, 500);
  player = new Player(30, 40, 70, 70, "celina", celina)
  maze = new Maze();
}

function draw() {
  background(220, 246, 252);
  maze.drawMaze();
  
  player.displayCharacter(); // displays character
  player.move(maze.getLine()); // makes character move if wasd keys r held

}

