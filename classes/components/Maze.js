class Maze {
    /* This file contains the Maze class. This class is for setting up the lines for 
    the maze and drawing out the maze layout. The class contains a method called 
    drawMaze which loops through the array of lines and draws them. There is also 
    a getLine method which returns the line.
    */
    constructor() {
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

    // loops through the array of lines 
    drawMaze() {
        //   MAZE 1
        strokeWeight(6);

        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].drawLine();
        }

    }

    getLine() {
        return this.line;
    }

}

//      MAZE 2
//   strokeWeight(6);
//    line(120, 2, 120, 100);
//   line(300, 80, 300, 180);
//   line(200, 300, 200, 410);
//    line(290, 380, 290, 500);
//   line(80, 400, 80, 500);

//   line(400, 180, 0, 180);
//   line(500, 300, 100, 300);
//   line(500, 440, 385, 440);

// //   MAZE 3
// strokeWeight(6);
// line(100, 90, 0, 90);
// line(100, 220, 0, 220);
// line(100, 360, 0, 360);
// line(100, 160, 200, 160); 
// line(100, 290, 200, 290); 
// line(380, 360, 200, 360); 
// line(200, 2, 200, 360); 
// line(380, 2, 380, 360); 
// line(290, 430, 290, 360);