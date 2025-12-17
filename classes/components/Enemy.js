class Enemy extends Character {
    constructor(x, y, w, h, design) {
        super(x, y, w, h, design, 2);

        this.direction = -1;
    }

    distanceToPlayer(playerX, playerY) {
        return dist(playerX, playerY, this.x, this.y);
    }

    move() {
        this.x += this.speed * this.direction;
    }
}