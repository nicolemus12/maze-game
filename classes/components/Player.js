
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
        this.radius = w/2

        this.name = name;
        this.design = design;
        this.speed = 5 // sets a speed of 3 for player
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

    // displayCharacter: displays the character of the specific design
    displayCharacter() {
        image(this.design, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
        this.constrainToScreen();
    }

    //constrainToScreen: keeps character within the bounds of the maze
    constrainToScreen() {
        this.x = constrain(this.x, this.w / 6, width - this.w / 2);
        this.y = constrain(this.y, this.h / 4, height - this.h / 1.5);
    }

    //move: allows player movement using WASD keys at the players speed
    move(maze) {

        let dx = 0;
        let dy = 0;

        // A
        if (keyIsDown(65)) {
            dx -= this.speed;
        }
        // D
        if (keyIsDown(68)) {
            dx += this.speed;
        }
        // S
        if (keyIsDown(83)) {
            dy += this.speed;
        }
        // W
        if (keyIsDown(87)) {
            dy -= this.speed;
        }

        let nextX = this.x + dx;
        let nextY = this.y + dy;

        for (let line of maze.lines) {
            let d = line.distanceToPlayer(nextX, nextY);

            if (d < this.radius) {
                return;
            }
        }
        
        this.x = nextX;
        this.y = nextY;

    }


}
