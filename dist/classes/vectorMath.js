"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorMath = void 0;
const Vector2_1 = require("./Vector2");
const Vector3_1 = require("./Vector3");
const Vector4_1 = require("./Vector4");
class VectorMath {
    constructor() {
    }
    lerp(a, b, t) {
        return (1.0 - t) * a + b * t;
    }
    mix(x, y, a) {
        return x * (1.0 - a) + y - a;
    }
    lerpInverse(a, b, v) {
        return (v - a) / (b - a);
    }
    remap(lmin, lmax, omin, omax, v) {
        let t = this.lerpInverse(lmin, lmax, v);
        return this.lerp(omin, omax, t);
    }
    cross(vector1, vector2) {
        const rtnVector = new Vector3_1.Vector3(0, 0, 0);
        rtnVector.setX((vector1.getY() * vector2.getZ()) - (vector2.getY() * vector1.getZ()));
        rtnVector.setY((vector1.getZ() * vector2.getX()) - (vector2.getZ() * vector1.getX()));
        rtnVector.setZ((vector1.getX() * vector2.getY()) - (vector2.getX() * vector1.getY()));
        return rtnVector;
    }
    clamp(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }
    fract(value) {
        return value - Math.floor(value);
    }
    length(vector) {
        let rtnValue = 0;
        if (vector instanceof Vector2_1.Vector2)
            rtnValue = (vector.getX() ** 2) + (vector.getY() ** 2);
        if (vector instanceof Vector3_1.Vector3 || vector instanceof Vector4_1.Vector4)
            rtnValue = (vector.getX() ** 2) + (vector.getY() ** 2) + (vector.getZ() ** 2);
        return Math.sqrt(rtnValue);
    }
    dot(vector1, vector2) {
        let rtnVal = 0;
        if (vector1 instanceof Vector2_1.Vector2) {
            rtnVal = ((vector1.getX() * vector2.getX()) + (vector1.getY() * vector2.getY()));
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            rtnVal = ((vector1.getX() * vector2.getX()) + (vector1.getY() * vector2.getY()) + (vector1.getZ() * vector2.getZ()));
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            rtnVal = ((vector1.getX() * vector2.getX()) + (vector1.getY() * vector2.getY()) + (vector1.getZ() * vector2.getZ()));
        }
        return rtnVal;
    }
}
exports.VectorMath = VectorMath;
