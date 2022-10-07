console.log("BÀI 9: NUMBER METHOD");
//SỐ TRONG JS CHỈ CÓ KIỂU NUMBER MÀ THÔI
//SỐ NGUYÊN, ĐỘ CHÍNH XÁC CHỈ ĐẾN 15 SỐ

var x = 999999999999999; //15 số
x = 9999999999999999; //16 số
console.log(x);
//GIỚI HẠN CỦA SỐ THẬP PHÂN LÀ 17 SỐ

x = 0.2 + 0.1;
x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

//LÀM TRÒN
x = 0.2 + 0.1;
console.log(Number(x.toFixed(1)));
//toFixed TRẢ RA SỐ ĐÃ LÀM TRÒN DƯỚI DẠNG CHUỖI
//WRAPPER CONSTRUCTOR NUMBER ÉP VỀ SỐ
//Math.js (npm i math)

console.log(2 + 2); //4
//SỐ + SỐ = SỐ
console.log(2 + "2");//22
//SỐ + CHUỖI = CHUỖI
console.log(4 - 2); // 2
//SỐ - SỐ = SỐ
console.log(4 - "2"); // 2
//SỐ - CHUỖI = SỐ
console.log(4 - "a"); //NaN
console.log(NaN == NaN); //false
console.log(2 / 0); //infinity | ==> typeof number
console.log(-2 / 0); //-infinity

x = 07; //HỆ OCTAL
x = 0xff; //HỆ HEXA (16)

//ÉP SỐ THÀNH CHUỖI
x = String(2002);
x = 2002;
x.toString();

//ÉP KIỂU VỀ SỐ
//Number() | parseInt() | parseFloat() .....
































