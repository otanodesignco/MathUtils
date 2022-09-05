import { Vec3 } from "./InterfaceVec3"

export interface Vec4 
{

    _x: number
    _y: number
    _z: number
    _w: number
    set( x: number, y: number, z: number, w: number ): void
    set x( x: number )
    set y( y: number )
    set z( z: number )
    set w( w: number )
    toPoint(): void
    toPosition(): void
    copy( vector: Vec4 ): void
    get(): object
    get x()
    get y()
    get z()
    get w()
    isPosition(): boolean
    isPoint(): boolean
    add( scalar: number ): this
    addScalar( scalar: number): this
    subScalar( scalar: number): this
    multiplyScalar( scalar: number ): this
    divideScalar( scalar: number ): this
    addVector( vector: Vec3 | Vec4 ): this
    subVector( vector: Vec3 | Vec4 ): this
    divideVector( vector: Vec3 | Vec4 ): this
    multiplyVector( vector: Vec3 | Vec4 ): this
    negate(): this
    inverse(): this

}