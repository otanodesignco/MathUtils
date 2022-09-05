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
        if (typeof a === 'number' && typeof b === 'number') {
            return (1.0 - t) * a + b * t;
        }
        if (a instanceof Vector2_1.Vector2 && b instanceof Vector2_1.Vector2) {
            const rtnVec = new Vector2_1.Vector2();
            let x, y, x2, y2;
            x = a.x;
            x2 = b.x;
            y = a.y;
            y2 = b.y;
            rtnVec.x = (1.0 - t) * x + x2 * t;
            rtnVec.y = (1.0 - t) * y + y2 * t;
            return rtnVec;
        }
        if (a instanceof Vector3_1.Vector3 && b instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            let x, y, x2, y2, z, z2;
            x = a.x;
            x2 = b.x;
            y = a.y;
            y2 = b.y;
            z = a.z;
            z2 = b.z;
            rtnVec.x = (1.0 - t) * x + x2 * t;
            rtnVec.y = (1.0 - t) * y + y2 * t;
            rtnVec.z = (1.0 - t) * z + z2 * t;
            return rtnVec;
        }
        if (a instanceof Vector4_1.Vector4 && b instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, a.w);
            let x, y, x2, y2, z, z2;
            x = a.x;
            x2 = b.x;
            y = a.y;
            y2 = b.y;
            z = a.z;
            z2 = b.z;
            rtnVec.x = (1.0 - t) * x + x2 * t;
            rtnVec.y = (1.0 - t) * y + y2 * t;
            rtnVec.z = (1.0 - t) * z + z2 * t;
            return rtnVec;
        }
    }
    slurp(vector1, vector2, t) {
        let angle, sinTotal, ratio1, ratio2;
        angle = Math.acos(Math.min(Math.max(this.dot(vector1, vector2), -1), 1));
        sinTotal = Math.sin(angle);
        ratio1 = Math.sin((1 - t) * angle) / sinTotal;
        ratio2 = Math.sin(t * angle) / sinTotal;
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            const rtnVec = new Vector2_1.Vector2();
            rtnVec.x = ratio1 * vector1.x + ratio2 * vector2.x;
            rtnVec.y = ratio1 * vector1.y + ratio2 * vector2.y;
            return rtnVec;
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            rtnVec.x = ratio1 * vector1.x + ratio2 * vector2.x;
            rtnVec.y = ratio1 * vector1.y + ratio2 * vector2.y;
            rtnVec.z = ratio1 * vector1.z + ratio2 * vector2.z;
            return rtnVec;
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, vector1.w);
            rtnVec.x = ratio1 * vector1.x + ratio2 * vector2.x;
            rtnVec.y = ratio1 * vector1.y + ratio2 * vector2.y;
            rtnVec.z = ratio1 * vector1.z + ratio2 * vector2.z;
            return rtnVec;
        }
    }
    hermite(vector1, vector2, vector3, vector4, t) {
        let factorOf2, factor1, factor2, factor3, factor4;
        factorOf2 = t * t;
        factor1 = factorOf2 * (2. * t - 3.) + 1.;
        factor2 = factorOf2 * (t - 2.) + t;
        factor3 = factorOf2 * (t - 1.);
        factor4 = factorOf2 * (3. - 2. * t);
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2 && vector3 instanceof Vector2_1.Vector2 && vector4 instanceof Vector2_1.Vector2) {
            const rtnVec = new Vector2_1.Vector2();
            rtnVec.x = vector1.x * factor1 + vector2.x * factor2 + vector3.x * factor3 + vector4.x * factor4;
            rtnVec.y = vector1.y * factor1 + vector2.y * factor2 + vector3.y * factor3 + vector4.y * factor4;
            return rtnVec;
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3 && vector3 instanceof Vector3_1.Vector3 && vector4 instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            rtnVec.x = vector1.x * factor1 + vector2.x * factor2 + vector3.x * factor3 + vector4.x * factor4;
            rtnVec.y = vector1.y * factor1 + vector2.y * factor2 + vector3.y * factor3 + vector4.y * factor4;
            rtnVec.z = vector1.z * factor1 + vector2.z * factor2 + vector3.z * factor3 + vector4.z * factor4;
            return rtnVec;
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4 && vector3 instanceof Vector4_1.Vector4 && vector4 instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, vector1.w);
            rtnVec.x = vector1.x * factor1 + vector2.x * factor2 + vector3.x * factor3 + vector4.x * factor4;
            rtnVec.y = vector1.y * factor1 + vector2.y * factor2 + vector3.y * factor3 + vector4.y * factor4;
            rtnVec.z = vector1.z * factor1 + vector2.z * factor2 + vector3.z * factor3 + vector4.z * factor4;
            return rtnVec;
        }
    }
    mix(x, y, a) {
        let rtn = 0;
        let r, g, b;
        if (typeof x === 'number' && typeof y === 'number') {
            rtn = x * (1.0 - a) + y - a;
        }
        if (x instanceof Vector2_1.Vector2 && y instanceof Vector2_1.Vector2) {
            r = x.x * (1.0 - a) + y.x - a;
            g = x.y * (1.0 - a) + y.y - a;
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (x instanceof Vector3_1.Vector3 && y instanceof Vector3_1.Vector3) {
            r = x.x * (1.0 - a) + y.x - a;
            g = x.y * (1.0 - a) + y.y - a;
            b = x.z * (1.0 - a) + y.z - a;
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (x instanceof Vector4_1.Vector4 && y instanceof Vector4_1.Vector4) {
            r = x.x * (1.0 - a) + y.x - a;
            g = x.y * (1.0 - a) + y.y - a;
            b = x.z * (1.0 - a) + y.z - a;
            rtn = new Vector4_1.Vector4(r, g, b, x.w);
        }
        return rtn;
    }
    lerpInverse(a, b, v) {
        let rtn = 0;
        let x, y, z;
        if (typeof a === 'number' && typeof b === 'number') {
            rtn = (v - a) / (b - a);
        }
        if (a instanceof Vector2_1.Vector2 && b instanceof Vector2_1.Vector2) {
            x = (v - a.x) / (b.x - a.x);
            y = (v - a.y) / (b.y - a.y);
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (a instanceof Vector3_1.Vector3 && b instanceof Vector3_1.Vector3) {
            x = (v - a.x) / (b.x - a.x);
            y = (v - a.y) / (b.y - a.y);
            z = (v - a.z) / (b.z - a.z);
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (a instanceof Vector4_1.Vector4 && b instanceof Vector4_1.Vector4) {
            x = (v - a.x) / (b.x - a.x);
            y = (v - a.y) / (b.y - a.y);
            z = (v - a.z) / (b.z - a.z);
            rtn = new Vector4_1.Vector4(x, y, z, a.w);
        }
        return rtn;
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
        rtnVector.x = (vector1.y * vector2.z) - (vector2.y * vector1.z);
        rtnVector.y = (vector1.z * vector2.x) - (vector2.z * vector1.x);
        rtnVector.z = (vector1.x * vector2.y) - (vector2.x * vector1.y);
        return rtnVector;
    }
    clamp(val, min, max) {
        let rtn = 0;
        let x, y, z;
        if (typeof val == 'number') {
            rtn = Math.min(Math.max(val, min), max);
        }
        if (val instanceof Vector2_1.Vector2) {
            x = Math.min(Math.max(val.x, min), max);
            y = Math.min(Math.max(val.y, min), max);
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (val instanceof Vector3_1.Vector3) {
            x = Math.min(Math.max(val.x, min), max);
            y = Math.min(Math.max(val.y, min), max);
            z = Math.min(Math.max(val.z, min), max);
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (val instanceof Vector4_1.Vector4) {
            x = Math.min(Math.max(val.x, min), max);
            y = Math.min(Math.max(val.y, min), max);
            z = Math.min(Math.max(val.z, min), max);
            rtn = new Vector4_1.Vector4(x, y, z, val.w);
        }
        return rtn;
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
            rtnValue = (vector.x ** 2) + (vector.y ** 2);
        if (vector instanceof Vector3_1.Vector3 || vector instanceof Vector4_1.Vector4)
            rtnValue = (vector.x ** 2) + (vector.y ** 2) + (vector.z ** 2);
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
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            rtnVal = ((vector1.x * vector2.x) + (vector1.y * vector2.y));
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            rtnVal = ((vector1.x * vector2.x) + (vector1.y * vector2.y) + (vector1.z * vector2.z));
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            rtnVal = ((vector1.x * vector2.x) + (vector1.y * vector2.y) + (vector1.z * vector2.z));
        }
        return rtnVal;
    }
    distance(vector1, vector2) {
        let subVec;
        let rtnVal = 0;
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            subVec = new Vector2_1.Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
            rtnVal = this.length(subVec);
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            subVec = new Vector3_1.Vector3(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
            rtnVal = this.length(subVec);
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            subVec = new Vector3_1.Vector3(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
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
            len = (vector.x ** 2) + (vector.y ** 2);
            rtnVec.copy(vector);
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.x = rtnVec.x / rtnLen;
                rtnVec.y = rtnVec.y / rtnLen;
            }
        }
        if (vector instanceof Vector3_1.Vector3) {
            len = (vector.x ** 2) + (vector.y ** 2) + (vector.z);
            rtnVec = new Vector3_1.Vector3(vector.x, vector.y, vector.z);
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.x = rtnVec.x / rtnLen;
                rtnVec.y = rtnVec.y / rtnLen;
                rtnVec.z = rtnVec.z / rtnLen;
            }
        }
        if (vector instanceof Vector4_1.Vector4) {
            len = (vector.x ** 2) + (vector.y ** 2) + (vector.z);
            rtnVec = new Vector4_1.Vector4(vector.x, vector.y, vector.z, vector.w);
            if (len > 0) {
                rtnLen = Math.sqrt(len);
                rtnVec.x = rtnVec.x / rtnLen;
                rtnVec.y = rtnVec.y / rtnLen;
                rtnVec.z = rtnVec.z / rtnLen;
            }
        }
        return rtnVec;
    }
    step(vector1, vector2) {
        let rtn = 0;
        let x, y, z;
        if (typeof vector1 === 'number' && typeof vector2 === 'number') {
            rtn = ((vector2 < vector1) ? 0 : 1);
        }
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            x = ((vector2.x < vector1.x) ? 0 : 1);
            y = ((vector2.y < vector1.y) ? 0 : 1);
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            x = ((vector2.x < vector1.x) ? 0 : 1);
            y = ((vector2.y < vector1.y) ? 0 : 1);
            z = ((vector2.z < vector1.z) ? 0 : 1);
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            x = ((vector2.x < vector1.x) ? 0 : 1);
            y = ((vector2.y < vector1.y) ? 0 : 1);
            z = ((vector2.z < vector1.z) ? 0 : 1);
            rtn = new Vector4_1.Vector4(x, y, z, 1);
        }
        return rtn;
    }
    smoothstep(e1, e2, x) {
        let rtn = 0;
        let r, g, b, t, t1, t2, t3;
        if (typeof e1 === 'number' && typeof e2 === 'number') {
            if (e1 >= e2) {
                return 0;
            }
            t = this.clamp((x - e1) / (e2 - e1), 0.0, 1.0);
            rtn = t * t * (3.0 - 2.0 * t);
        }
        if (e1 instanceof Vector2_1.Vector2 && e2 instanceof Vector2_1.Vector2) {
            if (e1.x >= e2.x && e1.y && e2.y) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (e1 instanceof Vector3_1.Vector3 && e2 instanceof Vector3_1.Vector3) {
            if (e1.x >= e2.x && e1.y >= e2.y && e1.z >= e2.z) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            t3 = this.clamp((x - e1.z) / (e2.z - e1.z), 0.0, 1.0);
            b = t3 * t3 * (3.0 - 2.0 * t3);
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (e1 instanceof Vector4_1.Vector4 && e2 instanceof Vector4_1.Vector4) {
            if (e1.x >= e2.x && e1.y >= e2.y && e1.z >= e2.z) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            t3 = this.clamp((x - e1.z) / (e2.z - e1.z), 0.0, 1.0);
            b = t3 * t3 * (3.0 - 2.0 * t3);
            rtn = new Vector4_1.Vector4(r, g, b, e1.w);
        }
        return rtn;
    }
    smootherstep(e1, e2, x) {
        let rtn = 0;
        let r, g, b, t, t1, t2, t3;
        if (typeof e1 === 'number' && typeof e2 === 'number') {
            if (e1 >= e2) {
                return 0;
            }
            t = this.clamp((x - e1) / (e2 - e1), 0.0, 1.0);
            rtn = t * t * t * (t * (6.0 * t - 15.0) + 10.0);
        }
        if (e1 instanceof Vector2_1.Vector2 && e2 instanceof Vector2_1.Vector2) {
            if (e1.x >= e2.x && e1.y && e2.y) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (e1 instanceof Vector3_1.Vector3 && e2 instanceof Vector3_1.Vector3) {
            if (e1.x >= e2.x && e1.y >= e2.y && e1.z >= e2.z) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            t3 = this.clamp((x - e1.z) / (e2.z - e1.z), 0.0, 1.0);
            b = t3 * t3 * t3 * (t3 * (6.0 * t3 - 15.0) + 10.0);
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (e1 instanceof Vector4_1.Vector4 && e2 instanceof Vector4_1.Vector4) {
            if (e1.x >= e2.x && e1.y >= e2.y && e1.z >= e2.z) {
                return 0;
            }
            t1 = this.clamp((x - e1.x) / (e2.x - e1.x), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.y) / (e2.y - e1.y), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            t3 = this.clamp((x - e1.z) / (e2.z - e1.z), 0.0, 1.0);
            b = t3 * t3 * t3 * (t3 * (6.0 * t3 - 15.0) + 10.0);
            rtn = new Vector4_1.Vector4(r, g, b, e1.w);
        }
        return rtn;
    }
}
exports.VectorMath = VectorMath;
