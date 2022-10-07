console.log( 'Bài 1: Try Catch' );
// ứng dụng rất trong sử lý bất đồng bộ
// MỤC ĐÍCH DÙNG TRY CATCH: XỬ LÝ LỖI CỦA NGƯỜI DÙNG TRONG QUÁ TRÌNH SỬ DỤNG
// ĐỂ NGĂN CHƯƠNG TRỊNH BỊ CRASH TRONG QUÁ TRÌNH RUNTIME

// NHỚ RẰNG TRY CATCH CHỈ HOẠT ĐỘNG VỚI RUNTIME ERROR THOI, SẼ KHÔNG VỚI LẠI SYNTAX ERROR


// TRY CATCH CHỈ HOẠT ĐỘNG TRONG MÔI TRƯỜNG ĐỒNG BỘ

// setTimeout( () => {
//     diepPiedTeam; //lỗi chưa khai báo mà sử dụng
// }, 1000 );

// try {
//     setTimeout( () => {
//         diepPiedTeam; //lỗi chưa khai báo mà sử dụng
//     }, 1000 );
//     //ko đồng bộ, tại setTimeout chạy sau try catch 1 giây
// } catch ( error ) {
//     alert( 'lỗi gòi nè' );
// }

//FIX BẤT ĐỒNG BỘ NHƯ NÀY MỚI CHUYÊN NÈ: ĐỔI LẠI TRY CATCH VÀO TRONG, SETTIMEOUT RA NGOÀI
// setTimeout( () => {
//     try {
//         diepPiedTeam;
//     } catch ( error ) {
//         alert( 'lỗi gòi nè' );
//     }
// }, 1000 );

// LỖI TRONG JS ĐC XEM LÀ 1 OBJECT
// OBJECT ERROR NÀY CÓ 3 PROP
//  name: tên
//  messge: thông báo lỗi
//  stack: thông tin chi tiết của lỗi

try {
    diepPiedTeam;
} catch ( error ) {
    console.log( error );
    console.log( error.name ); //REFERENCE ERROR
    console.log( error.message ); // diepPiedTeam is not defined
    console.log( error.stack ); // ReferenceError: diepPiedTeam is not defined
    // at 01 - tryCatch.js: 40: 5;
}

// MÌNH CÓ THỂ CHỦ ĐỘNG NÉM LỖI TỪ TRY VỀ CATCH VỚI THROW
// THROW 'LỖI'
// THROW NEW ERROR('LỖI')
// THROW NEW SYNTAXERROR('LỖI')
// THROW NEW REFERENCEERROR('LỖI')


// FINALLY

// loading = false;
// try {
//     loading = true;
//     get(); //Lỗi: vì get() chưa tạo
//     loading = false;
// } catch ( error ) {
//     loading = false;
// }


loading = false;
try {
    loading = true;
    get(); //Lỗi: vì get() chưa tạo
} catch ( error ) {
} finally {
    loading = false;
}

// FINALLY ĐỌC CHO SANG MỒM THOI



// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

// TA CÓ THỂ TRUYỀN NHIỀU HƠN 1 MESSAGE VÀO ERROR CONSTRUCTOR FUNCTION BẰNG CÁCH TẠO CLASS KẾ THỪA
//  ERROR VÀ ĐỘ LẠI CONSTRUCTOR

class CustomError1 extends Error {
    constructor( message, student ) {
        super( message );
        this.student = student;
        this.name = "CustomerError";
    }
}

try {
    // nothing
    throw new CustomError1( 'lỗi nè mày, chụp lấy', { name: 'Điệp đẹp trai' } );
} catch ( error ) {
    console.log( error );
    console.log( error.name ); // CustomerError
    console.log( error.student ); //đối tượng student có name là 'điệp đẹp trai'
}











