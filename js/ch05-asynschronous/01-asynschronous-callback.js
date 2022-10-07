// ch05-asynschronous
// 01-asynschronous-callback.js
// bản thân js luôn là đơn luồng
// PHP  hay Java là ngôn ngữ đa luồng

// vd: có 2 dòng code L1(3p) L2(1p)
// theo như  mình nghĩ L1 chạy xong thìu L2 sẽ chạy - đồng bộ - 4p
//
// nếu như anh bất đồng bộ thì sao?  L1 chạy, không đợi xong thì L2 cũng  chạy (3p)

// CALL STACK (XẾP CHỒNG): là 1 cấu trúc dữ liệu dạng ngăn xếp (stack) dùng để lưu trữ
// trong quá trình code thự thi
// Call Stack này là LIFO (last in first out) : vào sau ra trước

// VD:
function a ( x ) {
    console.log( x );
}
function b ( y ) {
    a( y + 2 );
}
function c ( z ) {
    b( z + 1 );
}
c( 5 ); // => 8


// Event Loop và CallBack Queue (kiu)
// trong môi trường chạy js (js runtime) còn 1 thứ quan trọng khác không kém callstack

// Tổng thể Js có gì?
// về vùng nhớ : memory             callstack

// Event Loop: liên tục lập đi lập lại chờ 1 sự kiện "click, load, submit"
//              Even Loop                       sự kiện này là CallBack Queue

// WebApis: DOM | AJAX(XMLhttpRequest) | timeOut(setTimeout)



function handle () {
    console.log( 'command1' );

    setTimeout( () => {
        console.log( 'command2' );
    }, 3000 );

    console.log( 'command3' );
}
handle();

// ==>command 1, trong khi đợi 3s thì chạy luôn command 3, sau đó hết 3s ra command 2

// ASYSNC CALLBACK: bất đồng bộ callback:
// callback là hàm có parameter là 1 function
// xử lý bất đồng bộ bằng callback

// pros: dễ hiểu
// cons: rất khó xử lý rồi, code bị lồng vào nhau (=> )

// lắng nghe sự kiện click. click thí mới chạy callback function
//VD: giả sử ta có 2 sự kiện click L1 và L2

// BẤT ĐỒNG BỘ CÓ QUAN TRỌNG KO? ==> CÓ


// VD2: đọc file
//      dòng code 1: đọc file, biến file thành mảng student (5minutes)
//      dòng code 2: in ra danh sách các student trong mảng student
// =>  VD NÀY CẦN ĐỒNG BỘ 

// CALLBACK gây khó khăn trong việc sử lý lỗi
try {
    setTimeout( function ahihi () {
        throw new Error( 'Lỗi nè' );
    }, 3000 );
} catch ( error ) {
    console.log( error );
}

// thế là ngta ko thích dùng callback mà ngta dùng promise trong ES6 để thay thế cho cách viết của callback
//
// callback không giúp xử lý  bất đồng bộ
// promise dùng để thay thế callback =>
// thắng promise này nè có 1 thằng anh tên asyns await sẽ xử lý bất đồng bộ đc















































