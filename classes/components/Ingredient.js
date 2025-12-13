/*
This class is a subclass of the Collectable superclass. It inherits its methods 
and attributes from the Collectable superclass. The class hardcodes the
type to be 'ingredient'.

x,y: represents the x and y coordinates of the ingredient 
w,h: width and height of the ingredient
name: a string represetning the name of ingredient
design: image of the ingredient taken from image folder
type: the type of the ingredient 
*/
class Ingredient extends Collectable {
    constructor(x, y, w, h, name, design) {
        super(x, y, w, h, name, design, "ingredient")
    }
}