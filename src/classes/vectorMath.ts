import { Vector2 } from "./Vector2";
import { Vector3 } from "./Vector3";
import { Vector4 } from "./Vector4";

export class VectorMath
{

    constructor()
    {

    }

    lerp( a: number, b: number, t: number ): number
    {
        
        return ( 1.0 - t ) * a + b * t

    }

    mix( x: number, y: number, a: number ): number
    {

        return x * ( 1.0 - a ) + y -a

    }

    lerpInverse( a: number, b: number, v: number ): number
    {

        return ( v - a ) / ( b - a )

    }

    remap( lmin: number, lmax: number, omin: number, omax: number, v: number ): number
    {

        let t: number = this.lerpInverse( lmin, lmax, v )

        return this.lerp( omin, omax, t )

    }

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

}