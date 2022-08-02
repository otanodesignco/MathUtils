export interface Vec3 
{

    x: number
    y: number
    z: number
    set( x: number, y: number, z: number ): void
    setX( x: number ): void
    setY( y: number ): void
    setZ( z: number ): void
    get(): object
    getX(): number
    getY(): number
    getZ(): number
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