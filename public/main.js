/*
This file is where all the components of the code will be loaded, initialized and drawn.
This is where all the images will be loaded, where objects are be created and where methods 
will be called.

This is the main file and is where the program starts.
It is where all the components of the code will be loaded, initialized and drawn.
*/


/* 
These variables are defined at the top of the file as global variables.
This is so that they can be used in any of the methods within this file.
*/
let player;
let celina;
const ingredients = new Map();
const powerUps = new Map();
const enemies = [];

/*
This is a p5.js method that will load all image and sound assets.
It is run before the setup() and draw() methods and makes sure that 
the images and sound assets are loaded properly to avoid errors from
blank images and non-existent assets.
*/
function preload() {
  // load player images
  celina = loadImage("public/images/avatars/celina.png");

  // load powerUp images
  powerUps.set("heart", loadImage("public/images/powerups/heart.png"));
  powerUps.set("speed", loadImage("public/images/powerups/lightning.png"));

  // load ingredient images
  // recipe: ham sandwich
  ingredients.set("bread_loaf", loadImage("public/images/ingredients/bread_loaf.png"))
  ingredients.set("ham_slices", loadImage("public/images/ingredients/ham_slices.png"))

  // recipe: sushi nigiri
  ingredients.set("sushi_rice", loadImage("public/images/ingredients/sushi_rice.png"))
  ingredients.set("salmon", loadImage("public/images/ingredients/salmon.png"))

  // recipe: cheese
  ingredients.set("beef_patty", loadImage("public/images/ingredients/beef_patty.png"))
  ingredients.set("burger_buns", loadImage("public/images/ingredients/burger_buns.png"))
  ingredients.set("cheese_slices", loadImage("public/images/ingredients/cheese_slices.png"))

  // recipe: chicken tacos
  ingredients.set("tortilla", loadImage("public/images/ingredients/tortilla.png"))
  ingredients.set("salsa", loadImage("public/images/ingredients/salsa.png"))
  ingredients.set("chicken_thighs", loadImage("public/images/ingredients/chicken_thighs.png"))
  ingredients.set("black_bean", loadImage("public/images/ingredients/black_bean.png"))

  // recipe: Sadza ne Nyama
  ingredients.set("cornmeal", loadImage("public/images/ingredients/cornmeal.png"))
  ingredients.set("beef", loadImage("public/images/ingredients/beef.png"))
  ingredients.set("tomato", loadImage("public/images/ingredients/tomato.png"))
  ingredients.set("green_veg", loadImage("public/images/ingredients/green_veg.png"))

  // recipe: Carbonara
  ingredients.set("pancetta", loadImage("public/images/ingredients/pancetta.png"))
  ingredients.set("cheese", loadImage("public/images/ingredients/cheese.png"))
  ingredients.set("peppercorn", loadImage("public/images/ingredients/peppercorn.png"))
  ingredients.set("egg", loadImage("public/images/ingredients/egg.png"))
  ingredients.set("spaghetti", loadImage("public/images/ingredients/spaghetti.png"))

  // load enemy images
  enemies.push(loadImage("public/images/avatars/enemy1.png"));

}

/* 
This is a p5.js method that runs once at the beginning of the program.
It is used to initialise the canvas and the objects needed for the program.
*/
function setup() {
  createCanvas(500, 600);

  // creates a player object
  player = new Player(30, 40, 50, 50, "celina", celina)

  // creates a maze object
  maze = new Maze(ingredients, powerUps, enemies);

  // load maze levels
  maze.level1();
  maze.level2();
  maze.level3();
  maze.level4();
  maze.level5();
  maze.level6();
  maze.level7();
  maze.level8();
  maze.level9();

  let button = createButton('Restart Game');
  button.mousePressed(restartGame);

}

/*
This is a p5.js method that runs continuously frame by frame at a rate of 60 times per second.
This will be used to draw graphics and animations and to update the game state based on user input.
*/
function draw() {
  maze.drawMaze();

  player.displayCharacter(); // displays character
  player.move(maze); // makes character move if wasd keys r held

  headsUpDisplay()
}

function headsUpDisplay() {
  for (let i = 1; i <= player.lives; i++) {
    image(powerUps.get("heart"), (i * 25) - 25, 550, 50, 50);
  }

  if (player.lives <= 0) {
    gameOver();
  }

  textSize(25);
  text("Level " + maze.level, 400, 585)

}

function gameOver() {
  player.speed = 0;
  textSize(25);
  text("Game Over", 10, 585)
}

function restartGame() {
  resetPlayer();
  maze.level = "1";
}

function resetPlayer() {
  player.x = 30;
  player.y = 40;
  player.lives = 3;
  player.speed = 3;
  player.collectedIngredients = [];
}
