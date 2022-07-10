// vector 3 class for mathutils
export default class vec3
{
    constructor( x, y, z )
    {
        this.x = x
        this.y = y
        this.z = z

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
    
    get()
    {
        return { x: this.x, y: this.y, z: this.z }
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

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    subScalar( v, r = false )
    {
        this.x -= v
        this.y -= v
        this.z -= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z }
    }

    multiplyScalar( v, r = false )
    {
        this.x *= v
        this.y *= v
        this.z *= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    divideScalar( v, r = false )
    {
        this.x /= v
        this.y /= v
        this.z /= v

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    addVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec3
        if( !v instanceof vec3 ) return

        this.x += v.x
        this.y += v.y
        this.z += v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    subVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec3
        if( !v instanceof vec3 ) return

        this.x -= v.x
        this.y -= v.y
        this.z -= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    multiplyVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec3
        if( !v instanceof vec3 ) return

        this.x *= v.x
        this.y *= v.y
        this.z *= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }

    divideVec( v, r = false )
    {
        // type check, cannot perform functions on non-vec3
        if( !v instanceof vec3 ) return

        this.x /= v.x
        this.y /= v.y
        this.z /= v.z

        if( r === true ) return { x: this.x, y: this.y, z: this.z }

    }
}