class Enemy extends Character {
    constructor(x, y, w, h, name, design) {
        super(x, y, w, h, name, design, 2);

        this.direction = 1;
    }

    distanceToPlayer(playerX, playerY) {
        return dist(playerX, playerY, this.x, this.y);
    }

}