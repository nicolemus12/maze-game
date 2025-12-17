
class Player extends Character {
    /*
    This file contains the Player class. It includes the getters, setters and methods for movement,
    collisions, player display and screen boundaries. 
    
    x,y: represents the x and y coordinates of player
    w,h: width and height of player
    name: a string represetning the name of character 
    design: image of the character taken from image folder
    */
    constructor(x, y, w, h, name, design) {
        super(x, y, w, h, name, design, 3) // sets a speed of 3 for player
        this.lives = 3; // sets initial lives to 3

        this.powerUps = []; // initialises player with no collected power ups
        this.collectedIngredients = []; // initialises player with no collected ingredients 
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

        if (collectable && !collectable.isCollected) {
            this.handleCollectablePickUp(collectable, maze);
        }

        this.x = nextPlayerX;
        this.y = nextPlayerY;

        this.levelUp(maze)
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

        for (let collectable of maze.levelPowerUps) {
            const d = collectable.distanceToPlayer(nextPlayerX, nextPlayerY)
            const combinedRadius = this.radius + collectable.radius

            if (d < combinedRadius) {
                return collectable;
            }
        }
        return null;
    }

    handleCollectablePickUp(collectable, maze) {
        switch (collectable.type) {
            case "ingredient":
                this.collectedIngredients.push(collectable.name);
                break;
            case "powerUp":
                this.applyPowerUp(collectable)
                break;
        }

        collectable.isCollected = true;

    }

    applyPowerUp(collectable) {
        switch(collectable.name) {
            case "heart":
                this.lives += 1;
                break;
            case "speed":
                this.speed += 1;
                break;
        }
    }

    levelUp(maze) {
        let totalIngredients = maze.levels.get(maze.level).get("recipeIngredients").length

        if (this.collectedIngredients.length == totalIngredients) {
            switch (maze.level) {
                case "1":
                    this.collectedIngredients = [];
                    maze.level = "2";
                    break;
                case "2":
                    this.collectedIngredients = [];
                    maze.level = "3";
                    break;
                case "3":
                    this.collectedIngredients = [];
                    maze.level = "4";
                    break;
                case "4":
                    this.collectedIngredients = [];
                    maze.level = "5";
                    break;
                case "5":
                    this.collectedIngredients = [];
                    maze.level = "6";
                    break;
                case "6":
                    this.collectedIngredients = [];
                    maze.level = "7";
                    break;
                case "7":
                    this.collectedIngredients = [];
                    maze.level = "8";
                    break;
                case "8":
                    this.collectedIngredients = [];
                    maze.level = "9";
                    break;
                case "9":
                    this.collectedIngredients = [];
                    console.log("YOU WIN!")
                    break;
            }
        }
    }

}
