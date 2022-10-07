// làm lại các chức năng api
// nhưng mà fetch(promise) + class(thay thế constructor)
class FastHttp {
    send ( method, url, body ) {
        return fetch( url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify( body ) : null,
        } )
            .then( response => {
                if ( response.ok ) {
                    return response.json();
                } else {
                    throw new Error( response.statusText );
                }
            } );
    }
    // get
    get ( url ) {
        return this.send( 'GET', url, null );
    }

    //post
    post ( url, body ) {
        return this.send( 'POST', url, body );
    }

    // put
    put ( url, body ) {
        return this.send( 'PUT', url, body );
    }

    // delete
    delete ( url ) {
        return this.send( 'DELETE', url, null );
    }
}

// test code 
// api server
let baseURL = 'https://6336fad05327df4c43cd921b.mockapi.io/users';
const http = new FastHttp();
// http.get( baseURL )
//     .then( ( value ) => {
//         console.log( 'lấy data là: ', value );
//     } )
//     .catch( ( error ) => {
//         console.log( 'lấy data thất bại vì: ', error );
//     } );


// test post
http.post( baseURL, { name: 'điệp 100', yob: 2002 } )
    .then( ( value ) => {
        console.log( 'lấy data là: ', value );
    } )
    .catch( ( error ) => {
        console.log( 'thêm data thất bại vì: ', error );
    } );
















































































































// 