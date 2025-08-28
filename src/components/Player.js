class Player {
    constructor(x, y, w, h, character) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 3; //sets a speed of 5 for player
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

    handleInput() {
        // continuous movement if keys are held
        if (keyIsDown(65)) {
            // 'A'
            this.x -= this.speed;
        }
        if (keyIsDown(68)) {
            // 'D'
            this.x += this.speed;
        }
        if (keyIsDown(87)) {
            // 'W'
            this.y -= this.speed;
        }
        if (keyIsDown(83)) {
            // 'S'
            this.y += this.speed;
        }
    }

    constrainToScreen() {
        this.x = constrain(this.x, this.w / 6, width - this.w / 2);
        this.y = constrain(this.y, this.h / 4, height - this.h / 1.5);
    }
}

