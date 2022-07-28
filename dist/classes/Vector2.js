"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    get() {
        return this;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    add(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divideScalar(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }
    addVector(vector) {
        this.x += vector.getX();
        this.y += vector.getY();
        return this;
    }
    subVector(vector) {
        this.x -= vector.getX();
        this.y -= vector.getY();
        return this;
    }
    divideVector(vector) {
        if (vector.getX() !== 0 && vector.getY() !== 0) {
            this.x /= vector.getX();
            this.y /= vector.getY();
        }
        return this;
    }
    multiplyVector(vector) {
        this.x *= vector.getX();
        this.y *= vector.getY();
        return this;
    }
}
exports.Vector2 = Vector2;
