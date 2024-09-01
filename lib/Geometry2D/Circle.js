"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = require("./Vector2D");
class Circle {
    constructor(centre, radius) {
        this.centre = centre;
        this.radius = radius;
    }
    inside(p, mode = "strict") {
        const diff = (0, Vector2D_1.sub)(this.centre, p);
        const diffMagSqu = (0, Vector2D_1.dot2)(diff, diff);
        switch (mode) {
            case "strict":
                return diffMagSqu < this.radius ** 2;
            case "allowEdges":
                return diffMagSqu <= this.radius ** 2;
        }
    }
}
exports.default = Circle;
