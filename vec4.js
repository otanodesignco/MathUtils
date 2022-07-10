// vector 4 class for mathutils
export default class vec4
{
    constructor( x, y, z, w )
    {
        this.x = x
        this.y = y
        this.z = z
        // w specifies if this vector is a point or not
        this.w = ( (w === 0 || w === 1 ) ? w : 0 )

        super()
    }

    // set vector
    set( x, y, z )
    {
        this.x = x
        this.y = y
        this.z = z
    }

    setX( x )
    {
        this.x = x
    }

    setY( y )
    {
        this.y = y
    }

    setZ( z )
    {
        this.z = z
    }

    toPosition()
    {
        if( this.w === 1) return
        this.w = 1
    }
    toPoint()
    {
        if( this.w === 0) return
        this.w = 0
    }

    isPosition()
    {
        return ( ( this.w === 1 ) ? true : false )
    }

    isPoint()
    {
        return ( ( this.w === 0 ) ? true : false )
    }
    
    get()
    {
        return { x: this.x, y: this.y, z: this.z, w: this.w }
    }

    getX()
    {
        return this.x
    }

    getY()
    {
        return this.x
    }

    getZ()
    {
        return this.z
    }

    addScalar( v, r = false )
    {
        this.x += v
        this.y += v
        this.z += v

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    subScalar( v, r = false )
    {
        this.x -= v
        this.y -= v
        this.z -= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }
    }

    multiplyScalar( v, r = false )
    {
        this.x *= v
        this.y *= v
        this.z *= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    divideScalar( v, r = false )
    {
        this.x /= v
        this.y /= v
        this.z /= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    addVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec4
        if( !v instanceof vec4 ) return

        this.x += v.x
        this.y += v.y
        this.z += v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    subVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec4
        if( !v instanceof vec4 ) return

        this.x -= v.x
        this.y -= v.y
        this.z -= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    multiplyVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec4
        if( !v instanceof vec4 ) return

        this.x *= v.x
        this.y *= v.y
        this.z *= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }

    divideVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec4
        if( !v instanceof vec4 ) return

        this.x /= v.x
        this.y /= v.y
        this.z /= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z, w: this.w }

    }
}