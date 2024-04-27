function makeTriangle(a, b) {
    return {
        a, b, getAreaTriangle: function () {
            return a * b / 2
        }, getTriangleHypotenuse() {
            return Math.sqrt((a ** 2 + b ** 2))
        }
    }
}