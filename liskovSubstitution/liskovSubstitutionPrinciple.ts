
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.height = height;
        this.width = height;
    }

    area() {
        return this.width * this.height;
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5, 5);

console.log(rectangle.area());
console.log(square.area());