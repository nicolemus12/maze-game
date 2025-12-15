
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
        this.radius = w / 2

        this.name = name;
        this.design = design;
        this.speed = 5 // sets a speed of 3 for player
        this.lives = 3; // sets initial lives to 3
        this.powerUps = []; // initialises player with no collected power ups
        this.collectedIngredients = new Set(); // initialises player with no collected ingredients 
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
        return this.collectedIngredients; // returns type ingredients
    }

    setLives() {
        this.lives = this.lives - 1
    }

    setSpeed(speed) {
        this.speed = speed
    }

    addIngredient(ingredient) {
        this.collectedIngredients.push(ingredient)
    }

    resetIngredients() {
        this.collectedIngredients = [] //method that resets the ingredients 
    }

    // displayCharacter: displays the character of the specific design
    displayCharacter() {
        image(this.design, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
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

        let nextPlayerX = this.x + dx;
        let nextPlayerY = this.y + dy;

        if (this.collidesWithMaze(nextPlayerX, nextPlayerY, maze)) {
            return;
        }

        const collectable = this.getCollidingCollectable(nextPlayerX, nextPlayerY, maze)

        if (collectable){
            this.handleCollectablePickUp(collectable, maze);
        }

        this.x = nextPlayerX;
        this.y = nextPlayerY;

    }

    collidesWithMaze(nextPlayerX, nextPlayerY, maze) {
        for (let line of maze.lines) {
            let d = line.distanceToPlayer(nextPlayerX, nextPlayerY);

            if (d < this.radius) {
                return true;
            }
        }
        return false;
    }

    getCollidingCollectable(nextPlayerX, nextPlayerY, maze) {
        for (let collectable of maze.recipeIngredients) {
            const d = collectable.distanceToPlayer(nextPlayerX, nextPlayerY)
            const combinedRadius = this.radius + collectable.radius

            if (d < combinedRadius) {
                return collectable;
            }
        } 
        return null;
    }

    handleCollectablePickUp(collectable, maze) {
        let totalIngredients = maze.levels.get(maze.level).get("recipeIngredients").length

        switch (collectable.type) {
            case "ingredient":
                this.collectedIngredients.add(collectable.name);
                if(this.collectedIngredients.size == totalIngredients) {
                    switch(maze.level){
                        case "1":
                            this.collectedIngredients.clear();
                            maze.level = "2";
                            break;
                        case "2":
                            this.collectedIngredients.clear();
                            maze.level = "3";
                            break;
                        case "3":
                            this.collectedIngredients.clear();
                            maze.level = "4";
                            break;
                        case "4":
                            this.collectedIngredients.clear();
                            maze.level = "5";
                            break;
                        case "5":
                            this.collectedIngredients.clear();
                            maze.level = "6";
                            break;
                        case "6":
                            this.collectedIngredients.clear();
                            maze.level = "7";
                            break;
                        case "7":
                            this.collectedIngredients.clear();
                            maze.level = "8";
                            break;
                        case "8":
                            this.collectedIngredients.clear();
                            maze.level = "9";
                            break;
                        case "9":
                            this.collectedIngredients.clear();
                            console.log("YOU WIN!")
                            break;
                    }
                }
                break;
            case "powerUp":
                break;
        }

        collectable.isCollected = true;

    }

}
