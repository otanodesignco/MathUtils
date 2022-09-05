import { Vec2 } from "../types/InterfaceVec2";

export class Vector2 implements Vec2
{
    _x: number
    _y: number

    constructor( x?: number, y?: number )
    {
        this._x = x ?? 0
        this._y = y ?? 0
    }

    
    set(x: number, y: number): void 
    {
        this.x = x
        this.y = y
    }

    public set x( x: number )
    {

        this.x = x

    }

    public set y( y: number )
    {

        this.y = y

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

    copy( vector: Vec2 ): void
    {
        this._x = vector.x
        this._y = vector.y
    }

    add( scalar: number ): this
    {

        this._x += scalar
        this._y += scalar

        return this

    }

    addScalar( scalar: number ): this
    {

        this._x += scalar
        this._y += scalar

        return this

    }

    subScalar( scalar: number ): this
    {

        this._x -= scalar
        this._y -= scalar

        return this

    }

    multiplyScalar( scalar: number ): this
    {

        this._x *= scalar
        this._y *= scalar

        return this

    }
    divideScalar( scalar: number ): this
    {

        if( scalar !== 0 )
        {
            this._x /= scalar
            this._y /= scalar
        }

        return this

    }
    addVector( vector: Vec2 ): this
    {

        this._x += vector.x
        this._y += vector.y

        return this

    }

    subVector( vector: Vec2 ): this
    {


        this._x -= vector.x
        this._y -= vector.y
        return this

    }

    divideVector( vector: Vec2 ): this
    {

        if( vector.x !== 0 && vector.y !== 0 )
        {

            this._x /= vector.x
            this._y /= vector.y

        }
        
        return this

    }

    multiplyVector( vector: Vec2 ): this
    {

        this._x *= vector.x
        this._y *= vector.y

        return this

    }

    negate(): this
    {

        this._x = -this._x
        this._y = -this._y

        return this

    }

    inverse(): this
    {

        this._x = 1.0 / this._x
        this._y = 1.0 / this._y

        return this

    }
}