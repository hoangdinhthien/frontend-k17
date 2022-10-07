console.log("07-objectMethod-this-function");
// object, method, this và function nâng cao 


//OBJECT: ĐỐI TƯỢNG
//TẤT CẢ NHỮNG GÌ CÓ THỂ SỜ ĐC, ĐẾM ĐC ĐỀU LÀ ĐỐI TƯỢNG
//TRONG OBJECT SẼ CÓ PROPERTIES DÙNG ĐỂ MÔ TẢ ĐỐT TƯỢNG
// THƯỜNG CÓ HÀNG ĐỘNG FUNCTION (NẾU FUNCTION MÀ NẰM TRONG OBJECT THÌ GỌI METHOD - PHƯƠNG THỨC)



let promotionBoy1 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    sayHi() {
        console.log("quẹo lựa quẹo lứa");
    },
    //function expression
    sayHi1: function () {
        console.log("quẹo lựa quẹo lứa");
    },
    //function arrow --> ko ai tạo method bằng function arrow đâu
    sayHi2: () => {
        console.log("quẹo lựa quẹo lứa");
    },
};

//cách tạo method bằng fd và fe về mặt lý thuyết là có khác nhau trên cơ sở kế thừa(OOP)
//  NHƯNG MÀ KO ĐÁNG KỂ, NÊN NGƯỜI TA THƯỜNG VẪN DÙNG FD
// FD RÚT NGẮN CODE
// DÂN CHƠI OJECT RẤT CHUỘNG DÙNG FD


// VIẾT FUNCTION: NGTA DÙNG FE | FA
// VIẾT METHOD:   NGTA DÙNG FD


//TA CÓ THỂ TẠO THÊM PROP HAY METHOD SAY KHI ĐÃ TẠO OBJECT
console.log(promotionBoy1.money); //--> undefined 
//KHI MÀ EM ĐC TẠO RA EM KHÔNG HỀ BIẾT TIỀN LÀ GÌ 
// AI ĐÓ ĐỀ CẬP ĐẾN TIỀN VỚI EM | EM NHẬN RA CÓ PROP LÀ TIỀN NHƯNG KO BIẾT LÀ GÌ (UNDEFINED)


promotionBoy1.money = 10000;
//TẠO METHOD NÈ
promotionBoy1.chuiKhach = function () {
    console.log("Hỏi giá mà ko mua hả mài");
}

//THIS TRONG METHOD
let promotionBoy2 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
    },
    //function expression
    showName1: function () {
        console.log("nick name là: " + this.nickName);//THIS : UNDEFINED
    },
    //function arrow --> ko ai tạo method bằng function arrow đâu
    showName2: () => {
        console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
    },
};
// THIS CHỈ ĐC CÓ GIÁ TRỊ KHI RUNTIME | THIS ĐẠI DIỆN CHO OBJECT GỌI NÓ 
promotionBoy2.showName(); //==> "Lê Mười Điệp"
//NGƯỜI GỌI LÀ PROMOTIONBOY2
//showName: fd ==> giam this ==> ÉP THIS PHẢI LÀ NGƯỜI GỌI
//THIS --> promotionBoy2


promotionBoy2.showName2();
//NGƯỜI GỌI LÀ promotionBoy2
//showName2 LÀ FA ==> THẢ THIS ==> GLOBAL(WINDOW)
//THIS LÚC NÀY LÀ WINDOW



//NẶNG THÊM 1 TÝ
let promotionBoy4 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        console.log("nick name là: " + promotionBoy4.nickName); //THIS : UNDEFINED
    },
};

let promotionBoy5 = promotionBoy4; //promotionBoy5 xài chung đối tượng vs promotionBoy4 (2 chàng chỏ 1 nàng)
promotionBoy4 = null; //promotionboy4 cắt liên kết với đối tượng nhưng 5 vẫn liên kiết

// promotionBoy5.showName(); // -->lỗi, vì lúc này promotionBoy4 là null rồi 
//sao mà .nickName đc nữa



//THIS KO BỊ RÀNG BUỘC GIÁ TRỊ 

//NÂNG LÊN THÊM 1 TÝ 
//THIS TRONG FUNCTION TRONG METHOD (OBJECT > METHOD > FUNTION > THIS)

let promotionBoy6 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        // console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
        let arrow = () => {
            console.log("nick name là: " + this.nickName);
        };

        arrow();

    },
    showName2() {
        // console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
        let expression = function () {
            console.log("nick name là: " + this.nickName);
        };

        expression();

    },
};

promotionBoy6.showName();
//AI GỌI SHOWNAME(): promotionBoy6
//showName(): fd 
//      arrow : fa ==> KO GIAM THIS, THIS ĐI RA NGOÀI
// SHOWNAME CHẶN ==> ÉP THIS PHẢI LÀ NGƯỜI GỌI SHOWNAME
//   SHOWNAME CÓ CÒN AI GỌI KO ? --> PROMOTIONBOY6
//==> THIS LÀ PROMOTIONBOY6

promotionBoy6.showName2(); //this
//SHOWNAME2 AI GỌI? --> PROMOTIONBOY6
//      EXPRESSION: FE|FD : KO AI GỌI
//                  VÌ LÀ FE NÊN GIAM THIS ==> UNDEFINED | NHƯNG MÀ ĐANG NORMAL MODE NÊN NÓ SẼ QUY TẤT CẢ VỀ GLOBLAL(WINDOW)
//                                   USE STRICT:UNDEFINED| NORMAL: WINDOW
//                            undefined.nickname --> lỗi | window.nickname ==> undefined

//NÂNG LÊN 1 TÝ
//THIS TRONG CALLBACK
let promotionBoy7 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        // console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
        setTimeout(function () {
            console.log("nick name là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy7.showName();
//nickname là: undefined
//      SHOWNAME AI GỌI ==> PROMOTIONBOY7 : FD
//          FUNCTION TRONG SETTIMEOUT LÀ FE: KO AI GỌI
//              FUNCTION TRONG SETTIMEOUT ==> GIAM THIS : KO AI GỌI
//                  ==> THIS LÀ UNDEFINED (KHI USE STRICT) | WINDOW(NORNAL)
//                              UNDEFINED.NICKNAME ==> LỖI | WINDOW.NICKNAME ==> UNDEFINED

//


let promotionBoy8 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,                    //properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        // console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
        setTimeout(() => {
            console.log("nick name là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy8.showName();
//SHOWNAME AI GỌI ==> PROMOTIONBOY8 : FA
//  LÀM VÔ DANH: FA  ==> THẢ THIS
//      SHOWNAME CHẶN: THIS PHẢI LÀ NGƯỜI GỌI SHOWNAME
//          ==> THIS = UNDEFINED
//              PROMOTIONBOY8.NICKNAME: "LÊ MƯỜI ĐIỆP"




//NÂNG CAO: HOF
//HIGHER ORDER FUNCTION:
//  1.CALLBACK : HÀM NHẬN 1 HÀM LÀM PARAMETER
//  2.CLOSURE :
//  3.CURRYING :



//VIẾT HÀM NHẬN VÀO 2 SỐ, TRẢ RA TỔNG CỦA 2 SỐ ĐÓ
let sumDemo = (a, b) => {
    return a + b;
};

//HOF
sumDemo = (a) => {
    return (b) => {
        return a + b;
    };
};

sumDemo = (a) => (b) => a + b;
// console.log(sumDemo(2, 5)); //-->7
//nếu gọi thằng này sumDemo(2)
//(b) => {
//  return a + b;
//};
//phải thêm ()
console.log(sumDemo(2)(5));

//HOF: CÓ 3 KHÁI NIỆM
// 1. CALLBACK: HÀM NHẬN VÀO 1 HÀM LÀM PARAMETER

const array1 = [1, 2, 3, 4, 5];
array1.forEach((val, key) => {
    console.log(val + " " + key);
});

//2.CLOSURE:
//      2.1 LEXICAL SCOPING: HÀM CON DÙNG BIẾN CỦA HÀM CHA
//      2.2 CLOSURE: 1 FUNCTION RETURN 1 FUNTION 

//ỨNG DỤNG: TẠO RA 1 HÀM CHUYÊN RENDER ID (MÁY TẠO KEY TỰ TĂNG)
const initIdentity = () => {
    let newId = 0;
    return () => ++newId;
};

console.log(initIdentity()); //==> ++newId; | KÈM THEO NEWID = 0
console.log(initIdentity()()); //==> 1; | KÈM THEO NEWID = 1
console.log(initIdentity()()); //==> 1; | KÈM THEO NEWID = 1
//NẾU GỌI initeIdentity() THÌ NÓ RESET NEWID TRẢ RA HÀM CON () ==> ++NEWID
//NẾU GỌI initeIdentity() THÌ NÓ LẠI initeIdentity() | NEWID ==> CHẠY RA HÀM CON () | TRẢ RA KẾT QUẢ


let closureDemo = initIdentity(); //()==> ++newID;
console.log(closureDemo());   //1
console.log(closureDemo()); //2
console.log(closureDemo()); //3
console.log(closureDemo()); //4

//3.CURRYING: KỸ THUẬT CHUYỂN ĐỔI TỬ 1 FUNCTION NHẬN VÀO NHIỀU PARAMETER THÀNH NHỮNG FUNCTION LIÊN TIẾP CÓ THAM SỐ


//VIẾT 1 HÀM XỬ LÝ 3 BÀI TOÁN SAU 
//1 HÀM SỬ DỤNG ĐC CHO 3 BÀI TOÁN
//  TÌM CÁC SỐ TỪ 0 ĐẾN 10 LÀ SỐ LẼ
//  TÌM CÁC SỐ TỪ 0 ĐẾN 20 LÀ SỐ CHẴN
//  TÌM CÁC SỐ TỪ 0 ĐẾN 30 CHIA CHO 3 DƯ 2
//==>CALLBACK | CALLBACK + CURRYYING 


//LÀM 1 CÁI HÀM NHẬN VÀO 1 SỐ NUMBER VÀ NHẬN VÀO 1 CÁI HÀM KIỂM TRA
function handle3(number, funct) {
    let result = [];
    for (let i = 0; i <= number; i++) {
        if (funct(i)) result.push(i);
    }
    return result;
};

console.log(handle3(10, (number) => number % 2 == 1));
console.log(handle3(20, (number) => number % 2 == 0));
console.log(handle3(30, (number) => number % 3 == 2));

//CURRYING
const handle4 = (number) => (funct) => {
    let result = [];
    for (let i = 0; i <= number; i++) {
        if (funct(i)) result.push(i);
    }
    return result;
};
console.log(handle3(10, (number) => number % 2 == 1));

//XÉT CHO CÙNG TRƯỜNG HỢP NÀY DÙNG CURRYING THÌ KHÁC GÌ MÀ CÒN KHÓ ĐỌC HƠN
//NHƯNG TRONG REACT VÀ ANGULAR THÌ CURRYING RẤT CÓ TÁC DỤNG




//CALL APPLY BIND
const people = {
    print(age, location) {
        console.log(this.fullname + " " + age + " " + location);
    }
}
people.print(10, "TP.HCM"); //UNDEFINED 10 TPHCM 
//THIS LÀ GÌ ? PEOPLE
//  PEOPLE.FULLNAME ==> UNDEFINED 
// MÌNH CÓ THỂ BẺ CONG ĐƯỜNG NỐI CỦA THIS BẰNG CALL | BIND | APPLY

var diep = { fullname: "Lê Mười Điệp" };
//1.CALL(object,...parameter cũ)
people.print.call(diep, 10, "TP.HCM");//LE MUOI DIEP 10 TPHCM 

//2.APPLY(OBJECT,...[PARAMETER CŨ])
people.print.apply(diep, [10, "TP.HCM"]);//LE MUOI DIEP 10 TPHCM 

//3.BIND (OBJECT, ....PARAMETER)()  ==> DÙNG CLOSURE
//3.BIND (OBJECT, ....PARAMETER) ==> DÙNG CURRYING
let handle1 = people.print.bind(diep, 10, "TP.HCM");
handle1();


//cách 2
handle1 = people.print.bind(diep);
handle1(10, "TP.HCM"); //LE MUOI DIEP 10 TPHCM 


//viết tắt
people.print.bind(diep)(10, "TP.HCM"); //LE MUOI DIEP 10 TPHCM 


//ỨNG DỤNG 
let promotionBoy10 = { //object phẳng (plain object)
    nickName: "Lê Mười Điệp", // properties 
    age: 24,//...................properties
    //hành động: method (function)
    //functional declaration | literal shortHand
    showName() {
        // console.log("nick name là: " + this.nickName); //THIS : UNDEFINED
        setTimeout(function () {
            console.log("nick name là: " + this.nickName);
        }.bind(this), 1000);
    },
};


promotionBoy10.showName();


//dateTime
//KIỂU THỜI GIAN TRONG JS LÀ OBJECT | DỰA VÀO MILISECOND
//ĐƯỢC TÍNH TỪ 1/1/1970 THEO UTC
//CÓ 4 CÁCH KHỞI TẠO
let a = new Date(); //Tue Aug 16 2022 21:01:05 GMT+0700 (Indochina Time)
a = new Date(1660658475730);// Tue Aug 16 2022 21:03:22 GMT+0700 (Indochina Time)
a = new Date(2022 - 8 - 16); // Tue Aug 16 2022 21:03:22 GMT+0700 
//VÌ KHÔNG PHẢI CÁI TRÌNH DUYỆT NÀO CŨNG dateString
a = new Date(2022, 7, 16, 21, 3, 22, 32);
//y/m - 1/d/h/m/s/ms
console.log(a);


// getdate()        : lấy ngày trong tháng //16
// getday()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 - 11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được

console.log(a.toISOString()); //2022-08-16T14:03:22.032Z









