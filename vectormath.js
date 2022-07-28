import vec2 from 'vec2'
import vec3 from 'vec3'
import vec4 from 'vec4'

export default class MathUtils
{
    constructor()
    {
        
    } 

    lerp( a, b, t )
    {
        return ( 1.0 - t ) * a + b * t
    }

    cross( v1, v2 )
    {
        let rtnVec =
        {
            x: 0,
            y: 0,
            z: 0,
        }

        rtnVec.x = ( v1[1] * v2[2] ) - ( v2[1] - v1[2] )
        rtnVec.y = ( v1[2] * v2[0] ) - ( v2[2] - v1[0] )
        rtnVec.z = ( v1[0] * v2[1] ) - ( v2[0] - v1[1] )

        return rtnVec
    }
    // needs to be reworked to handle colors in int form
    mix( x, y, a)
    {
        return x * ( 1 - a ) + y -a
    }

    lerpInverse( a, b, v )
    {
        return ( v - a ) / ( b - a )
    }
    
    remap( lmin, lmax, omin, omax, v )
    {
        let t = this.lerpInverse( lmin, lmax, v )
        return this.lerp( omin, omax, t )
    }
    clamp( val, min, max)
    {
        return Math.min( Math.max( val, min), max )
    }
    fract( val )
    {
        return val - Math.floor( val )
    }

    length( v1, l )
    {
        let rtnVal = 0

        if( l === 2 ) rtnVal = ( v1[0] ** 2 ) + ( v1[1] ** 2 )
        
        if( l === 3 ) rtnVal = ( v1[0] ** 2 ) + ( v1[1] ** 2 ) + ( v1[2] ** 2 )

        return Math.sqrt( rtnVal )
    }

    distance( v1, v2 , l)
    {
        let subVec = {}
        let rtnVal = 0

        if( l === 2 )
        {
            subVec = 
            {
                x: v1[0] - v2[0],
                y: v1[1] - v2[1],
            }

            rtnVal = this.length( subVec, 2 )
        }

        if( l === 3 )
        {
            subVec = 
            {
                x: v1[0] - v2[0],
                y: v1[1] - v2[1],
                z: v1[2] - v2[2],
            }

            rtnVal = this.length( subVec, 3 )
        }

        return rtnVal

    }

    normalize( v , l )
    {
       let rtnVec = {}

        let len = 0
        let rtnLen = 0

        if( l === 2 )
        {
            len = ( v1[0] ** 2 ) + ( v1[1] ** 2 )

            rtnVec = 
            {
                x: v[0],
                y: v[1],
            }
        }

        if( l === 3 )
        {
            len = ( v1[0] ** 2 ) + ( v1[1] ** 2 ) + ( v1[2] ** 2 )

            rtnVec = 
            {
                x: v[0],
                y: v[1],
                z: v[2],
            }
        }

        if( len > 0 ) 
        {
            rtnLen = Math.sqrt( len )

            if( l === 2)
            {
                rtnVec.x = rtnVec.x / rtnLen
                rtnVec.y = rtnVec.y / rtnLen
            }

            if( l === 3 )
            {
                rtnVec.x = rtnVec.x / rtnLen
                rtnVec.y= rtnVec.y / rtnLen
                rtnVec.z = rtnVec.z / rtnLen
            }
        }

        return rtnVec
    }

    // dot product of a vector object for 2 and 3 length vectors
    dot( vec1, vec2, vecSize )
    {
        let rtnVal = 0

        if( vecSize === 2 )
        {
            rtnVal = ( (vec1.x * vec2.x) + ( vec1.y * vec2.y ) )
        }

        if( vecSize === 3)
        {
            rtnVal = ( (vec1.x * vec2.x) + ( vec1.y * vec2.y ) + ( vec1.z * vec2.z ) )
        }

        return rtnVal
        
    }

    step( v1, v2, l )
    {
        let rtnVec = {}

        if( l === 2 )
        {
            let rtnVec = 
            {
                x: ( ( v2[0] < v1[0] ) ? 0 : 1 ),
                y: ( ( v2[1] < v1[1] ) ? 0 : 1 ),
            }
        }

        if( l === 3 )
        {
            let rtnVec = 
            {
                x: ( ( v2[0] < v1[0] ) ? 0 : 1 ),
                y: ( ( v2[1] < v1[1] ) ? 0 : 1 ),
                z: ( ( v2[2] < v1[2] ) ? 0 : 1 ),
            }
        }

        return rtnVec

    }
     
    smoothstep( e1, e2, x )
    {
        if( e1 >= e2 )
        {
            return 0
        }
        
        let t = this.clamp( ( x - e1) / ( e2 - e1 ), 0.0, 1.0 )

        return t * t * ( 3.0 - 2.0 * t )
    }

    smootherstep( e1, e2, x )
    {

        if( e1 >= e2 )
        {
            return 0
        }
        
        let t = this.clamp( ( x - e1) / ( e2 - e1 ), 0.0, 1.0 )

        return t * t * t * ( t * ( 6.0 * t - 15.0 ) + 10.0 )

    }
    
    reflect( i, n , l )
    {

        let rtnVec = {}
        let normN = this.normalize( n, l )

        if( l === 2 )
        {
            rtnVec = 
            {
                x: i[0] - 2.0 * this.dot( i, n ) * n[0],
                y: i[1] - 2.0 * this.dot( i, n ) * n[1],
            }
        }

        if( l === 3 )
        {
            rtnVec = 
            {
                x: i[0] - 2.0 * this.dot( i, n ) * n[0],
                y: i[1] - 2.0 * this.dot( i, n ) * n[1],
                y: i[2] - 2.0 * this.dot( i, n ) * n[2],
            }
        }

        return rtnVec

    }

    refract( i, n, eta, l  )
    {
        i = this.normalize( i, l )
        n = this.normalize( n, l )

        let k = 1.0 - eta * eta * ( 1.0 - this.dot( n, i ) * this.dot( n, i ) )
        let rtnVec = {}

        if( l === 2 )
        {

            if( k < 0.0 )
            {
                rtnVec = 
                {
                    x: 0.0,
                    y: 0.0
                }

            }
            else
            {
                rtnVec = 
                {
                    x: eta * i[0] - ( eta * this.dot( n, i ) + Math.sqrt( k ) ) * n[0],
                    y: eta * i[1] - ( eta * this.dot( n, i ) + Math.sqrt( k ) ) * n[2],
                }
            }

        }

        if( l === 3 )
        {

            if( k < 0.0 )
            {
                rtnVec = 
                {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                }

            }
            else
            {
                rtnVec = 
                {
                    x: eta * i[0] - ( eta * this.dot( n, i ) + Math.sqrt( k ) ) * n[0],
                    y: eta * i[1] - ( eta * this.dot( n, i ) + Math.sqrt( k ) ) * n[1],
                    z: eta * i[2] - ( eta * this.dot( n, i ) + Math.sqrt( k ) ) * n[2],
                }
            }

        }

        return rtnVec
    }
}