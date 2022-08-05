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
            x = a.getX();
            x2 = b.getX();
            y = a.getY();
            y2 = b.getY();
            rtnVec.setX((1.0 - t) * x + x2 * t);
            rtnVec.setY((1.0 - t) * y + y2 * t);
            return rtnVec;
        }
        if (a instanceof Vector3_1.Vector3 && b instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            let x, y, x2, y2, z, z2;
            x = a.getX();
            x2 = b.getX();
            y = a.getY();
            y2 = b.getY();
            z = a.getZ();
            z2 = b.getZ();
            rtnVec.setX((1.0 - t) * x + x2 * t);
            rtnVec.setY((1.0 - t) * y + y2 * t);
            rtnVec.setZ((1.0 - t) * z + z2 * t);
            return rtnVec;
        }
        if (a instanceof Vector4_1.Vector4 && b instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, a.getW());
            let x, y, x2, y2, z, z2;
            x = a.getX();
            x2 = b.getX();
            y = a.getY();
            y2 = b.getY();
            z = a.getZ();
            z2 = b.getZ();
            rtnVec.setX((1.0 - t) * x + x2 * t);
            rtnVec.setY((1.0 - t) * y + y2 * t);
            rtnVec.setZ((1.0 - t) * z + z2 * t);
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
            rtnVec.setX(ratio1 * vector1.getX() + ratio2 * vector2.getX());
            rtnVec.setY(ratio1 * vector1.getY() + ratio2 * vector2.getY());
            return rtnVec;
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            rtnVec.setX(ratio1 * vector1.getX() + ratio2 * vector2.getX());
            rtnVec.setY(ratio1 * vector1.getY() + ratio2 * vector2.getY());
            rtnVec.setZ(ratio1 * vector1.getZ() + ratio2 * vector2.getZ());
            return rtnVec;
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, vector1.getW());
            rtnVec.setX(ratio1 * vector1.getX() + ratio2 * vector2.getX());
            rtnVec.setY(ratio1 * vector1.getY() + ratio2 * vector2.getY());
            rtnVec.setZ(ratio1 * vector1.getZ() + ratio2 * vector2.getZ());
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
            rtnVec.setX(vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4);
            rtnVec.setY(vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4);
            return rtnVec;
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3 && vector3 instanceof Vector3_1.Vector3 && vector4 instanceof Vector3_1.Vector3) {
            const rtnVec = new Vector3_1.Vector3();
            rtnVec.setX(vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4);
            rtnVec.setY(vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4);
            rtnVec.setZ(vector1.getZ() * factor1 + vector2.getZ() * factor2 + vector3.getZ() * factor3 + vector4.getZ() * factor4);
            return rtnVec;
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4 && vector3 instanceof Vector4_1.Vector4 && vector4 instanceof Vector4_1.Vector4) {
            const rtnVec = new Vector4_1.Vector4(0, 0, 0, vector1.getW());
            rtnVec.setX(vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4);
            rtnVec.setY(vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4);
            rtnVec.setZ(vector1.getZ() * factor1 + vector2.getZ() * factor2 + vector3.getZ() * factor3 + vector4.getZ() * factor4);
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
            r = x.getX() * (1.0 - a) + y.getX() - a;
            g = x.getY() * (1.0 - a) + y.getY() - a;
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (x instanceof Vector3_1.Vector3 && y instanceof Vector3_1.Vector3) {
            r = x.getX() * (1.0 - a) + y.getX() - a;
            g = x.getY() * (1.0 - a) + y.getY() - a;
            b = x.getZ() * (1.0 - a) + y.getZ() - a;
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (x instanceof Vector4_1.Vector4 && y instanceof Vector4_1.Vector4) {
            r = x.getX() * (1.0 - a) + y.getX() - a;
            g = x.getY() * (1.0 - a) + y.getY() - a;
            b = x.getZ() * (1.0 - a) + y.getZ() - a;
            rtn = new Vector4_1.Vector4(r, g, b, x.getW());
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
            x = (v - a.getX()) / (b.getX() - a.getX());
            y = (v - a.getY()) / (b.getY() - a.getY());
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (a instanceof Vector3_1.Vector3 && b instanceof Vector3_1.Vector3) {
            x = (v - a.getX()) / (b.getX() - a.getX());
            y = (v - a.getY()) / (b.getY() - a.getY());
            z = (v - a.getZ()) / (b.getZ() - a.getZ());
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (a instanceof Vector4_1.Vector4 && b instanceof Vector4_1.Vector4) {
            x = (v - a.getX()) / (b.getX() - a.getX());
            y = (v - a.getY()) / (b.getY() - a.getY());
            z = (v - a.getZ()) / (b.getZ() - a.getZ());
            rtn = new Vector4_1.Vector4(x, y, z, a.getW());
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
        rtnVector.setX((vector1.getY() * vector2.getZ()) - (vector2.getY() * vector1.getZ()));
        rtnVector.setY((vector1.getZ() * vector2.getX()) - (vector2.getZ() * vector1.getX()));
        rtnVector.setZ((vector1.getX() * vector2.getY()) - (vector2.getX() * vector1.getY()));
        return rtnVector;
    }
    clamp(val, min, max) {
        let rtn = 0;
        let x, y, z;
        if (typeof val == 'number') {
            rtn = Math.min(Math.max(val, min), max);
        }
        if (val instanceof Vector2_1.Vector2) {
            x = Math.min(Math.max(val.getX(), min), max);
            y = Math.min(Math.max(val.getY(), min), max);
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (val instanceof Vector3_1.Vector3) {
            x = Math.min(Math.max(val.getX(), min), max);
            y = Math.min(Math.max(val.getY(), min), max);
            z = Math.min(Math.max(val.getZ(), min), max);
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (val instanceof Vector4_1.Vector4) {
            x = Math.min(Math.max(val.getX(), min), max);
            y = Math.min(Math.max(val.getY(), min), max);
            z = Math.min(Math.max(val.getZ(), min), max);
            rtn = new Vector4_1.Vector4(x, y, z, val.getW());
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
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
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
    step(vector1, vector2) {
        let rtn = 0;
        let x, y, z;
        if (typeof vector1 === 'number' && typeof vector2 === 'number') {
            rtn = ((vector2 < vector1) ? 0 : 1);
        }
        if (vector1 instanceof Vector2_1.Vector2 && vector2 instanceof Vector2_1.Vector2) {
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            rtn = new Vector2_1.Vector2(x, y);
        }
        if (vector1 instanceof Vector3_1.Vector3 && vector2 instanceof Vector3_1.Vector3) {
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            z = ((vector2.getZ() < vector1.getZ()) ? 0 : 1);
            rtn = new Vector3_1.Vector3(x, y, z);
        }
        if (vector1 instanceof Vector4_1.Vector4 && vector2 instanceof Vector4_1.Vector4) {
            x = ((vector2.getX() < vector1.getX()) ? 0 : 1);
            y = ((vector2.getY() < vector1.getY()) ? 0 : 1);
            z = ((vector2.getZ() < vector1.getZ()) ? 0 : 1);
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
            if (e1.getX() >= e2.getX() && e1.getY() && e2.getY()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (e1 instanceof Vector3_1.Vector3 && e2 instanceof Vector3_1.Vector3) {
            if (e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            t3 = this.clamp((x - e1.getZ()) / (e2.getZ() - e1.getZ()), 0.0, 1.0);
            b = t3 * t3 * (3.0 - 2.0 * t3);
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (e1 instanceof Vector4_1.Vector4 && e2 instanceof Vector4_1.Vector4) {
            if (e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * (3.0 - 2.0 * t1);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * (3.0 - 2.0 * t2);
            t3 = this.clamp((x - e1.getZ()) / (e2.getZ() - e1.getZ()), 0.0, 1.0);
            b = t3 * t3 * (3.0 - 2.0 * t3);
            rtn = new Vector4_1.Vector4(r, g, b, e1.getW());
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
            if (e1.getX() >= e2.getX() && e1.getY() && e2.getY()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            rtn = new Vector2_1.Vector2(r, g);
        }
        if (e1 instanceof Vector3_1.Vector3 && e2 instanceof Vector3_1.Vector3) {
            if (e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            t3 = this.clamp((x - e1.getZ()) / (e2.getZ() - e1.getZ()), 0.0, 1.0);
            b = t3 * t3 * t3 * (t3 * (6.0 * t3 - 15.0) + 10.0);
            rtn = new Vector3_1.Vector3(r, g, b);
        }
        if (e1 instanceof Vector4_1.Vector4 && e2 instanceof Vector4_1.Vector4) {
            if (e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ()) {
                return 0;
            }
            t1 = this.clamp((x - e1.getX()) / (e2.getX() - e1.getX()), 0.0, 1.0);
            r = t1 * t1 * t1 * (t1 * (6.0 * t1 - 15.0) + 10.0);
            t2 = this.clamp((x - e1.getY()) / (e2.getY() - e1.getY()), 0.0, 1.0);
            g = t2 * t2 * t2 * (t2 * (6.0 * t2 - 15.0) + 10.0);
            t3 = this.clamp((x - e1.getZ()) / (e2.getZ() - e1.getZ()), 0.0, 1.0);
            b = t3 * t3 * t3 * (t3 * (6.0 * t3 - 15.0) + 10.0);
            rtn = new Vector4_1.Vector4(r, g, b, e1.getW());
        }
        return rtn;
    }
}
exports.VectorMath = VectorMath;
