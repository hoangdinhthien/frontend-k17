console.log("02-dataType-passByValue-passByReferences.js");
// I-datatype: KIỂU DỮ LIỆU
//CÓ 2 DẠNG DATA TYPE 
// I.1 PRIMITIVE DATATYPE: KIỂU DỮ LIỆU NGUYÊN THỦY 
//      number: 1, 2, 3, 10.33 (miễn là số)
//      String: "Điệp đẹp trai" (chuỗi)
//      Boolean: true(1) / false(0)
//      Null: (RỖNG // BIẾT KIỂU DỮ LIỆU NHƯNG KO BIẾT GIÁ TRỊ)
//      Undefined (KHÔNG TỒN TẠI GIÁ TRỊ ĐỂ ĐỊNH DẠNG)
//      Symbol (ES6) (BÀI SAU)

//SỰ KHÁC NHAU GIỮA NULL VÀ UNDEFINED 
//  GIỐNG NHAU VỀ MẶT GIÁ TRỊ (KO CÓ GÌ HẾT)
//  == : SO SÁNH GIÁ TRỊ, KO QUAN TÂM KIỂU
console.log(1 == "1"); // --> true
//  === : SO SÁNH GIÁ TRỊ VÀ KIỂU
console.log(1 === "1"); // --> false

console.log(null == undefined); // --> true
console.log(null === undefined); // --> false

console.log(typeof undefined); // --> undefined
console.log(typeof null); // --> object, DÙ LÀ OBJECT (NHƯNG NULL ĐƯỢC XẾP VÀO KIỂU DỮ LIỆU NGUYÊN THỦY)


//UNDEFINED : KO CÓ GIÁ TRỊ VÀ CŨNG CHƯA BIẾT KIỂU
//  BIẾN CHƯA KHỞI TẠO GIÁ TRỊ
let numb;
console.log(numb); //==> undefined

//  THUỘC TÍNH CHƯA KHỞI TẠO TRONG OBJECT
let obj1 = { name: "Tân" };
console.log(obj1.money); //undefined 

//  THIẾU PARAMETER KHI DÙNG FUNCTION
function handle1(a, b) {
    return a + b;
}
let c = handle1(1, 2);
console.log(c); //--> 3

// *NULL: KO BIẾT GIÁ TRỊ NHƯNG BIẾT KIỂU
let str1 = ""; //chuỗi rỗng
str1 = null; //gọi là rỗng(Object) NHƯNG LÀ PRIMITIVE 

// NULL VÀ UNDEFINED THÌ SẼ KO CÓ THUỘC TÍNH NÊN KO THỂ TRUY CẬP 
let banGaiTan = null; // NẾU LÀ UDEFINED THÌ CŨNG LỖI NHƯ VẬY
// console.log(banGaiTan.name); //--> LỖI


// I.2 OBJECT DATATYPE
// LÀ NHỮNG THẰNG KHÁC PRIMITIVE 
// Plain Object (DỮ LIỆU PHẲNG)
var student = { name: "Điệp", point: 10 };
//              properties: THUỘC TÍNH
//              key (name)   :  value (Điệp)
//              entry

//ARRAY(MẢNG: MẢNG LÀ CÁCH KHAI BÁO NHIỀU BIẾN CÙNG LÚC, LIỀN KỀ, SAN SÁT NHAU)
var hoa = ["Cúc", "Lan", "Huệ", "Hồng"];

//REGULAR EXPRESSION : REGEX (ĐC TÍNH LÀ 1 OBJECT)
var regex = /ad+c/;
console.log(typeof regex); //--> object

//***FUNCTION CŨNG LÀ OBJECT DÙ TYPEOF LÀ FUNCTION
console.log(typeof handle1); // -->function



//***Null typeof ra Object NHƯNG LẠI KO PHẢI OBJECT DATATYPE MÀ LÀ PRIMITIVE 
//***NaN typeof ra Object NHƯNG NẾU NaN == number --> FALSE VÌ NÓ KO BÍT NÓ LÀ GÌ ĐỂ SO SÁNH

//=========================================================================================================================================

//TẤT CẢ CÁC CÁCH KHAI BÁO Ở TRÊN ĐỀU ĐC KHAI BÁO DƯỚI DẠNG CONTRUCTOR
//WRAPPER CLASS: CLASS TRAI BAO
//var str = "Điệp đẹp trai";
var str = new String("Điệp đẹp trai"); //typeof Object
//NEW STRING OBJECT DẠNG CHUỖI CÓ NHIỀU METHOD(HÀM XỬ LÝ)
console.log(str);
//str  ĐC COI LÀ OBJECT | CON TRỎ | 1 CÁI ĐỊA CHỈ 
console.log(str === "Điệp đẹp trai"); //--> false
console.log(str.valueOf() === "Điệp đẹp trai"); //--> true
console.log(str == "Điệp đẹp trai");//-->true (AUTO-UNBOXING)
//objectWrapperClass.valueOf() LẤY CÁI CORE RA
//== : SO SÁNH CHÂM TRƯỚC
//=== : SO SÁNH NGHIÊM KHẮC

//DÙNG WRAPPER CONTRUCTOR ĐỂ ÉP KIỂU
var year = String(2002);
console.log(typeof year); // string
year = Number("2002");
console.log(typeof year); //number


//BÀN RIÊNG VỀ BOOLEAN
var isFind = Boolean(1999); //số
console.log(isFind); // true

isFind = Boolean(1);//số
console.log(isFind);//true

isFind = Boolean(0);//số 0
console.log(isFind);//false

isFind = Boolean("0");// chuỗi CÓ GIÁ TRỊ THÌ SẼ TRUE
console.log(isFind);//TRUE

isFind = Boolean({});//object rỗng
console.log(isFind);//true

isFind = Boolean([]);// array/object rỗng
console.log(isFind);//true

isFind = Boolean(null);// null là rỗng (ascii 0)
console.log(isFind);//false

isFind = Boolean(10 / "d");//NaN
console.log(isFind);//false

isFind = Boolean(false);// false
console.log(isFind);//false

isFind = Boolean(true);//true
console.log(isFind);//false

isFind = Boolean(false == false);//false
console.log(isFind);//true

//FALSY: NHỮNG GÌ KHÔNG CHỨA GIÁ TRỊ ĐỀU LÀ FALSY
//          NULL, UNDEFINED, 0, -0, "", FALSE, NaN

//TRUTHY: NHỮNG GÌ KHÔNG PHẢI FALSY
//        CHUỖI KHÁC RỖNG, SỐ KHÁC 0, CÁC OBJECT ĐỀU LÀ TRUE 



//PASS BY VALUE / PASS BY REFERENCES 
// THAM TRỊ    /    THAM CHIẾU

//VD1:
let a = 1;
let b = a; //1
b = 2;
console.log(a);//1
console.log(b);//2

//VD2:
let point = 4;
function updatePoint(pointCurrent){
    pointCurrent = 10;
}
updatePoint(point);
//pointCurrent = point;
//pointCurrent = 10
//==>PASS BY VALUE: TRUYỀN THAM TRỊ / THAM KHẢO GIÁ TRỊ
console.log(point);//4




// 2.PASS BY REFERENCES VỚI OBJECT 
//GÁN HOẶC SAO CHÉP 2 OBJECT THÌ NGHĨA LÀ LƯU ĐỊA CHỈ CỦA GIÁ TRỊ BÊN VÙNG NHỚ
//KO LƯU GIÁ TRỊ ĐC GÁN
//      ===>
var array1 = ["Điệp", "đẹp trai"];
var array2 = array1; //2 chàng trỏ 1 nàng
array2[0] = "Hoa";
console.log(array1);
console.log(array2);
//cứ là object thì sẽ có cơ chế này


// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán
2  Comparison            so sánh
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | **(mũ) | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)


console.log(2 == "2"); //true
console.log(2 === "2"); //false


console.log(2 === "2"); //false
console.log(2 !== "2"); //true (2 và "2" có khác nếu so về value và kiểu không?)

console.log(2 != "2"); //false ( 2 và "2" có khác về value ko ?)

//TOÁN TỬ 3 NGÔI
var diep = "đẹp trai";
var diepIsDepTrai; //boolean
diepIsDepTrai = diep == "đẹp trai" ? true : false;
console.log(diepIsDepTrai);

console.log("b" + "a" + + "a" + "a");
//baNaNa


//LOGIC
//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false --> false
//  true && true   --> true
//  false&& false  --> false
//  true || false  --> true
//  true || true   --> true
//  false|| false -->  false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1

console.log(0 && 1);// --> 0 not false
console.log(0 || 0 || 4); // --> 1 
console.log(0); // -->0
console.log(!0); // true
console.log(""); //""
console.log(!""); // false
console.log(!"" && 0 && 1); //0

























































































