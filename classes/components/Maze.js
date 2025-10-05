class Maze {
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

    drawMaze() {
        //   MAZE 1
        strokeWeight(6);

        for (let i= 0; i < this.lines.length; i++){
            this.lines[i].drawLine();
        }

    }

    getLine() {
        return this.line;
    }

}