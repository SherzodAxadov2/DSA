class Triangle {
    constructor(a, b) {
        if (!Number.isFinite(a) || a <= 0) {
            throw new Error(`Invalid a: ${a}`)
        }
        if (!Number.isFinite(b) || b <= 0) {
            throw new Error(`Invalid b: ${b}`)
        }
        this.a = a
        this.b = b
    }

    // statics
    static url = 'base url maybe'

    // Methods
    getAreaTriangle() {
        return this.a * this.b / 2
    }

    getTriangleHypotenuse() {
        return Math.sqrt((this.a ** 2 + this.b ** 2))
    }

    // getIstStaticProperty(){
    //     return Triangle.url
    // }
}

const triangle1 = new Triangle(3, 4)       // instantiation

class describedTriangle extends Triangle {
    describe() {
        return `it is triangle which extends another Triangle class`
    }
}

const triangle2 = new describedTriangle(24, 7)

// console.log(triangle2.getTriangleHypotenuse())
// console.log(triangle2.describe())

// console.log(triangle2 instanceof Triangle)
// console.log(triangle2 instanceof describedTriangle)

class ColoredTriangle extends Triangle {

    // super keyword called the parent constructor
    constructor(a, b, color) {
        super(a, b);
        this.color = color
    }

    gettingColor() {
        return `Hey it is ${this.color} color`
    }
}

class ColorMoodTriangle extends ColoredTriangle {
    constructor(a, b, color, mood) {
        super(a, b, color);
        this.mood = mood
    }
}

// console.log(new ColoredTriangle(24, 7, 'green'))

console.log(Triangle.url)
console.log(triangle1['url']) // I can not access instance of class to using its static properties
