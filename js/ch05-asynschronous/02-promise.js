// // 02-promise

// // // ĐỐ
// // for ( var i = 0; i <= 3; i++ ) {
// //     setTimeout( () => {
// //         console.log( i );
// //     }, 1 );
// // }
// // // ra gì ?
// // // nếu let i => 0 1 2 3
// // // nếu var i => 4  (vì var global nên xài chung)

// // //-----------------------------------------------------

// // // Promise: lời hứa rằng trong tương lại anh sẽ làm gì đó hoặc ko làm
// // // ES6
// // // một promise sẽ có 3 trạng thái
// // //      Pending: đang chờ kết quả
// // //      Fulfilled: đã có kết quả tốt (giữ lời hứa)
// // //      Reject: lỗi trong pending (thất hứa)
// // //
// // // Cú pháp tạo promise
// // new Promise( function ( resolve, reject ) {

// // } );

// // // code tắt
// // new Promise( ( resolve, reject ) => {

// // } );

// // // 1 promise sẽ nhận vào 1 function có param là 1 resolve và 1 reject
// // const p1 = new Promise( ( resolve, reject ) => {
// //     resolve( 1 );
// //     reject( new Error( 'xin lỗi' ) );
// // } );

// // //VD: anh  ny hứa rằng cuối tuần mang tiền về 5000(5tr)
// // let wallet = prompt( 'Nhập giá trị trong ví đi' );
// // const p2 = new Promise( ( resolve, reject ) => {
// //     if ( wallet >= 5000 ) {
// //         resolve( 'Anh không phải Jack' );
// //     }
// //     reject( 'Anh là Jack thật sự' );
// // } );
// // //Kiểm tra lời hứa
// // p2.then( value => {
// //     console.log( value );
// // } ).catch( error => {
// //     console.log( error );
// // } );
// // //suy sét theo lời hứa


// // // cách này cũn đc (nhận vào 2 giá trị value & error [ghi tắt])
// // // p2.then( value => {
// // //     console.log( value );
// // // }, error => {
// // //     console.log( error );
// // // }


// // Ta sẽ thử chuyển 1 async callback thành promise
// // setTimeout( () => {
// //     console.log( 'Hello' );
// // }, 1000 );

// //chuyển cái ở trên thành promise
// let p2 = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
//         console.log( 'Hello' );
//     }, 1000 );
// } );
// p2.then( value => {
//     console.log( value );
// } );
// // giai đoạn từ 0 tới 1 giây ngta gọi là pending
// // giai đoạn mà resolve chạy ngta gọi là fulfilled


// // LƯU Ý: Promise are eager not lazy: Promise sẽ chạy code bên trong ngay khi khai báo
// // ko cần đến lúc then catch
// let a = 1;
// //cách cùi
// // let p3 = new Promise( ( resolve, reject ) => {
// //     a++;
// // } );
// // console.log( a ); //2

// //khắc phục bằng cách bỏ vào hàm cách 1
// // function handle1 () {
// //     p3 = new Promise( ( resolve, reject ) => {
// //         a++;
// //     } );
// //     return p3;
// // }
// // handle1();
// // console.log( a );

// //khắc phục bằng cách bỏ vào hàm cách 2
// p3 = () => {
//     new Promise( ( resolve, reject ) => {
//         a++;
//     } );
// };
// p3();
// console.log( a );
// //

// //1 promise chỉ có thể rơi vào 1 trong 2 trạng thái (pending | fulfilled(resolve) | reject(reject))
// //không thể đã fulfilled xong rồi reject
// //resolve hay reject giống như return (ném giá trị ra bên ngoài) => khác: code vẫn chạy mà ko dừng
// //vd:

// p4 = new Promise( ( resolve, reject ) => {
//     resolve( "hello" );
//     reject( new Error( "Lỗi rồi" ) );
//     console.log( "ahihi" );
// } );

// p4.then( value => {
//     console.log( "value nhận đc là " + value );
// } ).catch( error => {
//     console.log( "error là: " + error );
// } );

// //1*.then/ .catch ma2 return thì nó sẽ trà về 1 Promise(onFulfilled)

// p5 = new Promise( ( resolve, reject ) => {
//     reject( "lỗi rồi đó" );
// } );
// //onReject => đc catch xử lý
// p5.then( value => { } )
//     .catch( error => {
//         console.log( "ahihi lỗi là: " + error );
//         return "ahihi";
//     } )
//     .then( value => {
//         console.log( "value là: " + value );
//     } );
// //return trong then và catch là 1 cái promise fulfilled
// //sẵn sàng then tiếp

// //1*.then/ .catch ma2 return thì nó sẽ trà về 1 Promise(onFulfilled)

// p5 = new Promise( ( resolve, reject ) => {
//     reject( "lỗi rồi đó" );
// } );
// //onReject => đc catch xử lý
// p5.then( value => { } )
//     .catch( error => {
//         console.log( "ahihi lỗi là: " + error );
//         throw "ahihi";
//     } )
//     // .then( value => {
//     //     console.log( "không chụp đc" );
//     // } )
//     .catch( error => {
//         console.log( "lỗi vì dùng throw là: " + error );
//     } );






//dùng Promise để xử lý bất đồng bộ
// 2 việc cần làm


// lấy data Profile từ  (2s)

// lấy data Article từ server (2s)
let data;
// cách kko dùng promise => ko lấy đc data
// const getProfile = () => {
//     setTimeout( () => {
//         return { name: 'Điệp đẹp trai', age: 22 };
//     }, 3000 );
// };

// data = getProfile();
// console.log( data );


// dùng promise cách 1:
// let getProfile = () => new Promise( ( resolve, rejec ) => {
//     setTimeout( () => {
//         resolve( { name: 'Điệp đẹp trai', age: 22 } );
//     }, 3000 );
// } );

// getProfile().then( value => {
//     data = value;
//     console.log( data );
// } );


// dùng promise cách 2:
getProfile = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( { name: 'Điệp đẹp trai', age: 22 } );
    }, 3000 );
} );

getArticle = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( ['sách văn học', 'tiểu thuyết'] );
    }, 2000 );
} );


// nếu code như này mất 3s vì bất đồng bộ 
// getProfile().then( value => {
//     console.log( value );
// } );

// getArticle().then( value => {
//     console.log( value );
// } )


// nếu code chạy tuần tự xong getProfile thì mới getArticle: 5s
// getProfile().then( value => {
//     console.log( value );
//      getArticle().then( value => {
//     console.log( value );
// } )
// ko viết cách này vì nó tạo ra promise hell

getProfile().then( value => {
    console.log( value );
    return getArticle();
} ).then( value => {
    console.log( value );
} )


































































































































































































































































































































































































































































































































































































































































































































































































































































