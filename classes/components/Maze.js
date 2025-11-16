class Maze {
    /* This file contains the Maze class. This class is for setting up the lines for 
    the maze and drawing out the maze layout. The class contains a method called 
    drawMaze which loops through the array of lines and draws them. There is also 
    a getLine method which returns the line.
    */
    constructor() {
        this.lines = [];
    }

    // loops through the array of lines 
    drawMaze(level) {
        strokeWeight(6);

        // switch statement which adds lines to the lines property depending on the level
        switch (level) {
            case '1':
                this.level1()
                break;
            case '2':
                this.level2()
                break;
            case '3':
                this.level3()
                break;
            case '4':
                this.level4()
                break;
            case '5':
                this.level5()
                break;
            case '6':
                this.level6()
                break;
            case '7':
                this.level7()
                break;
            case '8':
                this.level8()
                break;
            case '9':
                this.level9()
                break;
            default:
                break;
        }

        // loop drawing each line in the lines array
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].drawLine();
        }

    }

    // Easy Levels
    level1() {
        this.lines = [];
        this.lines.push(new Line(120, 2, 120, 350));
        this.lines.push(new Line(210, 2, 210, 120));
        this.lines.push(new Line(250, 250, 250, 350));
        this.lines.push(new Line(330, 350, 330, 430));
        this.lines.push(new Line(120, 120, 210, 120));
        this.lines.push(new Line(500, 250, 250, 250));
        this.lines.push(new Line(500, 350, 250, 350));
        this.lines.push(new Line(120, 430, 0, 430));
    }

    level2() {
        this.lines = [];
        this.lines.push(new Line(120, 2, 120, 100));
        this.lines.push(new Line(300, 80, 300, 180));
        this.lines.push(new Line(200, 300, 200, 410));
        this.lines.push(new Line(290, 380, 290, 500));
        this.lines.push(new Line(80, 400, 80, 500));
        this.lines.push(new Line(400, 180, 0, 180));
        this.lines.push(new Line(500, 300, 100, 300));
        this.lines.push(new Line(500, 440, 385, 440));
    }

    level3() {
        this.line = [];
        this.lines.push(new Line(100, 90, 0, 90));
        this.lines.push(new Line(100, 220, 0, 220));
        this.lines.push(new Line(100, 360, 0, 360));
        this.lines.push(new Line(100, 160, 200, 160));
        this.lines.push(new Line(100, 290, 200, 290));
        this.lines.push(new Line(380, 360, 200, 360));
        this.lines.push(new Line(200, 2, 200, 360));
        this.lines.push(new Line(380, 2, 380, 360));
        this.lines.push(new Line(290, 430, 290, 360));
    }

    // Medium levels
    level4(){

    }

    level5(){
        
    }

    level6(){
        
    }


    // Hard Levels
    level7(){
        
    }

    level8(){
        
    }

    level9(){
        
    }


}
