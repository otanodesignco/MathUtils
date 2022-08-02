import { Vec4 } from "../types/InterfaceVec4";
import { Vec3 } from "../types/InterfaceVec3";

export class Vector4 implements Vec4
{
    x: number
    y: number
    z: number
    w: number

    constructor( x?: number, y?: number, z?: number, w?: number )
    {
        this.x = x ?? 0
        this.y = y ?? 0
        this.z = z ?? 0
        this.w = w ?? 1
    }

    set(x: number, y: number, z: number, w: number): void 
    {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    setX( x: number ): void
    {

        this.x = x

    }

    setY( y: number ): void
    {

        this.y = y

    }

    setZ( z: number ): void
    {

        this.z = z

    }

    toPoint(): void
    {

        this.w = 0
        
    }

    toPosition(): void
    {

        this.w = 1

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

    getZ(): number
    {
        return this.z
    }

    getW(): number
    {
        return this.w
    }

    isPosition(): boolean
    {

        return ( ( this.w === 1 ) ? true : false )

    }

    isPoint(): boolean
    {

        return ( ( this.w === 0 ) ? true : false )

    }

    copy( vector: Vec4 ): void
    {
        this.x = vector.getX()
        this.y = vector.getY()
        this.z = vector.getZ()
        this.w = vector.getW()
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

        this.x += vector.getX()
        this.y += vector.getY()
        this.z += vector.getZ()

        return this

    }

    subVector( vector: Vec3 | Vec4 ): this
    {


        this.x -= vector.getX()
        this.y -= vector.getY()
        this.z -= vector.getZ()

        return this

    }

    divideVector( vector: Vec3 | Vec4 ): this
    {

        if( vector.getX() !== 0 && vector.getY() !== 0 && vector.getZ() !== 0 )
        {

            this.x /= vector.getX()
            this.y /= vector.getY()
            this.z /= vector.getZ()

        }
        
        return this

    }

    multiplyVector( vector: Vec3 | Vec4 ): this
    {

        this.x *= vector.getX()
        this.y *= vector.getY()
        this.z *= vector.getZ()

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