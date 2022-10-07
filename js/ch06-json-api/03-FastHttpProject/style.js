// xây dựng 1 ứng dụng mà cứ đưa api vào xài được


//trước tiên mình tìm hiểu về RESTful API
// API(Application Programming interface): là tập hợp các quy tắc cơ chế mà theo đó
//      một ứng dụng(thành phần) tương tác với với ứng dụng(thành phần) khác
//      trả về những dữ liệu mình cần dưới dạng phổ biến như json/XML

// REST :một dạng chuyển đổi cấu trúc dữ liệu,một kiểu kiến trúc để viết API
//      sử dụng phương thức HTTP đơn giản để tạo giao tiếp giữa các máy, thay vì dùng
//      1 url để xử lý 1 số thông tin người dùng thì "REST gữi 1 yêu cầu HTTP như GET/POST/DELETE
//      đến 1 url để xử lý dữ liệu"

// RESTful API: hoạt động dựa trên giao thức HTTP,các hoạt động CRUD sẽ dùng phương thức http riêng
//      -GET    (SELECT):trả về (danh sách)resource
//      -POST   (CREATE):tạo mới một resource
//      -PUT    (UPDATE):cập nhật thông tin cho resource
//      -DELETE (DELETE):xóa một resource

// các lập trình viên hiện nay đều xây dựng RESTful API theo các method CRUD
//--CREATE      READ        UPDATE      DELETE



const baseURL = 'https://6336fad05327df4c43cd921b.mockapi.io/users';
// Callback + XMLHttpRequest + constructor function + prototype
// 
function FastHttp () {
    this.xhr = new XMLHttpRequest();
}
// 1.tạo 1 method get nhận vào 1 url và 1 cái callback
// nếu như url này kết nối được thì callback sẽ nhận 2 parameter
//                          (trạng thái lỗi, data từ url)
// FastHttp.prototype.get = function ( url, callback ) {
//     this.xhr.onreadystatechange = function () {
//         if ( this.readyState == 4 ) { //nhận response rồi mới làm
//             if ( this.status == 200 | this.status == 201 ) {
//                 //200: get thành công | 201: post thành công
//                 callback( null, JSON.parse( this.responseText ) );
//             }
//         }
//     };
//     this.xhr.open( 'GET', url, true );
//     this.xhr.send();
// };
// test thử
// const http = new FastHttp();
// http.get( baseURL, ( error, value ) => {
//     if ( error ) {
//         console.log( 'Errors', error );
//     } else {
//         console.log( 'đã lấy thành công ', value );
//     }
// } );

//post dữ liệu lên (thêm mới 1 đối tượng)
// FastHttp.prototype.get = function ( url, callback ) {
//     this.xhr.onreadystatechange = function () {
//         if ( this.readyState == 4 ) { //nhận response rồi mới làm
//             if ( [200, 201].includes( this.status ) ) {
//                 //200: get thành công | 201: post thành công
//                 callback( null, JSON.parse( this.responseText ) );
//             } else {
//                 callback( this.responseText, null );
//             }
//         }
//     };
//     this.xhr.open( 'GET', url, true );
//     this.xhr.setRequestHeader( 'Content-Type', 'application/json' );
//     this.xhr.send( JSON.stringify( body ) );
// };

//test thử chức năng post
// let http = new FastHttp();
// http.post( baseURL, { name: 'Điệp dancer', yob: 2009 }, ( error, value ) => {
//     if ( error ) {
//         console.log( 'không thêm được vì: ', error );
//     } else {
//         console.log( 'đối tượng đã thêm là: ', value );
//     }
// } );

//độ lại cách viết để không lặp lại code
// làm 1 hàm tên là send 
FastHttp.prototype.send = function ( method, url, body, callback ) {
    this.xhr.onreadystatechange = function () {
        if ( this.readyState == 4 ) {
            if ( [200, 201].includes( this.status ) ) {
                callback( null, JSON.parse( this.responseText ) );
            } else {
                callback( this.responseText, null );
            }
        }
    };
    this.xhr.open( method, url, true );
    this.xhr.setRequestHeader( 'Content-Type', 'application/json' );
    this.xhr.send( body ? JSON.stringify( body ) : null );
};
//get
// send('GET', baseURL, null, callback)

// post
// send('POST', baseURL, {name:'Điệp', yob:2002}, callback)

// xây dựng hàm get dựa trên hàm send 
FastHttp.prototype.get = function ( url, callback ) {
    this.send( 'GET', url, null, callback );
};

// xây dựng hàm post dựa trên hàm send
FastHttp.prototype.post = function ( url, body, callback ) {
    this.send( 'POST', url, body, callback );
};

// xây dựng hàm put dựa trên hàm send
FastHttp.prototype.put = function ( url, body, callback ) {
    this.send( 'PUT', url, body, callback );
};
//test hàm put 
// let http = new FastHttp();
// cập nhật tên thằng có id là 2
// http.put( `${baseURL}/2`, { name: 'Ahihi' }, ( error, value ) => {
//     if ( error ) {
//         console.log( 'lỗi vì: ', error );
//     } else {
//         console.log( 'đối tượng đã update là: ', value
//         );
//     }
// } );


// xây dựng hàm delete dựa trên hàm send 
FastHttp.prototype.delete = function ( url, callback ) {
    this.send( 'DELETE', url, null, callback );
};
//test hàm delete
// let http = new FastHttp();
// http.delete( `${baseURL}/1`, ( error, value ) => {
//     if ( error ) {
//         console.log( 'lỗi vì: ', error );
//     } else {
//         console.log( 'đối tượng đã delete là: ', value
//         );
//     }
// } );



















