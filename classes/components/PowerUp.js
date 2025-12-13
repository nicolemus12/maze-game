/*
This class is a subclass of the Collectable superclass. It inherits its methods 
and attributes from the Collectable superclass. The class hardcodes the
type to be 'powerUp'.


x,y: represents the x and y coordinates of the powerUp 
w,h: width and height of the powerUp
name: a string represetning the name of powerUp
design: image of the powerUp taken from image folder
type: the type of the powerUp 
*/

class PowerUp extends Collectable {
    constructor(x, y, w, h, name, design) {
        super(x, y, w, h, name, design, "powerup")
    }
}
