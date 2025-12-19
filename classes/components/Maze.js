class Maze {
    /* This file contains the Maze class. This class is for setting up the lines for 
    the maze and drawing out the maze layout. The class contains a method called 
    drawMaze which loops through the array of lines and draws them. There is also 
    a getLine method which returns the line.
    */
    constructor(ingredients, powerUps, enemies) {
        this.ingredients = ingredients; // map of all available ingredients
        this.powerUps = powerUps; // map of all available poweups
        this.enemies = enemies; // list of all available enemies

        this.level = "1";
        this.levels = new Map(); // map contain data for each level

        this.defaultLine = new Line(0, 550, 500, 550)
        this.lines = []; // array to store lines (walls of a maze) in a level 
        this.recipeIngredients = []; // array to store list of ingredients for a recipe
        this.levelPowerUps = []; // array to store powerups in a level
        this.levelEnemies = []; // array to store enmeis in a level
    }

    // loops through the array of lines 
    drawMaze() {
        strokeWeight(6);

        switch (this.level) {
            case '1':
                background(143, 255, 143);
                break;
            case '2':
                background(143, 255, 143);
                break;
            case '3':
                background(143, 255, 143);
                break;
            case '4':
                background(191, 234, 255);
                break;
            case '5':
                background(191, 234, 255);
                break;
            case '6':
                background(191, 234, 255);
                break;
            case '7':
                background(255, 122, 123);
                break;
            case '8':
                background(255, 122, 123);
                break;
            case '9':
                background(255, 122, 123);
                break;
            default:
                break;
        }

        // display and move enemy
        this.enemies = this.levels.get(this.level).get("enemy");
        if (this.enemies) {
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].displayCharacter();
            }
        }

        // loop drawing each line in the lines array
        this.lines = this.levels.get(this.level).get("lines");
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].drawLine();
        }

        // loop drawing each ingredients in the recipeIngredients array
        this.recipeIngredients = this.levels.get(this.level).get("recipeIngredients");
        for (let i = 0; i < this.recipeIngredients.length; i++) {
            this.recipeIngredients[i].displayCollectable()
        }

        // loop drawing each ingredients in the recipeIngredients array
        this.levelPowerUps = this.levels.get(this.level).get("levelPowerUps");
        for (let i = 0; i < this.levelPowerUps.length; i++) {
            this.levelPowerUps[i].displayCollectable()
        }
    }

    // Easy Levels
    level1() {
        // recipe: ham sandwich
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(120, 2, 120, 350));
        lines.push(new Line(210, 2, 210, 120));
        lines.push(new Line(250, 250, 250, 350));
        lines.push(new Line(330, 350, 330, 430));
        lines.push(new Line(120, 120, 210, 120));
        lines.push(new Line(500, 250, 250, 250));
        lines.push(new Line(500, 350, 250, 350));
        lines.push(new Line(120, 430, 0, 430));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(400, 400, 50, 50, "ham_slices", this.ingredients.get("ham_slices"))
        );
        recipeIngredients.push(
            new Ingredient(350, 100, 50, 50, "bread_loaf", this.ingredients.get("bread_loaf"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("1", levelData);
    }

    level2() {
        // recipe: sushi nigiri
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(120, 2, 120, 100));
        lines.push(new Line(300, 80, 300, 180));
        lines.push(new Line(200, 300, 200, 410));
        lines.push(new Line(290, 380, 290, 500));
        lines.push(new Line(80, 400, 80, 500));
        lines.push(new Line(400, 180, 0, 180));
        lines.push(new Line(500, 300, 100, 300));
        lines.push(new Line(500, 440, 385, 440));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(400, 400, 50, 50, "salmon", this.ingredients.get("salmon"))
        );
        recipeIngredients.push(
            new Ingredient(40, 480, 50, 50, "sushi_rice", this.ingredients.get("sushi_rice"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("2", levelData);
    }

    level3() {
        // recipe: Cheeseburger
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(100, 90, 0, 90));
        lines.push(new Line(100, 220, 0, 220));
        lines.push(new Line(100, 360, 0, 360));
        lines.push(new Line(100, 160, 200, 160));
        lines.push(new Line(100, 290, 200, 290));
        lines.push(new Line(380, 360, 200, 360));
        lines.push(new Line(200, 2, 200, 360));
        lines.push(new Line(380, 2, 380, 360));
        lines.push(new Line(290, 430, 290, 360));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(150, 130, 50, 50, "beef_patty", this.ingredients.get("beef_patty"))
        );
        recipeIngredients.push(
            new Ingredient(50, 430, 50, 50, "burger_buns", this.ingredients.get("burger_buns"))
        )
        recipeIngredients.push(
            new Ingredient(450, 60, 50, 50, "cheese_slices", this.ingredients.get("cheese_slices"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelPowerUps.push(
            new PowerUp(200, 480, 50, 50, "heart", this.powerUps.get("heart"))
        )
        levelPowerUps.push(
            new PowerUp(480, 410, 50, 50, "speed", this.powerUps.get("speed"))
        )
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("3", levelData);
    }

    // Medium levels
    level4() {
        // recipe: chicken taco
        let levelData = new Map();

        // select random enemy from enemies array
        const index = Math.floor(Math.random() * this.enemies.length);
        let enemies = [];
        enemies.push(new Enemy(490, 150, 60, 60, this.enemies[index]))
        enemies.push(new Enemy(40, 180, 60, 60, this.enemies[index]))
        levelData.set("enemy", enemies);

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(300, 2, 300, 250));
        lines.push(new Line(200, 110, 200, 250));
        lines.push(new Line(300, 350, 300, 420));
        lines.push(new Line(200, 350, 200, 420));
        lines.push(new Line(200, 350, 2, 350));
        lines.push(new Line(200, 250, 110, 250));
        lines.push(new Line(200, 110, 2, 110));
        lines.push(new Line(390, 250, 300, 250));
        lines.push(new Line(500, 350, 300, 350));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(60, 380, 50, 50, "chicken_thighs", this.ingredients.get("chicken_thighs"))
        )
        recipeIngredients.push(
            new Ingredient(150, 200, 50, 50, "tortilla", this.ingredients.get("tortilla"))
        )
        recipeIngredients.push(
            new Ingredient(250, 480, 50, 50, "salsa", this.ingredients.get("salsa"))
        )
        recipeIngredients.push(
            new Ingredient(450, 60, 50, 50, "black_bean", this.ingredients.get("black_bean"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelPowerUps.push(
            new PowerUp(350, 80, 50, 50, "heart", this.powerUps.get("heart"))
        )
        levelPowerUps.push(
            new PowerUp(80, 490, 50, 50, "speed", this.powerUps.get("speed"))
        )
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("4", levelData);
    }

    level5() {
        // recipe: Sadza ne Nyama
        let levelData = new Map();

        const index = Math.floor(Math.random() * this.enemies.length);
        let enemies = [];
        enemies.push(new Enemy(25, 300, 60, 60, this.enemies[index]))
        enemies.push(new Enemy(415, 350, 60, 60, this.enemies[index]))
        enemies.push(new Enemy(310, 50, 60, 60, this.enemies[index]))
        levelData.set("enemy", enemies);

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(110, 2, 110, 400));
        lines.push(new Line(220, 100, 220, 500));
        lines.push(new Line(330, 2, 330, 400));
        lines.push(new Line(420, 400, 420, 500));
        lines.push(new Line(420, 200, 420, 300));
        lines.push(new Line(500, 300, 420, 300));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(40, 500, 50, 50, "cornmeal", this.ingredients.get("cornmeal"))
        )
        recipeIngredients.push(
            new Ingredient(150, 200, 50, 50, "green_veg", this.ingredients.get("green_veg"))
        )
        recipeIngredients.push(
            new Ingredient(250, 480, 50, 50, "beef", this.ingredients.get("beef"))
        )
        recipeIngredients.push(
            new Ingredient(470, 250, 50, 50, "tomato", this.ingredients.get("tomato"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelPowerUps.push(
            new PowerUp(490, 490, 50, 50, "speed", this.powerUps.get("speed"))
        )
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("5", levelData);

    }

    level6() {
        // recipe: carbonara 
        let levelData = new Map();

        const index = Math.floor(Math.random() * this.enemies.length);
        let enemies = [];
        enemies.push(new Enemy(100, 135, 60, 60, this.enemies[index]))
        enemies.push(new Enemy(400, 450, 60, 60, this.enemies[index]))
        levelData.set("enemy", enemies);

        let lines = [];
        lines.push(this.defaultLine);
        lines.push(new Line(200, 110, 200, 300));
        lines.push(new Line(110, 230, 110, 300));
        lines.push(new Line(110, 400, 110, 500));
        lines.push(new Line(380, 300, 380, 400));
        lines.push(new Line(400, 2, 400, 200));
        lines.push(new Line(320, 2, 320, 200));
        lines.push(new Line(200, 110, 2, 110));
        lines.push(new Line(110, 300, 380, 300));
        lines.push(new Line(200, 400, 380, 400));
        levelData.set("lines", lines);

        let recipeIngredients = [];
        recipeIngredients.push(
            new Ingredient(150, 255, 50, 50, "peppercorn", this.ingredients.get("peppercorn"))
        )
        recipeIngredients.push(
            new Ingredient(460, 100, 50, 50, "cheese", this.ingredients.get("cheese"))
        )
        recipeIngredients.push(
            new Ingredient(200, 50, 50, 50, "pancetta", this.ingredients.get("pancetta"))
        )
        recipeIngredients.push(
            new Ingredient(40, 500, 50, 50, "egg", this.ingredients.get("egg"))
        )
        recipeIngredients.push(
            new Ingredient(490, 490, 50, 50, "spaghetti", this.ingredients.get("spaghetti"))
        )
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelPowerUps.push(
            new PowerUp(350, 80, 50, 50, "heart", this.powerUps.get("heart"))
        )
        levelPowerUps.push(
            new PowerUp(80, 490, 50, 50, "speed", this.powerUps.get("speed"))
        )
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("6", levelData);

    }

    // Hard Levels
    level7() {
        // recipe: 
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("7", levelData);

    }

    level8() {
        // recipe: 
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("8", levelData);
    }

    level9() {
        // recipe: 
        let levelData = new Map();

        let lines = [];
        lines.push(this.defaultLine);
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("9", levelData);
    }
}
