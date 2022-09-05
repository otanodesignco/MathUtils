"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4 = void 0;
class Vector4 {
    constructor(x, y, z, w) {
        this._x = x !== null && x !== void 0 ? x : 0;
        this._y = y !== null && y !== void 0 ? y : 0;
        this._z = z !== null && z !== void 0 ? z : 0;
        this._w = w !== null && w !== void 0 ? w : 1;
    }
    set(x, y, z, w) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
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
    set w(w) {
        this._w = w;
    }
    toPoint() {
        this._w = 0;
    }
    toPosition() {
        this._w = 1;
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
    get w() {
        return this._w;
    }
    isPosition() {
        return ((this._w === 1) ? true : false);
    }
    isPoint() {
        return ((this._w === 0) ? true : false);
    }
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
        this.w = vector.w;
    }
    add(scalar) {
        this.x += scalar;
        this.y += scalar;
        this.z += scalar;
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        this.z += scalar;
        return this;
    }
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        this.z -= scalar;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    divideScalar(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
            this.z /= scalar;
        }
        return this;
    }
    addVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subVector(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    divideVector(vector) {
        if (vector.x !== 0 && vector.y !== 0 && vector.z !== 0) {
            this.x /= vector.x;
            this.y /= vector.y;
            this.z /= vector.z;
        }
        return this;
    }
    multiplyVector(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    inverse() {
        this.x = 1.0 / this.x;
        this.y = 1.0 / this.y;
        this.z = 1.0 / this.z;
        return this;
    }
}
exports.Vector4 = Vector4;
