console.log("BÀI 10: CHUỖI - METHOD");
// CHUỖI TRONG JS ĐC BỌC BẰNG " "
//METHOD TRONG STRING
//  1.LENGTH() //RETURN RA ĐỘ DÀI CHUỖI
let str = "ahihi";
console.log(str.length);

//  2.indexOf() // VỊ TRÍ ĐẦU TIÊN CỦA TỪ HOẶC CHUỖI TRONG CHUỖI
console.log(str.indexOf("a")); //0
console.log(str.indexOf("s")); //-1
console.log(str.indexOf("hi")); //1

// I.TÁCH CHUỖI
//  1.SLICE(START, END): RETURN RA ĐOẠN TỪ START ĐẾN END - 1
var x = "xin chào PiedTeam, mình là Điệp";
console.log(x.slice(9, 17)); //PiedTeam
console.log(x.slice(4, 8)); //chào

//CẮT NGƯỢC
console.log(x.slice(-22, -14));

//CẮT THIẾU PARAMETER
console.log(x.slice(9)); //PiedTeam, mình là Điệp
//CẮT THIẾU PARAMETER THEO CHIỀU NGƯỢC
console.log(x.slice(-12)); //mình là Điệp

// 2.SUBSTRING(START, END): GIỐNG CÁCH XÀI CỦA SLICE NHƯNG NÓ CHIỀU NGƯỢC
// 3.SUBSTR(START, LENGTH): RETURN RA CHUỖI BẮT ĐẦU TỪ START DÀI BẰNG LENGTH 
x = "xin chào PiedTeam, mình là Điệp";
console.log(x.substr(9, 8)); //TỪ VỊ TRÍ SỐ 9, CẮT 8 PHẦN TỬ: -->PIEDTEAM


//II. CÁC METHOD PHỔ BIẾN
var str1 = "PiedTeam có giá học phí rẻ và chất lượng, rẻ nhưng tốt";

//REPLACE(OLD, NEW): RETURN 1 CHUỖI THAY OLD BẰNG NEW
console.log(str1.replace("rẻ", "thấp"));
//PiedTeam có giá học phí thấp và chất lượng, rẻ nhưng tốt

console.log(str1.replaceAll("rẻ", "thấp"));
//PiedTeam có giá học phí thấp và chất lượng, thấp nhưng tốt


//2.CHUYỂN ĐỔI HOA THƯỜNG .toUpperCase .toLowerCase

//3.CONCAT() NỐI CHUỖI
str1 = "Xin chào";
str2 = "PiedTeam";
str3 = str1.concat(" ", "mừng bạn đến với", " ", str2);
console.log(str3); //Xin chào mừng bạn đến với PiedTeam

// 4.TRIM(): XÓA KHOẢNG CÁCH 2 ĐẦU CHUỖI 
str1 = "     xin       chào        bạn         ";
str1 = str1.trim();
console.log(str1); //xin       chào        bạn
str1 = "     xin       chào        bạn         ";
// str1 = str1.replace(/\s+/g, " ").trim();
// console.log(str1); //xin chào bạn


str1 = str1.split(" ") //BĂM NHỎ
           .filter(item => item != "") // LỌC CÁC THẰNG ""
           .join(" "); // NỐI LẠI BẰNG " "
console.log(str1); //XIN CHÀO BẠN


// 5.SO SÁNH CHUỖI == | ===

// 6. CHARAT(INDEX) HOẶC [], RETURN KÝ TỰ Ở VỊ TRÍ INDEX
str1 = "điệp đẹp trai";
console.log(str1.charAt(2)); // ==> ệ
console.log(str1[2]); // ==> ệ

str1[2] = "e"; //KHÔNG LỖI VÀ KHÔNG CHẠY
console.log(str1);
















































































