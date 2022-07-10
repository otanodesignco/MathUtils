// vector 2 class for mathutils
export default class vec2
{
    constructor( x, y )
    {
        this.x = x
        this.y = y

        super()
    }

    // set vector
    set( x, y )
    {
        this.x = x
        this.y = y
    }

    setX( x )
    {
        this.x = x
    }

    setY( y )
    {
        this.y = y
    }
    
    get()
    {
        return { x: this.x, y: this.y }
    }

    getX()
    {
        return this.x
    }

    getY()
    {
        return this.x
    }

    addScalar( v, r = false )
    {
        this.x += v
        this.y += v

        if( r === true ) return { x: this.x, y: this.y }

    }

    subScalar( v, r = false )
    {
        this.x -= v
        this.y -= v

        if( r === true ) return { x: this.x, y: this.y }
    }

    multiplyScalar( v, r = false )
    {
        this.x *= v
        this.y *= v

        if( r === true ) return { x: this.x, y: this.y }

    }

    divideScalar( v, r = false )
    {
        this.x /= v
        this.y /= v

        if( r === true ) return { x: this.x, y: this.y }

    }

    addVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec2
        if( !v instanceof vec2 ) return

        this.x += v.x
        this.y += v.y

        if( r === true ) return { x: this.x, y: this.y }

    }

    subVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec2
        if( !v instanceof vec2 ) return

        this.x -= v.x
        this.y -= v.y

        if( r === true ) return { x: this.x, y: this.y }

    }

    multiplyVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec2
        if( !v instanceof vec2 ) return

        this.x *= v.x
        this.y *= v.y

        if( r === true ) return { x: this.x, y: this.y }

    }

    divideVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec2
        if( !v instanceof vec2 ) return

        this.x /= v.x
        this.y /= v.y

        if( r === true ) return { x: this.x, y: this.y }

    }
}