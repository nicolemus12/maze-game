class Character {

    constructor(x, y, w, h, name, design, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.radius = w / 2

        this.name = name;
        this.design = design;

        this.speed = speed;
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

}