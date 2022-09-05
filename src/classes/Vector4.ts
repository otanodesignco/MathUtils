import { Vec4 } from "../types/InterfaceVec4";
import { Vec3 } from "../types/InterfaceVec3";

export class Vector4 implements Vec4
{
    _x: number
    _y: number
    _z: number
    _w: number

    constructor( x?: number, y?: number, z?: number, w?: number )
    {
        this._x = x ?? 0
        this._y = y ?? 0
        this._z = z ?? 0
        this._w = w ?? 1
    }

    set(x: number, y: number, z: number, w: number): void 
    {
        this._x = x
        this._y = y
        this._z = z
        this._w = w
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

    public set w( w: number )
    {
        this._w = w
    }

    toPoint(): void
    {

        this._w = 0
        
    }

    toPosition(): void
    {

        this._w = 1

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

    public get w()
    {
        return this._w
    }

    isPosition(): boolean
    {

        return ( ( this._w === 1 ) ? true : false )

    }

    isPoint(): boolean
    {

        return ( ( this._w === 0 ) ? true : false )

    }

    copy( vector: Vec4 ): void
    {
        this.x = vector.x
        this.y = vector.y
        this.z = vector.z
        this.w = vector.w
    }

    add( scalar: number ): this
    {

        this.x += scalar
        this.y += scalar
        this.z += scalar

        return this

    }

    addScalar( scalar: number ): this
    {

        this.x += scalar
        this.y += scalar
        this.z += scalar

        return this

    }

    subScalar( scalar: number ): this
    {

        this.x -= scalar
        this.y -= scalar
        this.z -= scalar

        return this

    }

    multiplyScalar( scalar: number ): this
    {

        this.x *= scalar
        this.y *= scalar
        this.z *= scalar

        return this

    }
    divideScalar( scalar: number ): this
    {

        if( scalar !== 0 )
        {
            this.x /= scalar
            this.y /= scalar
            this.z /= scalar
        }

        return this

    }
    addVector( vector: Vec3 | Vec4 ): this
    {

        this.x += vector.x
        this.y += vector.y
        this.z += vector.z

        return this

    }

    subVector( vector: Vec3 | Vec4 ): this
    {


        this.x -= vector.x
        this.y -= vector.y
        this.z -= vector.z

        return this

    }

    divideVector( vector: Vec3 | Vec4 ): this
    {

        if( vector.x !== 0 && vector.y !== 0 && vector.z !== 0 )
        {

            this.x /= vector.x
            this.y /= vector.y
            this.z /= vector.z

        }
        
        return this

    }

    multiplyVector( vector: Vec3 | Vec4 ): this
    {

        this.x *= vector.x
        this.y *= vector.y
        this.z *= vector.z

        return this

    }

    negate(): this
    {

        this.x = -this.x
        this.y = -this.y
        this.z = -this.z

        return this

    }

    inverse(): this
    {

        this.x = 1.0 / this.x
        this.y = 1.0 / this.y
        this.z = 1.0 / this.z

        return this

    }
}