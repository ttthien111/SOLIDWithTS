class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }
    setHeight(height: number) {
        this.height = height;
        this.width = height;
    }

    area() {
        return this.width * this.height;
    }
}

function increaseRectangleWidth(rectangle: Rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Rectangle(5, 5);

increaseRectangleWidth(rectangle);
increaseRectangleWidth(square);

console.log(rectangle.area());
console.log(square.area());