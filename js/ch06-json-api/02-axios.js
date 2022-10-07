//02-axios.js
// axios là gì? => 1 http client hoạt động trong môi trường nodejs và trình duyệt
//                  1 thứ viện giúp tương tác với api như get post
//
//  phải cài đặt bằng cdn
// axios( {
//     method: 'get',
//     url: 'https://6336fad05327df4c43cd921b.mockapi.io/users',
// } ).then( ( response ) => {
//     if ( response.status == 200 ) {
//         return response.data;
//     } else {
//         throw new Error( response.statusText );
//     }
// } ).then( value => {
//     console.log( 'dữ liệu là: ' );
//     console.log( value );
// } ).catch( error => {
//     console.log( 'lấy dữ liệu bị lỗi vì: ' );
//     console.log( error );
// } );

// ------------------------------------------------------
// Request method aliases
// axios.post( 'https://6336fad05327df4c43cd921b.mockapi.io/users',
//     { name: 'Điệp axios', yob: 2003 },
//     {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     },
// ).then( response => {
//     console.log( 'thành công: ' );
//     console.log( response );
// } );

// tạo 1 instance để khỏi phải cài đặt mỗi lần dùng
// const instance = axios.create( {
//     baseURL: 'https://6336fad05327df4c43cd921b.mockapi.io',
//     timeout: 10000, // sau 10s  mà ko xử lý được thì tự hủy
//     headers: { 'Content-Type': 'application/json' },
// } );
// //get
// instance.get( 'users' ).then( ( response ) => {
//     console.log( response );
// } );
// // post
// instance
//     .post( 'users', { name: 'Điệp khó tính', yob: 1999 } )
//     .then( ( response ) => {
//         console.log( response );
//     } );


// -------------------------------------------------------
// dùng class + instance + Interceptors
// Interceptors: config request vaf config response

class Http { //xu hướng hay đặt tên này 
    constructor() {
        this.instance = axios.create( {
            baseURL: 'https://6336fad05327df4c43cd921b.mockapi.io',
            timeout: 10000, // sau 10s  mà ko xử lý được thì tự hủy
            headers: { 'Content-Type': 'application/json' },
        } );
        // dùng interceptor cấu hình lại response 
        this.instance.interceptors.response.use( response => {
            const result = {
                data: response.data,
                status: response.status
            };
            return result;
        }, ( response ) => {
            const result = {
                data: response.data,
                status: response.status
            };
            return Promise.reject( result );
        } );
        // cấu hình cho request
        //nếu như có accessToken thì tui sẽ gửi kèm cho anh 
        // còn ko thì thôi
        this.instance.interceptors.request.use( ( request ) => {
            const accesstoken = localStorage.getItem( 'accesstoken' );
            if ( accesstoken ) {
                request.headers.authorization = accesstoken;
            }
            return request;
        } );
    };
}

let http = new Http().instance;
http.post( 'users', { name: 'Điệp http', yob: 2005 } ).then( response => {
    console.log( response );
} );























































































