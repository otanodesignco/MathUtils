import  { Vec3 } from "../types/InterfaceVec3";

export class Vector3 implements Vec3
{
    _x: number
    _y: number
    _z: number

    constructor( x?: number, y?: number, z?: number )
    {
        this._x = x ?? 0
        this._y = y ?? 0
        this._z = z ?? 0
    }

    set(x: number, y: number, z: number): void 
    {
        this._x = x
        this._y = y
        this._z = z
    }

    public set x( x: number )
    {

        this._x = x

    }

    public set y( y: number )
    {

        this._y = y

    }

    public set z( z: number )
    {

        this._z = z

    }

    get(): object 
    {
        return this
    }

    public get x()
    {
        return this._x
    }

    public get y()
    {
        return this._y
    }

    public get z()
    {
        return this._z
    }

    copy( vector: Vec3 ): void
    {
        this._x = vector.x
        this._y = vector.y
        this._z = vector.z
    }

    add( scalar: number ): this
    {

        this._x += scalar
        this._y += scalar
        this._z += scalar

        return this

    }

    addScalar( scalar: number ): this
    {

        this._x += scalar
        this._y += scalar
        this._z += scalar

        return this

    }

    subScalar( scalar: number ): this
    {

        this._x -= scalar
        this._y -= scalar
        this._z -= scalar

        return this

    }

    multiplyScalar( scalar: number ): this
    {

        this._x *= scalar
        this._y *= scalar
        this._z *= scalar

        return this

    }
    divideScalar( scalar: number ): this
    {

        if( scalar !== 0 )
        {
            this._x /= scalar
            this._y /= scalar
            this._z /= scalar
        }

        return this

    }
    addVector( vector: Vec3 ): this
    {

        this._x += vector.x
        this._y += vector.y
        this._z += vector.z

        return this

    }

    subVector( vector: Vec3 ): this
    {


        this._x -= vector.x
        this._y -= vector.y
        this._z -= vector.z

        return this

    }

    divideVector( vector: Vec3 ): this
    {

        if( vector.x !== 0 && vector.y !== 0 && vector.z !== 0 )
        {

            this._x /= vector.x
            this._y /= vector.y
            this._z /= vector.z

        }
        
        return this

    }

    multiplyVector( vector: Vec3 ): this
    {

        this._x *= vector.x
        this._y *= vector.y
        this._z *= vector.z

        return this

    }

    negate(): this
    {

        this._x = -this._x
        this._y = -this._y
        this._z = -this._z

        return this

    }

    inverse(): this
    {

        this._x = 1.0 / this._x
        this._y = 1.0 / this._y
        this._z = 1.0 / this._z

        return this

    }
}