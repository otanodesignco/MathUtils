export interface Vec3 
{

    _x: number
    _y: number
    _z: number
    set( x: number, y: number, z: number ): void
    set x( x: number )
    set y( y: number )
    set z( z: number )
    get(): object
    get x()
    get y()
    get z()
    copy( vector: Vec3 ): void
    add( scalar: number ): this
    addScalar( scalar: number): this
    subScalar( scalar: number): this
    multiplyScalar( scalar: number ): this
    divideScalar( scalar: number ): this
    addVector( vector: Vec3 ): this
    subVector( vector: Vec3 ): this
    divideVector( vector: Vec3 ): this
    multiplyVector( vector: Vec3 ): this
    negate(): this
    inverse(): this

}