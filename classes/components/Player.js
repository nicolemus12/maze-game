
class Player {
    /*
    This file contains the Player class. It includes the getters, setters and methods for movement,
    collisions, player display and screen boundaries. 
    
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
        return this.speed; // returns type speed
    }

    getLives() {
        return this.lives; // returns type lives
    }

    getPowerUps() {
        return this.powerUps; // returns type power ups
    }

    getIngredients() {
        return this.ingredients; // returns type ingredients
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
        this.ingredients = [] //method that resets the ingredients 
    }


    // displayCharacter: displays the character of specific design
    displayCharacter() {
        image(this.design, this.x, this.y, this.w, this.h); 
        this.constrainToScreen();
    }

    //constrainToScreen: keeps character within the bounds of the maze
    constrainToScreen() {
        this.x = constrain(this.x, this.w / 6, width - this.w / 2);
        this.y = constrain(this.y, this.h / 4, height - this.h / 1.5);
    }

    
    //move: allows player movement using WASD keys at the players speed
    move(line, lines) {

        // 'A'
        if (keyIsDown(65)) {
            if (this.x < line.getX1() || this.x < line.getX2()) {
                this.x -= this.speed;
            } else if (this.collided(line, lines)) {
                this.x -= 0;
            } else {
                this.x -= this.speed;
            }
        }

        if (keyIsDown(68)) {
            // 'D'
            if (this.x > line.getX1() || this.x > line.getX2()) {
                this.x += this.speed;
            }
            else if (this.collided(line, lines)) {
                this.x -= 0;
            } else {
                this.x += this.speed;
            }
        }
        if (keyIsDown(83)) {
            // 'S'
            if (this.y > line.getY1() || this.y > line.getY2()) {
                this.y += this.speed;
            }
            else if (this.collided(line, lines)) {
                this.y -= 0;
            }
            else {
                this.y += this.speed;
            }
        }
        if (keyIsDown(87)) {
            // 'W'
            if (this.y < line.getY1() || this.y < line.getY2()) {
                this.y -= this.speed;
            }
            else if (this.collided(line, lines)) {
                this.y -= 0;
            }
            else {
                this.y -= this.speed;
            }
        }

    }

    //collided: checks to see if the player collides with the lines. 
    collided(line, lines) {
        const d1 = dist(this.x, this.y, line.getX1(), line.getY1());
        const d2 = dist(this.x, this.y, line.getX2(), line.getY2());

        const lineLength = line.getLength();

        const buffer = 10;

        if (d1 + d2 >= lineLength - buffer && d1 + d2 <= lineLength + buffer) {
            return true;
        }
        return false;

    }

}
