class Player {
    constructor(x, y, w, h, character) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 5; //sets a speed of 5 for player
        this.character = character

    }

    display() {
        image(
            this.character,
            this.x - this.w / 3,
            this.y - this.h / 3.5,
            this.w,
            this.h
        );
        this.constrainToScreen();
    }
}
