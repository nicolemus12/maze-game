class Collectable {
    /*
    This class is the superclass for collectables. It has common methods needed for 
    ingredients and power-ups.

    x,y: represents the x and y coordinates of the collectable
    w,h: width and height of the collectable
    name: a string represetning the name of collectable
    design: image of the collectable taken from image folder
    type: the type of the collectable, either ingredient or powerUp
    */

    constructor(x, y, w, h, name, design, type) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.radius = w / 2;

        this.name = name;
        this.design = design;
        this.type = type;
    }

    // displayCollectable: displays the collectable of the specific design
    displayCollectable() {
        image(this.design, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        this.constrainToScreen();
    }

    //calculates the distance between the player and the collectable
    distanceToPlayer(playerX, playerY) {
        return dist(playerX, playerY, this.x, this.y);
    }

}

