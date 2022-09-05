"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
class Vector3 {
    constructor(x, y, z) {
        this._x = x !== null && x !== void 0 ? x : 0;
        this._y = y !== null && y !== void 0 ? y : 0;
        this._z = z !== null && z !== void 0 ? z : 0;
    }
    set(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    set z(z) {
        this._z = z;
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
    get z() {
        return this._z;
    }
    copy(vector) {
        this._x = vector.x;
        this._y = vector.y;
        this._z = vector.z;
    }
    add(scalar) {
        this._x += scalar;
        this._y += scalar;
        this._z += scalar;
        return this;
    }
    addScalar(scalar) {
        this._x += scalar;
        this._y += scalar;
        this._z += scalar;
        return this;
    }
    subScalar(scalar) {
        this._x -= scalar;
        this._y -= scalar;
        this._z -= scalar;
        return this;
    }
    multiplyScalar(scalar) {
        this._x *= scalar;
        this._y *= scalar;
        this._z *= scalar;
        return this;
    }
    divideScalar(scalar) {
        if (scalar !== 0) {
            this._x /= scalar;
            this._y /= scalar;
            this._z /= scalar;
        }
        return this;
    }
    addVector(vector) {
        this._x += vector.x;
        this._y += vector.y;
        this._z += vector.z;
        return this;
    }
    subVector(vector) {
        this._x -= vector.x;
        this._y -= vector.y;
        this._z -= vector.z;
        return this;
    }
    divideVector(vector) {
        if (vector.x !== 0 && vector.y !== 0 && vector.z !== 0) {
            this._x /= vector.x;
            this._y /= vector.y;
            this._z /= vector.z;
        }
        return this;
    }
    multiplyVector(vector) {
        this._x *= vector.x;
        this._y *= vector.y;
        this._z *= vector.z;
        return this;
    }
    negate() {
        this._x = -this._x;
        this._y = -this._y;
        this._z = -this._z;
        return this;
    }
    inverse() {
        this._x = 1.0 / this._x;
        this._y = 1.0 / this._y;
        this._z = 1.0 / this._z;
        return this;
    }
}
exports.Vector3 = Vector3;
