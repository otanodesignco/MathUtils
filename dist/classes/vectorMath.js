"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorMath = void 0;
const Vector2_1 = require("./Vector2");
const Vector3_1 = require("./Vector3");
const Vector4_1 = require("./Vector4");
class VectorMath {
    constructor() {
    }
    /**
     *
     * Lerp
     *
     * @param a start value
     *
     * @param b end value
     *
     * @param t step factor
     *
     * @returns Linear interpolation from a -> b using t as the step
     */
    lerp(a, b, t) {
        return (1.0 - t) * a + b * t;
    }
    lerpVec2(vector1, vector2, t) {
        const rtnVec = new Vector2_1.Vector2(0, 0);
        let x, y, x2, y2;
        x = vector1.getX();
        x2 = vector2.getX();
        y = vector1.getY();
        y2 = vector2.getY();
        rtnVec.setX((1.0 - t) * x + x2 * t);
        rtnVec.setY((1.0 - t) * y + y2 * t);
        return rtnVec;
    }
    lerpVec3(vector1, vector2, t) {
        const rtnVec = new Vector3_1.Vector3(0, 0, 0);
        let x, y, x2, y2, z, z2;
        x = vector1.getX();
        x2 = vector2.getX();
        y = vector1.getY();
        y2 = vector2.getY();
        z = vector1.getZ();
        z2 = vector2.getZ();
        rtnVec.setX((1.0 - t) * x + x2 * t);
        rtnVec.setY((1.0 - t) * y + y2 * t);
        rtnVec.setZ((1.0 - t) * z + z2 * t);
        return rtnVec;
    }
    lerpVec4(vector1, vector2, t) {
        const rtnVec = new Vector4_1.Vector4(0, 0, 0, vector1.getW());
        let x, y, x2, y2, z, z2;
        x = vector1.getX();
        x2 = vector2.getX();
        y = vector1.getY();
        y2 = vector2.getY();
        z = vector1.getZ();
        z2 = vector2.getZ();
        rtnVec.setX((1.0 - t) * x + x2 * t);
        rtnVec.setY((1.0 - t) * y + y2 * t);
        rtnVec.setZ((1.0 - t) * z + z2 * t);
        return rtnVec;
    }
    /**
     *
     * Mix
     *
     * @param x starting value
     *
     * @param y ending value
     *
     * @param a step factor
     *
     * @returns Interpolation between x -> y using a as the step, used of color gradients
     */
    mix(x, y, a) {
        return x * (1.0 - a) + y - a;
    }
    /**
     *
     * Lerp Inverse
     *
     * @param a ending number
     *
     * @param b starting number
     *
     * @param v inverse factor
     *
     * @returns Reverse Interpolation of b -> a from v
     */
    lerpInverse(a, b, v) {
        return (v - a) / (b - a);
    }
    /**
     *
     *  Remap
     *
     * @param lmin input min value
     *
     * @param lmax input max value
     *
     * @param omin output min value
     *
     * @param omax output max value
     *
     * @param v remap factor
     *
     * @returns Remaps the input values lmin & lmax with linear interploation of the values using v as the step
     */
    remap(lmin, lmax, omin, omax, v) {
        let t = this.lerpInverse(lmin, lmax, v);
        return this.lerp(omin, omax, t);
    }
    /**
     *
     * Cross
     *
     * @param vector1 first vector
     *
     * @param vector2 second vector
     *
     * @returns Cross product of vector1 and vector2
     */
    cross(vector1, vector2) {
        const rtnVector = new Vector3_1.Vector3(0, 0, 0);
        rtnVector.setX((vector1.getY() * vector2.getZ()) - (vector2.getY() * vector1.getZ()));
        rtnVector.setY((vector1.getZ() * vector2.getX()) - (vector2.getZ() * vector1.getX()));
        rtnVector.setZ((vector1.getX() * vector2.getY()) - (vector2.getX() * vector1.getY()));
        return rtnVector;
    }
    /**
     *
     * Clamp
     *
     * @param val value to constrain
     *
     * @param min min value that val can be
     *
     * @param max max value that val can be
     *
     * @returns constrain value between min and max
     */
    clamp(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }
    /**
     *
     * Fract
     *
     * @param value number for fractional product
     *
     * @returns frational product of value
     */
    fract(value) {
        return value - Math.floor(value);
    }
    /**
     *
     * Length
     *
     * @param vector vector object
     *
     * @returns Length of the vector
     */
    length(vector) {
        let rtnValue = 0;
        if (vector instanceof Vector2_1.Vector2)
            rtnValue = (vector.getX() ** 2) + (vector.getY() ** 2);
        if (vector instanceof Vector3_1.Vector3 || vector instanceof Vector4_1.Vector4)
            rtnValue = (vector.getX() ** 2) + (vector.getY() ** 2) + (vector.getZ() ** 2);
        return Math.sqrt(rtnValue);
    }
    /**
     *
     * Dot
     *
     * @param vector1  first vector object
     *
     * @param vector2 second vector
     *
     * @returns Dot product of vector1 & vector2
     */
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
    /**
     *
     * Distance
     *
     * @param vector1 first vector
     *
     * @param vector2 second vector
     *
     * @returns  Distance from vector1 to vector2
     */
    distance(vector1, vector2) {
        let subVec;
        let rtnVal = 0;
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            subVec = new Vector2_1.Vector2(vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY());
            rtnVal = this.length(subVec);
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            subVec = new Vector3_1.Vector3(vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY(), vector1.getZ() - vector2.getZ());
            rtnVal = this.length(subVec);
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            subVec = new Vector3_1.Vector3(vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY(), vector1.getZ() - vector2.getZ());
            rtnVal = this.length(subVec);
        }
        return rtnVal;
    }
    /**
     *
     * Normalize
     *
     * @param vector vector to normalize
     *
     * @returns Normalized unit vector
     */
    normalize(vector) {
        let rtnVec = new Vector2_1.Vector2(0, 0);
        let len = 0;
        let rtnLen = 0;
        if (vector instanceof Vector2_1.Vector2) {
            len = (vector.getX() ** 2) + (vector.getY() ** 2);
            rtnVec.copy(vector);
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.setX(rtnVec.getX() / rtnLen);
                rtnVec.setY(rtnVec.getY() / rtnLen);
            }
        }
        if (vector instanceof Vector3_1.Vector3) {
            len = (vector.getX() ** 2) + (vector.getY() ** 2) + (vector.getZ());
            rtnVec = new Vector3_1.Vector3(vector.getX(), vector.getY(), vector.getZ());
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.setX(rtnVec.getX() / rtnLen);
                rtnVec.setY(rtnVec.getY() / rtnLen);
                rtnVec.setZ(rtnVec.getZ() / rtnLen);
            }
        }
        if (vector instanceof Vector4_1.Vector4) {
            len = (vector.getX() ** 2) + (vector.getY() ** 2) + (vector.getZ());
            rtnVec = new Vector4_1.Vector4(vector.getX(), vector.getY(), vector.getZ(), vector.getW());
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.setX(rtnVec.getX() / rtnLen);
                rtnVec.setY(rtnVec.getY() / rtnLen);
                rtnVec.setZ(rtnVec.getZ() / rtnLen);
            }
        }
        return rtnVec;
    }
    /**
     *
     * Step
     *
     * @param vector1
     *
     * @param vector2
     *
     * @returns Return 0 or 1 for each vector point depending on if vector2 is less than vector 1 per point
     *
     */
    step(vector1, vector2) {
        let rtnVec = new Vector2_1.Vector2(0, 0);
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            let x, y;
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            rtnVec.set(x, y);
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            let x, y, z;
            rtnVec = new Vector3_1.Vector3(0, 0, 0);
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            z = ((vector2.getZ() < vector1.getZ()) ? 0 : 1);
            rtnVec.set(x, y, z);
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            let x, y, z;
            rtnVec = new Vector4_1.Vector4(0, 0, 0, 1);
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            z = ((vector2.getZ() < vector1.getZ()) ? 0 : 1);
            rtnVec.set(x, y, z, 1);
        }
        return rtnVec;
    }
    /**
     *
     * Smoothstep
     *
     * @param e1  Edge 1
     *
     * @param e2  Edge 2
     *
     * @param x  Interpolation factor
     *
     * @returns smooth interpolation between e1 -> e2
     */
    smoothstep(e1, e2, x) {
        if (e1 >= e2) {
            return 0;
        }
        let t = this.clamp((x - e1) / (e2 - e1), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
    }
    /**
     *
     * Smootherstep
     *
     * @param e1  Edge 1
     *
     * @param e2  Edge 2
     *
     * @param x  Interpolation factor
     *
     * @returns Smoother interpolation between e1 -> e2
     */
    smootherstep(e1, e2, x) {
        if (e1 >= e2) {
            return 0;
        }
        let t = this.clamp((x - e1) / (e2 - e1), 0.0, 1.0);
        return t * t * t * (t * (6.0 * t - 15.0) + 10.0);
    }
}
exports.VectorMath = VectorMath;
