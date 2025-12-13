/*
 This file contains the Line class which defines the properties and methods of a line. 
 It has the starting x and y coordinates and the ending x and y coordinates. It also 
 has methods to get the length of the line and to draw the line.
*/
class Line {

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.length = dist(x1, y1, x2, y2);
    }

    getX1() {
        return this.x1
    }

    getY1() {
        return this.y1
    }

    getX2() {
        return this.x2
    }

    getY2() {
        return this.y2
    }

    getLength() {
        return this.length
    }

    drawLine() {
        line(this.x1, this.y1, this.x2, this.y2)
    }

    distanceToPlayer(playerX, playerY) {
        const x1 = this.x1
        const y1 = this.y1
        const x2 = this.x2
        const y2 = this.y2

        //line segment vector
        const A = playerX - x1;
        const B = playerY - y1;
        const C = x2 - x1;
        const D = y2 - y1;

        const dotProduct = A*C + B*D;
        const lenSquared = C*C + D*D;
        let t = -1;

        if(lenSquared !== 0) {
            t = dotProduct / lenSquared;
        }

        t = constrain(t, 0, 1);

        //Closest point on segment
        const closestLineX = x1 + t * C;
        const closestLineY = y1 + t * D;

        //Distance from player to cloest point
        return dist(playerX, playerY, closestLineX, closestLineY);
    }

}
