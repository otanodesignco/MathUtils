import { Vec2 } from "../types/InterfaceVec2";

export class Vector2 implements Vec2
{
    x: number
    y: number

    constructor( x: number, y: number )
    {
        this.x = x
        this.y = y
    }

    set(x: number, y: number): void 
    {
        this.x = x
        this.y = y
    }

    setX( x: number ): void
    {

        this.x = x

    }

    setY( y: number ): void
    {

        this.y = y

    }

    get(): object 
    {
        return this
    }

    getX(): number
    {
        return this.x
    }

    getY(): number
    {
        return this.y
    }

    add( scalar: number ): this
    {

        this.x += scalar
        this.y += scalar

        return this

    }

    addScalar( scalar: number ): this
    {

        this.x += scalar
        this.y += scalar

        return this

    }

    subScalar( scalar: number ): this
    {

        this.x -= scalar
        this.y -= scalar

        return this

    }

    multiplyScalar( scalar: number ): this
    {

        this.x *= scalar
        this.y *= scalar

        return this

    }
    divideScalar( scalar: number ): this
    {

        if( scalar !== 0 )
        {
            this.x /= scalar
            this.y /= scalar
        }

        return this

    }
    addVector( vector: Vec2 ): this
    {

        this.x += vector.getX()
        this.y += vector.getY()

        return this

    }

    subVector( vector: Vec2 ): this
    {


        this.x /= vector.getX()
        this.y /= vector.getY()
        return this

    }

    divideVector( vector: Vec2 ): this
    {

        if( vector.getX() !== 0 && vector.getY() !== 0 )
        {

            this.x /= vector.getX()
            this.y /= vector.getY()

        }
        
        return this

    }

    multiplyVector( vector: Vec2 ): this
    {

        this.x *= vector.getX()
        this.y *= vector.getY()

        return this

    }
}