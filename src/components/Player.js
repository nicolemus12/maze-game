
class Player {
    /*
    constructor: creates player object

    x,y: represents the x and y coordinates of player
    w,h: width and height of player
    name: a string represetning the name of character 
    design: image of the character taken from image folder
    */
    constructor(x, y, w, h, name, design) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.name = name;
        this.design = design;
        this.speed = 3 // sets a speed of 3 for player
        this.lives = 3; // sets initial lives to 3
        this.powerUps = []; // initialises player with no collected power ups
        this.ingredients = []; // initialises player with no collected ingredients 
    }

    getName() {
        return this.name; // returns type name
    }

    getSpeed() {
        return this.speed;
    }

    getLives() {
        return this.lives;
    }

    getPowerUps() {
        return this.powerUps;
    }

    getIngredients() {
        return this.ingredients;
    }

    setLives() {
        this.lives = this.lives - 1
    }

    setSpeed(speed) {
        this.speed = speed
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }

    resetIngredients() {
        this.ingredients = []
    }


    /*
    displayCharacter: displays the character of specific design
    */
    displayCharacter() {
        image(this.design, this.x, this.y, this.w, this.h); // image: built in p5.js method that displays 
        this.constrainToScreen();
    }

    /*
    constrainToScreen: keeps character within the bounds of the maze
    */
    constrainToScreen() {
        this.x = constrain(this.x, this.w / 6, width - this.w / 2);
        this.y = constrain(this.y, this.h / 4, height - this.h / 1.5);
    }

    /*
    move: allows plays movement using WASD keys at the players speed
    */
    move() {

        if (keyIsDown(65)) {
            // 'A'
            this.x -= this.speed;
        }
        if (keyIsDown(68)) {
            // 'D'
            this.x += this.speed;
        }
        if (keyIsDown(87)) {
            // 'W'
            this.y -= this.speed;
        }
        if (keyIsDown(83)) {
            // 'S'
            this.y += this.speed;
        }
    }





}
