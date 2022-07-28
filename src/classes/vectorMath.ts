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

}