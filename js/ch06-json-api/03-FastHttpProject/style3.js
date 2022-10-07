class FastHttp {
    async send ( method, url, body ) {
        let response = await fetch( url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify( body ) : null,
        } );
        if ( response.ok ) {
            return response.json();
        } else {
            throw new Error( response.statusText );
        }
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

// dùng thử get
let baseURL = 'https://6336fad05327df4c43cd921b.mockapi.io/users';
let http = new FastHttp();
( async () => {
    try {
        const value = await http.get( baseURL );
        console.log( 'dữ liệu lây được là: ', value );
    } catch ( error ) {
        console.log( 'lỗi vì: ', error );
    }
} )();





































































