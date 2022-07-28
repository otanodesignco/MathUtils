export interface Vec2 
{

    x: number
    y: number
    set( x: number, y: number ): void
    setX( x: number ): void
    setY( y: number ): void
    get(): object
    getX(): number
    getY(): number
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

}