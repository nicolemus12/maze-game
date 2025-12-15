class Maze {
    /* This file contains the Maze class. This class is for setting up the lines for 
    the maze and drawing out the maze layout. The class contains a method called 
    drawMaze which loops through the array of lines and draws them. There is also 
    a getLine method which returns the line.
    */
    constructor(ingredients, powerUps) {
        this.ingredients = ingredients;
        this.powerUps = powerUps
        this.levels = new Map();

        this.lines = [];
        this.recipeIngredients = [];
        this.levelPowerUps = [];
    }

    // loops through the array of lines 
    drawMaze(level) {
        strokeWeight(6);

        // switch statement which adds lines to the lines property depending on the level
        switch (level) {
            case '1':
                level = "1"
                break;
            case '2':
                level = "2"
                break;
            case '3':
                level = "3"
                break;
            case '4':
                level = "4"
                break;
            case '5':
                level = "5"
                break;
            case '6':
                level = "6"
                break;
            case '7':
                level = "7"
                break;
            case '8':
                level = "8"
                break;
            case '9':
                level = "9"
                break;
            default:
                break;
        }

        // loop drawing each line in the lines array
        this.lines = this.levels.get(level).get("lines");
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].drawLine();
        }

        // loop drawing each ingredients in the recipeIngredients array
        this.recipeIngredients = this.levels.get(level).get("recipeIngredients");
        for (let i = 0; i < this.recipeIngredients.length; i++) {
            this.recipeIngredients[i].displayCollectable()
        }

    }

    // Easy Levels
    level1() {
        let levelData = new Map();

        let lines = [];
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
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("1", levelData);
    }

    level2() {
        let levelData = new Map();

        let lines = [];
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
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("2", levelData);
    }

    level3() {
        let levelData = new Map();

        let lines = [];
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
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("3", levelData);
    }

    // Medium levels
    level4() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("4", levelData);
    }

    level5() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("5", levelData);

    }

    level6() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("6", levelData);

    }

    // Hard Levels
    level7() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("7", levelData);

    }

    level8() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("8", levelData);
    }

    level9() {
        let levelData = new Map();

        let lines = [];
        levelData.set("lines", lines);

        let recipeIngredients = [];
        levelData.set("recipeIngredients", recipeIngredients);

        let levelPowerUps = [];
        levelData.set("levelPowerUps", levelPowerUps);

        this.levels.set("9", levelData);
    }
}
