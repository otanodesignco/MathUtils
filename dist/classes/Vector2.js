"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
class Vector2 {
    constructor(x, y) {
        this._x = x !== null && x !== void 0 ? x : 0;
        this._y = y !== null && y !== void 0 ? y : 0;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    set x(x) {
        this.x = x;
    }
    set y(y) {
        this.y = y;
    }
    get() {
        return this;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    copy(vector) {
        this._x = vector.x;
        this._y = vector.y;
    }
    add(scalar) {
        this._x += scalar;
        this._y += scalar;
        return this;
    }
    addScalar(scalar) {
        this._x += scalar;
        this._y += scalar;
        return this;
    }
    subScalar(scalar) {
        this._x -= scalar;
        this._y -= scalar;
        return this;
    }
    multiplyScalar(scalar) {
        this._x *= scalar;
        this._y *= scalar;
        return this;
    }
    divideScalar(scalar) {
        if (scalar !== 0) {
            this._x /= scalar;
            this._y /= scalar;
        }
        return this;
    }
    addVector(vector) {
        this._x += vector.x;
        this._y += vector.y;
        return this;
    }
    subVector(vector) {
        this._x -= vector.x;
        this._y -= vector.y;
        return this;
    }
    divideVector(vector) {
        if (vector.x !== 0 && vector.y !== 0) {
            this._x /= vector.x;
            this._y /= vector.y;
        }
        return this;
    }
    multiplyVector(vector) {
        this._x *= vector.x;
        this._y *= vector.y;
        return this;
    }
    negate() {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    }
    inverse() {
        this._x = 1.0 / this._x;
        this._y = 1.0 / this._y;
        return this;
    }
}
exports.Vector2 = Vector2;
