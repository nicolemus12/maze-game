class Maze {
    constructor() {
        this.line = new Line(120, 2, 120, 350);
    }

    drawMaze() {
        //   MAZE 1
        strokeWeight(6);
        

        this.line.drawLine();

        // line(120, 2, 120, 350);

        // line(210, 2, 210, 120);
        // line(250, 250, 250, 350);
        // line(330, 350, 330, 430);
        // line(120, 120, 210, 120);
        // line(500, 250, 250, 250);
        // line(500, 350, 250, 350);
        // line(120, 430, 0, 430);

        textSize(20);
        fill('green'); // text for the entrance in green
        text('ENTRANCE', 5, 30);

        textSize(22);
        fill('red'); //text for the exit in red
        text('EXIT', 40, 470);

    }

    getLine() {
        return this.line;
    }


    // lineLength(){
    //     return dist(x1, y1, x2, y2)
    // }
}