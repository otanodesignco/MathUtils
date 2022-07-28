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
     * @param a 
     * 
     * @param b 
     * 
     * @param t 
     * 
     * @returns Linear interpolation from a -> b using t as the step
     */

    lerp( a: number, b: number, t: number ): number
    {
        
        return ( 1.0 - t ) * a + b * t

    }

    /**
     * 
     * Mix
     * 
     * @param x 
     * 
     * @param y 
     * 
     * @param a 
     * 
     * @returns Interpolation between x -> y using a as the step, used of color gradients
     */

    mix( x: number, y: number, a: number ): number
    {

        return x * ( 1.0 - a ) + y -a

    }

    /**
     * 
     * Lerp Inverse
     * 
     * @param a 
     * 
     * @param b 
     * 
     * @param v 
     * 
     * @returns Reverse Interpolation of b -> a from v
     */

    lerpInverse( a: number, b: number, v: number ): number
    {

        return ( v - a ) / ( b - a )

    }

    /**
     * 
     *  Remap
     * 
     * @param lmin 
     * 
     * @param lmax 
     * 
     * @param omin 
     * 
     * @param omax 
     * 
     * @param v 
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
     * @param vector1 
     * 
     * @param vector2 
     * 
     * @returns Cross product of vector1 and vector2
     */

    cross( vector1: Vector3 | Vector4, vector2: Vector3 | Vector4 ): Vector3
    {
        const rtnVector = new Vector3( 0, 0, 0 )

        rtnVector.setX( ( vector1.getY() * vector2.getZ() ) - ( vector2.getY() * vector1.getZ() ) )
        rtnVector.setY( ( vector1.getZ() * vector2.getX() ) - ( vector2.getZ() * vector1.getX() ) )
        rtnVector.setZ( ( vector1.getX() * vector2.getY() ) - ( vector2.getX() * vector1.getY() ) )

        return rtnVector
    }

    clamp( val: number, min: number, max: number): number
    {

        return Math.min( Math.max( val, min), max )

    }

    fract( value: number ): number
    {

        return value - Math.floor( value )

    }

    length( vector: Vector2 | Vector3 | Vector4 ): number
    {
        let rtnValue: number = 0

        if( vector instanceof Vector2 ) rtnValue = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 )
        
        if( vector instanceof Vector3 || vector instanceof Vector4 ) rtnValue = ( vector.getX() ** 2 ) + ( vector.getY() ** 2 ) + ( vector.getZ() ** 2 )

        return Math.sqrt( rtnValue )
    }

    dot( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4 ): number
    {
        let rtnVal: number = 0

        if( vector1 instanceof Vector2 )
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

    step( vector1: Vector2 | Vector3 | Vector4, vector2: Vector2 | Vector3 | Vector4 ): Vector2 | Vector3 | Vector4
    {
        let rtnVec: Vector2 | Vector3 | Vector4 = new Vector2( 0, 0 )

        if( vector1 instanceof Vector2 && vector2 instanceof Vector2 )
        {
            let x,y: number
            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            
            rtnVec.set( x, y )
        }

        if( vector1 instanceof Vector3 && vector2 instanceof Vector3 )
        {
            let x,y,z: number
            rtnVec = new Vector3( 0, 0, 0 )

            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            z = ( ( vector2.getZ() < vector1.getZ() ) ? 0 : 1 )
            
            rtnVec.set( x, y, z )
        }

        if( vector1 instanceof Vector4 && vector2 instanceof Vector4 )
        {
            let x,y,z: number
            rtnVec = new Vector4( 0, 0, 0, 1 )

            x = ( ( vector2.getX() < vector1.getX() ) ? 0 : 1 )
            y = ( ( vector2.getY() < vector1.getY() ) ? 0 : 1 )
            z = ( ( vector2.getZ() < vector1.getZ() ) ? 0 : 1 )
            
            rtnVec.set( x, y, z, 1 )
        }

        return rtnVec

    }

}