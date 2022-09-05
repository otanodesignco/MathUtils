export interface Vec2 
{

    _x: number
    _y: number
    set( x: number, y: number ): void
    set x( x: number )
    set y( y: number )
    get(): object
    get x()
    get y()
    copy( vector: Vec2 ): void
    add( scalar: number ): this
    addScalar( scalar: number): this
    subScalar( scalar: number): this
    multiplyScalar( scalar: number ): this
    divideScalar( scalar: number ): this
    addVector( vector: Vec2 ): this
    subVector( vector: Vec2 ): this
    divideVector( vector: Vec2 ): this
    multiplyVector( vector: Vec2 ): this
    negate(): this
    inverse(): this

}