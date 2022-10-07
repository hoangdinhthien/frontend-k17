console.log("BÀI 6: HÀM - FUNCTION");

//FUNTION: FUNCTION DECLARATION | FUNCTION EXPRESSION


// 1. CÁCH KHAI BÁO HÀM (TẠO HÀM) FUNCTION DECLARATION
//FUNCTION DECLARATION: HOISTING
handle1(); //NHỜ VÀO HOISTING NÊN NÓ CHẠY BÌNH THƯỜNG
//DÙNG TRƯỚC KHAI BÁO SAU
function handle1() {
    console.log("hàm này đc tạo bằng function declaration");
}
handle1();

//2.BIỂU THỨC HÀM FUNCTION EXPRESSION (KHÔNG HOISTING)
//FUNCTION EXPRESSION: DÙ LÀ VAR NHƯNG VẪN KO HOISTING
// handle2(); //LỖI LIỀN
var handle2 = function () { //tạo biến, biến là hàm
    console.log("hàm này đc tạo bằng function expression");
};

handle2();// chạy ngon

//IIFE (IMMADIATELY INVOKABLE FUNCTION EXPRESSION)
//VỪA MỚI TẠO LÀ ĐC DÙNG LUÔN , KO GỌI LẠI ĐC (DÙNG ĐỂ GOM NHÓM)
; (function () {
    let a = 1;
    let b = 2;
    console.log(a + b);
})();
//IIFE : MẠNH KHI DÙNG CHUNG VỚI ASYNC AWAIT (BẤT ĐỒNG BỘ) | GÓI CODE LẠI CHO GỌN
//NHIỀU KHI MÌNH KO BIẾT ĐẶT TÊN GÌ | TẠO RA DÙNG RỒI THÔI KO DÙNG LẠI
//NẾU THIẾU DẤU ; Ở ĐẦU, VÔ TÌNH Ở TRÊN CÓ 1 FUNCTION THÌ SẼ BỊ LỖI

//ANONYMOURS FUNCTION (HÀM KO TÊN)
// CALLBACK : GỌI LẠI
// HÀM NHẬN VÀO 1 HÀM KHÁC LÀM ĐỐI SỐ
// function1(function2())   | function2(): --> CALLBACK FUNCTION

// setTimeout(functionE(), milisecond)--> callback
// functionE()--> callback function
//setTimeout: ĐỢI 1 SỐ GIÂY NHẤT ĐỊNH SAU ĐÓ MỚI GỌI HÀM functionE()

var handle3 = function () {
    console.log("ahihi đồ chó");
};

// setTimeout(handle3, 3000); // handle3 ko ngoặc tròn
// setTimeout(function(){
//     console.log("tôi là anonymous function trong setTimeout");
// }, 3000);


// ARROW FUNCTION (HÀM RÚT GỌN CỦA FUNCTION EXPRESSION | ANONYMOUS FUNCTION)
// KO PHỤ THUỘC VÀO THIS VÀ KO THA THẾ ĐC FUNCTION DECLARATION
//this: trong js this sẽ ám chỉ người gọi nó

//fd
function handle4() {
    console.log(this);
}
//fe
const handle5 = function () {
    console.log(this);
}
//fa
const handle6 = () => {
    console.log(this);
}

//fd giam this
handle4();//undefined || nếu châm trước thì sẽ là windowObject
//fe
handle5();//undefined || nếu châm trước thì sẽ là windowObject
//fa
handle6();//window

// vd2: 
var person1 = {
    fullname: "Điệp đẹp trai",

    getNameByFunctionExpr: function () {
        console.log(this.fullname);
    },

    getNameByFunctionArrow: () => {
        console.log(this.fullname);
    },
};

person1.getNameByFunctionExpr(); //"Điệp đẹp trai"
person1.getNameByFunctionArrow(); //undefined

//==> ARROW FUNCTION THÌ KO NÊN XÀI THIS

//PHÂN BIỆT THAM SỐ (PARAMETER) VÀ ĐỐI SỐ (ARGUMENT)
function handle7(a, b) { //a,b : parameter : tham số : BIẾN ĐI THAM KHẢO SỐ KHÁC
    return a + b;
}
handle7(2, 6); //2,6 : argument: đối số để thằng khác đối chiếu, tham khảo

//THAM SỐ MẶC ĐỊNH (DEFAULT PARAMETER)
function handle8(x, y = 10) {
    console.log(x + " " + y);
};

handle8(5, 7);
handle8(5);


//THAM SỐ CÒN LẠI | THAM SỐ ĐỢI (REST PARAMETER)

//VD1:
function handle9(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

handle9(2, 5); //2 5 []
handle9(2, 5, 7, 9, 10, 11, 12); // 2 5 [7,9,10,11,12]

//ỨNG DỤNG
//VIẾT 1 HÀM NHẬN VÀO RẤT NHIỀU SỐ, TÍNH TỔNG CÁC SỐ ĐÓ
function sumAll(...numberList){
    let result = 0;
    for (const x of numberList) {
        result += x;
    }
    return result;
}

let b = sumAll(3, 6, 7, 9);
console.log(b);

//... NẰM TRONG PARAMETER (REST PARAMETER)
//... NẰM LỘ THIÊN --> SPREAD OPERATOR (DESTRUCTURING: KĨ THUẬT PHÂN RÃ)





















































