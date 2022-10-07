// "use strict";
console.log("BÀI 1: KHAI BÁO BIẾN, SCOPE, HOISTING");

// var | let | const 
//VAR: NGÀY XƯA ES CHỈ CÓ VAR MÀ THÔI, KHÔNG CÓ LET NHƯ BÂY GIỜ

//re-assigning: khai báo và gán biến 
var name1 = "Hoàng";
console.log(name1); 
name1 = "Điệp đẹp trai"; //--> re-assigning
console.log(name1);

//khai báo vào không gán biến
var age; // ko đổ giá trị --> undefined 
console.log(age);
age = 10;
console.log(age); //--> 10

//QUY TẮC ĐẶT TÊN BIẾN 
//      KHÔNG BẮT ĐẦU BẰNG SỐ --> BẮT ĐẦU BẰNG CHỮ CÁI
//      NGUYÊN TẮC cammelCase, Underscore, Pascal case (UpperCammel )
//      ĐƯỢC PHÉP DÙNG _ (PRIVATE) VÀ $ (PROTECTED) Ở ĐẦU 


//HOISTING VỚI VAR (HOISTING: MÓC NGƯỢC LÊN) | KO PHẢI BUG MÀ LÀ TÍNH NĂNG
//CHỈ XẢI RA KHI DÙNG VAR
console.log(msg); //undefined
var msg = "hello";

//2 DÒNG TRÊN BỊ HIỂU NHƯ SAU
// ==>  var msg
//      console.log(msg);
//      msg = "hello";


//NormalMode/UseStrictMode
message = "thông báo"; // máy tự hiểu tạo biến message bằng var
console.log(message); //nếu bật use strict thì lỗi liền 


// let: (ES6 trở lên), const(hằng số)
//GIỐNG Y CHANG VAR | KHÔNG BỊ HOISTING
//const: HẰNG SỐ, TẠO BIẾN THÌ PHẢI GIÁ TRỊ LIỀN, VÀ KO THAY ĐỔI ĐC, CHUNG THỦY

const profile = {name: "Hoàng", age: 20}
profile.name = "Điệp đẹp trai"
// profile = {name: "Điệp đẹp trai"} //DÒNG NÀY LÀ NÓI PROFILE TRỎ ĐỐI TƯỢNG KHÁC ĐI (SAI)
//CONST LÀ HẰNG SỐ NHƯNG VỚI OBJECT THÌ LƯU Ý ĐIỀU NÀY
//HẰNG SỐ VỚI ĐỊA CHỈ CỦA OBJECT
//NÊN VẪN THAY ĐỔI THUỘC TÍNH CỦA OBJECT BÌNH THƯỜNG
console.log(profile);

//TƯƠNG TỰ VỚI ARRAY
const array1 = [1, 2, 3, 4, 5];
//muốn nhét thêm số 6 vào array1 này 
array1.push(6); // OKK
// array1 = [1,2,3,4,5,6]; // --> HẾT CHUNG THỦY 
console.log(array1);

//SCOPE: TRONG JS CÓ 3 LOẠI SCOPE 
//          GLOBAL SCOPE: TOÀN CỤC 
//          FUNCTION SCOPE: TRONG HÀM
//          BLOCK SCOPE: CỤC BỘ

// let|const ĐỀU CHỊU ẢNH HƯỞNG CỦA SCOPE 
// VAR SẼ KHÔNG BỊ CAN THIỆP VỚI BLOCK SCOPE --> xài thoải mái
if(true){
    var son = "Điệp đẹp trai";
}
console.log(son);

// LET/CONST : KO BỊ HOISTING / VAR: BỊ HOISTING(USE STRICT)
//      CÓ blockScope         /           ko có blockScope

