import { Vector2 } from "./Vector2";
import { Vector3 } from "./Vector3";
import { Vector4 } from "./Vector4";

export class VectorMath
{

    constructor()
    {

    }

    /**
     * 
     * Lerp
     * 
     * @param a start value
     * 
     * @param b end value
     * 
     * @param t step factor
     * 
     * @returns Linear interpolation from a -> b using t as the step
     */

    lerp( a: number, b: number, t: number ): number
    lerp( a: Vector2, b: Vector2 , t: number ): Vector2
    lerp( a: Vector3, b: Vector3 , t: number ): Vector3
    lerp( a: Vector4, b: Vector4 , t: number ): Vector4

    lerp( a: number | Vector2 | Vector3 | Vector4, b: number | Vector2 | Vector3 | Vector4, t: number ): number | Vector2 | Vector3 | Vector4 | undefined
    {
        
        if( typeof a === 'number' && typeof b === 'number' ) 
        {
            return ( 1.0 - t ) * a + b * t
        }

        if( a instanceof Vector2 && b instanceof Vector2 )
        {
            const rtnVec = new Vector2()

        let x,y,x2,y2: number

            x = a.getX()
            x2 = b.getX()

            y = a.getY()
            y2 = b.getY()

            rtnVec.setX( ( 1.0 - t) * x + x2 * t )
            rtnVec.setY( ( 1.0 - t) * y + y2 * t )

            return rtnVec
        }

        if( a instanceof Vector3 && b instanceof Vector3 )
        {
            const rtnVec = new Vector3()

            let x,y,x2,y2,z,z2: number

            x = a.getX()
            x2 = b.getX()

            y = a.getY()
            y2 = b.getY()

            z = a.getZ()
            z2 = b.getZ()

            rtnVec.setX( ( 1.0 - t) * x + x2 * t )
            rtnVec.setY( ( 1.0 - t) * y + y2 * t )
            rtnVec.setZ( ( 1.0 - t) * z + z2 * t )

            return rtnVec
        }

        if( a instanceof Vector4 && b instanceof Vector4 )
        {

            const rtnVec: Vector4 = new Vector4( 0, 0, 0, a.getW() )

            let x,y,x2,y2,z,z2: number

            x = a.getX()
            x2 = b.getX()

            y = a.getY()
            y2 = b.getY()

            z = a.getZ()
            z2 = b.getZ()

            rtnVec.setX( ( 1.0 - t) * x + x2 * t )
            rtnVec.setY( ( 1.0 - t) * y + y2 * t )
            rtnVec.setZ( ( 1.0 - t) * z + z2 * t )

            return rtnVec

        }

    }

    /**
     * 
     *  Slurp spherical linear interpolation
     * 
     * @param vector1 vec2 - 4 to perform interpolation
     * 
     * @param vector2 vec2 - 4 to perform interpolation
     * 
     * @param t number to interpolate using
     */
    
    slurp( vector1: Vector2, vector2: Vector2, t: number ): Vector2
    slurp( vector1: Vector3, vector2: Vector3, t: number ): Vector3
    slurp( vector1: Vector4, vector2: Vector4, t: number ): Vector4

    slurp( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4, t: number ): Vector2 | Vector3 | Vector4 | undefined
    {

        let angle, sinTotal, ratio1, ratio2: number

        angle = Math.acos( Math.min( Math.max( this.dot( vector1, vector2 ), -1 ), 1 ) )
        sinTotal = Math.sin( angle )

        ratio1 = Math.sin( ( 1 - t ) * angle ) / sinTotal
        ratio2 = Math.sin( t * angle ) / sinTotal

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 )
        {

            const rtnVec: Vector2 = new Vector2()

            rtnVec.setX( ratio1 * vector1.getX() + ratio2 * vector2.getX() )
            rtnVec.setY( ratio1 * vector1.getY() + ratio2 * vector2.getY() )

            return rtnVec

        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 )
        {

            const rtnVec: Vector3 = new Vector3()

            rtnVec.setX( ratio1 * vector1.getX() + ratio2 * vector2.getX() )
            rtnVec.setY( ratio1 * vector1.getY() + ratio2 * vector2.getY() )
            rtnVec.setZ( ratio1 * vector1.getZ() + ratio2 * vector2.getZ() )

            return rtnVec

        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 )
        {

            const rtnVec: Vector4 = new Vector4( 0, 0, 0, vector1.getW() )

            rtnVec.setX( ratio1 * vector1.getX() + ratio2 * vector2.getX() )
            rtnVec.setY( ratio1 * vector1.getY() + ratio2 * vector2.getY() )
            rtnVec.setZ( ratio1 * vector1.getZ() + ratio2 * vector2.getZ() )

            return rtnVec

        }
        
    }

    /**
     * 
     *  Hermite - hermite interpolation with two control points
     * 
     * @param vector1 vec2 - vec4 
     * 
     * @param vector2 vec2 - vec4
     * 
     * @param vector3 vec2 - vec4
     * 
     * @param vector4 vec2 - vec4
     * 
     * @param t step factor
     */

    hermite( vector1: Vector2, vector2: Vector2, vector3: Vector2, vector4: Vector2, t: number ): Vector2
    hermite( vector1: Vector3, vector2: Vector3, vector3: Vector3, vector4: Vector3, t: number ): Vector3
    hermite( vector1: Vector4, vector2: Vector4, vector3: Vector4, vector4: Vector4, t: number ): Vector4

    hermite( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4, vector3: Vector2 | Vector3 | Vector4, vector4: Vector2 | Vector3 | Vector4, t: number ): Vector2 | Vector3 | Vector4 | undefined
    {

        let factorOf2, factor1, factor2, factor3, factor4: number

        factorOf2 = t * t
        factor1 = factorOf2 * (2. * t - 3.) + 1.
        factor2 = factorOf2 * (t - 2.) + t
        factor3 = factorOf2 * (t - 1.)
        factor4 = factorOf2 * (3. - 2. * t)

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 && vector3 instanceof Vector2 && vector4 instanceof Vector2 )
        {

            const rtnVec: Vector2 = new Vector2()

            rtnVec.setX( vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4 )
            rtnVec.setY( vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4 )

            return rtnVec

        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 && vector3 instanceof Vector3 && vector4 instanceof Vector3 )
        {

            const rtnVec: Vector3 = new Vector3()

            rtnVec.setX( vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4 )
            rtnVec.setY( vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4 )
            rtnVec.setZ( vector1.getZ() * factor1 + vector2.getZ() * factor2 + vector3.getZ() * factor3 + vector4.getZ() * factor4 )

            return rtnVec

        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 && vector3 instanceof Vector4 && vector4 instanceof Vector4 )
        {

            const rtnVec: Vector4 = new Vector4( 0, 0, 0, vector1.getW() )

            rtnVec.setX( vector1.getX() * factor1 + vector2.getX() * factor2 + vector3.getX() * factor3 + vector4.getX() * factor4 )
            rtnVec.setY( vector1.getY() * factor1 + vector2.getY() * factor2 + vector3.getY() * factor3 + vector4.getY() * factor4 )
            rtnVec.setZ( vector1.getZ() * factor1 + vector2.getZ() * factor2 + vector3.getZ() * factor3 + vector4.getZ() * factor4 )

            return rtnVec

        }

    }

    /**
     * 
     * Mix
     * 
     * @param x starting value
     * 
     * @param y ending value
     * 
     * @param a step factor
     * 
     * @returns Interpolation between x -> y using a as the step, used of color gradients
     */

    mix( x: number, y: number, a: number ): number
    mix( x: Vector2, y: Vector2, a: number ): Vector2
    mix( x: Vector3, y: Vector3, a: number ): Vector3
    mix( x: Vector4, y: Vector4, a: number ): Vector4

    mix( x: number | Vector2 | Vector3 | Vector4, y: number | Vector2 | Vector3 | Vector4, a: number ): number | Vector2 | Vector3 | Vector4
    {

        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let r,g,b: number

        if( typeof x === 'number' && typeof y === 'number' )
        {
            rtn = x * ( 1.0 - a ) + y - a
        }

        if( x instanceof Vector2 && y instanceof Vector2 )
        {
            r = x.getX() * ( 1.0 - a) + y.getX() - a
            g = x.getY() * ( 1.0 - a) + y.getY() - a

            rtn = new Vector2( r, g )
        }

        if( x instanceof Vector3 && y instanceof Vector3 )
        {
            r = x.getX() * ( 1.0 - a ) + y.getX() - a
            g = x.getY() * ( 1.0 - a ) + y.getY() - a
            b = x.getZ() * ( 1.0 - a ) + y.getZ() - a

            rtn = new Vector3( r, g, b )
        }

        if( x instanceof Vector4 && y instanceof Vector4 )
        {
            r = x.getX() * ( 1.0 - a ) + y.getX() - a
            g = x.getY() * ( 1.0 - a ) + y.getY() - a
            b = x.getZ() * ( 1.0 - a ) + y.getZ() - a

            rtn = new Vector4( r, g, b, x.getW() )
        }



        return rtn

    }

    /**
     * 
     * Lerp Inverse
     * 
     * @param a ending number
     * 
     * @param b starting number
     * 
     * @param v inverse factor
     * 
     * @returns Reverse Interpolation of b -> a from v
     */

    lerpInverse( a: number, b: number, v: number ): number
    lerpInverse( a: Vector2, b: Vector2, v: number ): Vector2
    lerpInverse( a: Vector3, b: Vector3, v: number ): Vector3
    lerpInverse( a: Vector4, b: Vector4, v: number ): Vector4

    lerpInverse( a: number | Vector2 | Vector3 | Vector4, b: number | Vector2 | Vector3 | Vector4, v: number ): number | Vector2 | Vector3 | Vector4
    {

        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let x,y,z: number

        if( typeof a === 'number' && typeof b === 'number')
        {
            rtn = ( v - a ) / ( b - a )
        }

        if( a instanceof Vector2 && b instanceof Vector2 )
        {
            x = ( v - a.getX() ) / ( b.getX() - a.getX() )
            y = ( v - a.getY() ) / ( b.getY() - a.getY() )

            rtn = new Vector2( x, y )
        }

        if( a instanceof Vector3 && b instanceof Vector3 )
        {
            x = ( v - a.getX() ) / ( b.getX() - a.getX() )
            y = ( v - a.getY() ) / ( b.getY() - a.getY() )
            z = ( v - a.getZ() ) / ( b.getZ() - a.getZ() )

            rtn = new Vector3( x, y, z )
        }

        if( a instanceof Vector4 && b instanceof Vector4 )
        {
            x = ( v - a.getX() ) / ( b.getX() - a.getX() )
            y = ( v - a.getY() ) / ( b.getY() - a.getY() )
            z = ( v - a.getZ() ) / ( b.getZ() - a.getZ() )

            rtn = new Vector4( x, y, z, a.getW() )
        }

        return rtn

    }

    /**
     * 
     *  Remap
     * 
     * @param lmin input min value
     * 
     * @param lmax input max value
     * 
     * @param omin output min value
     * 
     * @param omax output max value
     * 
     * @param v remap factor
     * 
     * @returns Remaps the input values lmin & lmax with linear interploation of the values using v as the step
     */

    remap( lmin: number, lmax: number, omin: number, omax: number, v: number ): number
    {

        let t: number = this.lerpInverse( lmin, lmax, v )

        return this.lerp( omin, omax, t )

    }

    /**
     * 
     * Cross
     * 
     * @param vector1 first vector
     * 
     * @param vector2 second vector
     * 
     * @returns Cross product of vector1 and vector2
     */

    cross( vector1: Vector3, vector2: Vector3 ): Vector3
    {
        const rtnVector = new Vector3( 0, 0, 0 )

        rtnVector.setX( ( vector1.getY() * vector2.getZ() ) - ( vector2.getY() * vector1.getZ() ) )
        rtnVector.setY( ( vector1.getZ() * vector2.getX() ) - ( vector2.getZ() * vector1.getX() ) )
        rtnVector.setZ( ( vector1.getX() * vector2.getY() ) - ( vector2.getX() * vector1.getY() ) )

        return rtnVector
    }

    /**
     * 
     * Clamp
     * 
     * @param val value to constrain
     * 
     * @param min min value that val can be
     * 
     * @param max max value that val can be
     * 
     * @returns constrain value between min and max
     */

    clamp( val: number, min: number, max: number): number
    clamp( val: Vector2, min: number, max: number): Vector2
    clamp( val: Vector3, min: number, max: number): Vector3
    clamp( val: Vector4, min: number, max: number): Vector4

    clamp( val: number | Vector2 | Vector3 | Vector4, min: number, max: number): number | Vector2 | Vector3 | Vector4
    {

        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let x,y,z: number

        if( typeof val == 'number' )
        {
            rtn = Math.min( Math.max( val, min), max )
        }
        if( val instanceof Vector2 )
        {
            
            x = Math.min( Math.max( val.getX(), min), max ) 
            y = Math.min( Math.max( val.getY(), min), max ) 

            rtn =  new Vector2( x, y )

        }
        if( val instanceof Vector3 )
        {
        
            x = Math.min( Math.max( val.getX(), min), max ) 
            y = Math.min( Math.max( val.getY(), min), max ) 
            z = Math.min( Math.max( val.getZ(), min), max ) 

            rtn = new Vector3( x, y, z)

        }
        if( val instanceof Vector4 )
        {
            x = Math.min( Math.max( val.getX(), min), max ) 
            y = Math.min( Math.max( val.getY(), min), max ) 
            z = Math.min( Math.max( val.getZ(), min), max ) 

            rtn = new Vector4( x, y, z, val.getW() )

        }

        return rtn

    }

    /**
     * 
     * Fract
     * 
     * @param value number for fractional product
     * 
     * @returns frational product of value
     */

    fract( value: number ): number
    {

        return value - Math.floor( value )

    }

    /**
     * 
     * Length
     * 
     * @param vector vector object
     * 
     * @returns Length of the vector
     */

    length( vector: Vector2 | Vector3 | Vector4 ): number
    {
        let rtnValue: number = 0

        if( vector instanceof Vector2 ) rtnValue = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 )
        
        if( vector instanceof Vector3 || vector instanceof Vector4 ) rtnValue = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 ) + ( vector.getZ() ** 2 )

        return Math.sqrt( rtnValue )
    }

    /**
     * 
     * Dot
     * 
     * @param vector1  first vector object
     * 
     * @param vector2 second vector
     * 
     * @returns Dot product of vector1 & vector2
     */
    
   
    dot( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4 ): number
    {
        let rtnVal: number = 0

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 )
        {
            rtnVal = ( ( vector1.getX() * vector2.getX() ) + ( vector1.getY() * vector2.getY() ) )
        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 )
        {
            rtnVal = ( ( vector1.getX() * vector2.getX() ) + ( vector1.getY() * vector2.getY() ) + ( vector1.getZ() * vector2.getZ() ) )
        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 )
        {
            rtnVal = ( ( vector1.getX() * vector2.getX() ) + ( vector1.getY() * vector2.getY() ) + ( vector1.getZ() * vector2.getZ() ) )
        }

        return rtnVal
        
    }

    /**
     * 
     * Distance
     * 
     * @param vector1 first vector
     * 
     * @param vector2 second vector
     * 
     * @returns  Distance from vector1 to vector2
     */

     distance( vector1: Vector2, vector2: Vector2 ): number
     distance( vector1: Vector3, vector2: Vector3 ): number
     distance( vector1: Vector4, vector2: Vector4 ): number

    distance( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4 ): number
    {
        let subVec: Vector2 | Vector3 | Vector4
        let rtnVal: number = 0

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 )
        {
            subVec = new Vector2( vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY() )

            rtnVal = this.length( subVec )
        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 )
        {
            subVec = new Vector3( vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY(), vector1.getZ() - vector2.getZ() )

            rtnVal = this.length( subVec )
        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 )
        {
            subVec = new Vector3( vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY(), vector1.getZ() - vector2.getZ() )

            rtnVal = this.length( subVec )
        }


        return rtnVal

    }

    /**
     * 
     * Normalize
     * 
     * @param vector vector to normalize
     * 
     * @returns Normalized unit vector
     */

    normalize( vector: Vector2 | Vector3 | Vector4 ): Vector2 | Vector3 | Vector4
    {
       let rtnVec: Vector2 | Vector3 | Vector4 = new Vector2( 0, 0 )

        let len: number = 0
        let rtnLen: number = 0

        if( vector instanceof Vector2 )
        {
            len = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 )

            rtnVec.copy( vector )

            if( len > 0 )
            {
                
                rtnLen = Math.sqrt( len )

                rtnVec.setX( rtnVec.getX() / rtnLen )
                rtnVec.setY( rtnVec.getY() / rtnLen )

            }


        }

        if( vector instanceof Vector3  )
        {
            len = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 ) + ( vector.getZ() )

            rtnVec = new Vector3( vector.getX(), vector.getY(), vector.getZ() )

            if( len > 0 )
            {

                rtnLen = Math.sqrt( len )

                rtnVec.setX( rtnVec.getX() / rtnLen )
                rtnVec.setY( rtnVec.getY() / rtnLen )
                rtnVec.setZ( rtnVec.getZ() / rtnLen )

            }


        }

        if( vector instanceof Vector4  )
        {
            len = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 ) + ( vector.getZ() )

            rtnVec = new Vector4( vector.getX(), vector.getY(), vector.getZ(), vector.getW() )

            if( len > 0 )
            {

                rtnLen = Math.sqrt( len )

                rtnVec.setX( rtnVec.getX() / rtnLen )
                rtnVec.setY( rtnVec.getY() / rtnLen )
                rtnVec.setZ( rtnVec.getZ() / rtnLen )

            }


        }

        return rtnVec

    }
    /**
     * 
     * Step
     * 
     * @param vector1 
     * 
     * @param vector2 
     * 
     * @returns Return 0 or 1 for each vector point depending on if vector2 is less than vector 1 per point
     * 
     */

    step( vector1: number, vector2: number ): number
    step( vector1: Vector2, vector2: Vector2 ): Vector2
    step( vector1: Vector3, vector2: Vector3 ): Vector3
    step( vector1: Vector4, vector2: Vector4 ): Vector4

    step( vector1: number | Vector2 | Vector3 | Vector4, vector2: number | Vector2 | Vector3 | Vector4 ): number | Vector2 | Vector3 | Vector4
    {
        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let x, y, z: number

        if( typeof vector1 === 'number' && typeof vector2 === 'number' )
        {
            rtn = ( ( vector2 < vector1 ) ? 0 : 1 )
        }

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 )
        {
        
            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            
            rtn = new Vector2( x, y )

        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 )
        {
            
            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            z = ( ( vector2.getZ() < vector1.getZ() ) ? 0 : 1 )
            
            rtn = new Vector3( x, y, z )

        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 )
        {
            
            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            z = ( ( vector2.getZ() < vector1.getZ() ) ? 0 : 1 )
            
            rtn = new Vector4( x, y, z, 1 )

        }

        return rtn

    }

    /**
     * 
     * Smoothstep
     * 
     * @param e1  Edge 1
     * 
     * @param e2  Edge 2
     * 
     * @param x  Interpolation factor
     * 
     * @returns smooth interpolation between e1 -> e2
     */

    smoothstep( e1: number, e2: number, x: number ): number
    smoothstep( e1: Vector2, e2: Vector2, x: number ): Vector2
    smoothstep( e1: Vector3, e2: Vector3, x: number ): Vector3
    smoothstep( e1: Vector4, e2: Vector4, x: number ): Vector4

    smoothstep( e1: number | Vector2 | Vector3 | Vector4, e2: number | Vector2 | Vector3 | Vector4, x: number ): number | Vector2 | Vector3 | Vector4
    {

        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let r, g, b, t, t1, t2, t3: number

        if( typeof e1 === 'number' && typeof e2 === 'number' )
        {

            if( e1 >= e2 )
            {

                return 0

            }

            t = this.clamp( ( x - e1 ) / ( e2 - e1 ), 0.0, 1.0 )
            rtn = t * t * ( 3.0 - 2.0 * t )
            

        }

        if( e1 instanceof Vector2 && e2 instanceof Vector2 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() && e2.getY() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * ( 3.0 - 2.0 * t1 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * ( 3.0 - 2.0 * t2 )

            rtn = new Vector2( r, g )

        }

        if( e1 instanceof Vector3 && e2 instanceof Vector3 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * ( 3.0 - 2.0 * t1 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * ( 3.0 - 2.0 * t2 )

            t3= this.clamp( ( x - e1.getZ() ) / ( e2.getZ() - e1.getZ() ), 0.0, 1.0 )
            b = t3 * t3 * ( 3.0 - 2.0 * t3 )

            rtn = new Vector3( r, g, b )

        }

        if( e1 instanceof Vector4 && e2 instanceof Vector4 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * ( 3.0 - 2.0 * t1 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * ( 3.0 - 2.0 * t2 )

            t3= this.clamp( ( x - e1.getZ() ) / ( e2.getZ() - e1.getZ() ), 0.0, 1.0 )
            b = t3 * t3 * ( 3.0 - 2.0 * t3 )

            rtn = new Vector4( r, g, b, e1.getW() )

        }
        
        
        return rtn

    }

    /**
     * 
     * Smootherstep
     * 
     * @param e1  Edge 1
     * 
     * @param e2  Edge 2
     * 
     * @param x  Interpolation factor
     * 
     * @returns Smoother interpolation between e1 -> e2
     */

     smootherstep( e1: number, e2: number, x: number ): number
     smootherstep( e1: Vector2, e2: Vector2, x: number ): Vector2
     smootherstep( e1: Vector3, e2: Vector3, x: number ): Vector3
     smootherstep( e1: Vector4, e2: Vector4, x: number ): Vector4

    smootherstep( e1: number | Vector2 | Vector3 | Vector4, e2: number | Vector2 | Vector3 | Vector4, x: number ): number | Vector2 | Vector3 | Vector4
    {

        let rtn: number | Vector2 | Vector3 | Vector4 = 0
        let r, g, b, t, t1, t2, t3: number

        if( typeof e1 === 'number' && typeof e2 === 'number' )
        {

            if( e1 >= e2 )
            {

                return 0

            }

            t = this.clamp( ( x - e1 ) / ( e2 - e1 ), 0.0, 1.0 )
            rtn = t * t * t * ( t * ( 6.0 * t - 15.0 ) + 10.0 )

        }

        if( e1 instanceof Vector2 && e2 instanceof Vector2 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() && e2.getY() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * t1 * ( t1 * ( 6.0 * t1 - 15.0 ) + 10.0 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * t2 * ( t2 * ( 6.0 * t2 - 15.0 ) + 10.0 )

            rtn = new Vector2( r, g )

        }

        if( e1 instanceof Vector3 && e2 instanceof Vector3 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * t1 * ( t1 * ( 6.0 * t1 - 15.0 ) + 10.0 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * t2 * ( t2 * ( 6.0 * t2 - 15.0 ) + 10.0 )

            t3= this.clamp( ( x - e1.getZ() ) / ( e2.getZ() - e1.getZ() ), 0.0, 1.0 )
            b = t3 * t3 * t3 * ( t3 * ( 6.0 * t3 - 15.0 ) + 10.0 )

            rtn = new Vector3( r, g, b )

        }

        if( e1 instanceof Vector4 && e2 instanceof Vector4 )
        {

            if( e1.getX() >= e2.getX() && e1.getY() >= e2.getY() && e1.getZ() >= e2.getZ() )
            {

                return 0

            }

            t1 = this.clamp( ( x - e1.getX() ) / ( e2.getX() - e1.getX() ), 0.0, 1.0 )
            r = t1 * t1 * t1 * ( t1 * ( 6.0 * t1 - 15.0 ) + 10.0 )

            t2= this.clamp( ( x - e1.getY() ) / ( e2.getY() - e1.getY() ), 0.0, 1.0 )
            g = t2 * t2 * t2 * ( t2 * ( 6.0 * t2 - 15.0 ) + 10.0 )

            t3= this.clamp( ( x - e1.getZ() ) / ( e2.getZ() - e1.getZ() ), 0.0, 1.0 )
            b = t3 * t3 * t3 * ( t3 * ( 6.0 * t3 - 15.0 ) + 10.0 )

            rtn = new Vector4( r, g, b, e1.getW() )

        }
        
        
        return rtn

    }

}