"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4 = void 0;
class Vector4 {
    constructor(x, y, z, w) {
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.z = z !== null && z !== void 0 ? z : 0;
        this.w = w !== null && w !== void 0 ? w : 1;
    }
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setZ(z) {
        this.z = z;
    }
    toPoint() {
        this.w = 0;
    }
    toPosition() {
        this.w = 1;
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
    getZ() {
        return this.z;
    }
    getW() {
        return this.w;
    }
    isPosition() {
        return ((this.w === 1) ? true : false);
    }
    isPoint() {
        return ((this.w === 0) ? true : false);
    }
    copy(vector) {
        this.x = vector.getX();
        this.y = vector.getY();
        this.z = vector.getZ();
        this.w = vector.getW();
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
        this.x += vector.getX();
        this.y += vector.getY();
        this.z += vector.getZ();
        return this;
    }
    subVector(vector) {
        this.x -= vector.getX();
        this.y -= vector.getY();
        this.z -= vector.getZ();
        return this;
    }
    divideVector(vector) {
        if (vector.getX() !== 0 && vector.getY() !== 0 && vector.getZ() !== 0) {
            this.x /= vector.getX();
            this.y /= vector.getY();
            this.z /= vector.getZ();
        }
        return this;
    }
    multiplyVector(vector) {
        this.x *= vector.getX();
        this.y *= vector.getY();
        this.z *= vector.getZ();
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
