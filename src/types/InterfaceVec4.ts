import { Vec3 } from "./InterfaceVec3"

export interface Vec4 
{

    x: number
    y: number
    z: number
    w: number
    set( x: number, y: number, z: number, w: number ): void
    setX( x: number ): void
    setY( y: number ): void
    setZ( z: number ): void
    toPoint(): void
    toPosition(): void
    get(): object
    getX(): number
    getY(): number
    getZ(): number
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

}