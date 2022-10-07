console.log('BÀI 11: ARRAY - METHOD');
// MẢNG TRONG JS KHÔNG NHẤT THIẾT PHẢI CÙNG KIỂU DỮ LIỆU

var arr1 = [1, 2, 'a', { lname: 'Huệ', age: 18 }, [3, 5]];

// 1.CÁCH LẤY PHẦN TỬ TRONG MẢNG
console.log(arr1[3]); //{lname: 'Huệ', age: 18}

//STRING LÀ IMMUTABLE: STRING LÀ KO BỊ TÁC ĐỘNG, METHOD CỦA STRING CHỈ TẠO RA STRING MỚI
//ARRAY LÀ MUTABLE: LÀ METHOD KO GÂY ẢNH HƯỞNG ĐẾN ĐỐI TƯỢNG
arr1[3] = 'Điệp';
console.log(arr1); //(5) [1, 2, 'a', 'Điệp', Array(2)]

// 2.LENGTH LẤY ĐỘ DÀI
console.log(arr1.length); //5

// 3.ISARRAY() HOẶC INSTANCEOF ARRAY ĐỂ NHẬN BIẾT 1 BIẾN CÓ PHẢI ARRAY KO
console.log(arr1 instanceof Array); //true

// 4.TOSTRING(): BIẾN MẢNG THÀNH CHUỖI KÈM ','
var workerList = ['Huệ', 'Lan', 'Trà'];
var str1 = workerList.toString(); //IMMUTABLE
console.log(workerList);
console.log(str1); //Huệ,Lan,Trà

// 5.DEMO SPLIT: BĂM VÀ JOIN: NỐI
var title = 'xin chào các bạn';
//title => "xin-chào-các-bạn";
title = title.split(' ').join('-');
console.log(title);

// CHÈN ARRAY
// 6. PUSH() NHÉT PHẦN TỬ VÀO CUỐI | RETURN RA ĐỘ DÀI MỚI
var workerList = ['Huệ', 'Lan', 'Trà'];
var result = workerList.push('Cúc'); //mutable
console.log(workerList, result); //=> (4) ['Huệ', 'Lan', 'Trà', 'Cúc'] 4

// 7.POP(): XÓA PHẦN TỬ CUỐI | RETURN ĐỐI TƯỢNG ĐÃ XÓA
result = workerList.pop();
console.log(workerList, result); // (3) ['Huệ', 'Lan', 'Trà'] 'Cúc'

// 8.UNSHIFT() THÊM PHẦN TỬ VÀO ĐẦU | RETURN ĐỘ DÀI MỚI
result = workerList.unshift('Cúc'); //mutable
console.log(workerList, result); // (4) ['Cúc', 'Huệ', 'Lan', 'Trà'] 4

// 9.SHIFT() XÓA PHẦN TỬ ĐẦU | RETURN PHẦN TỬ BỊ XÓA
result = workerList.shift(); //MUTABLE
console.log(workerList, result); //['Huệ', 'Lan', 'Trà'] 'Cúc'

// 10. DELETE ARRAY[INDEX]
//  XÓA PHẦN TỬ CỬA ARRAY TẠI VỊ TRÍ INDEX
//      ĐỂ LẠI KHOẢNG TRỐNG Ở VỊ TRÍ
//      NẾU MÀ TRUY CẬP VÀO VỊ TRÍ ĐÓ SẼ (UNDEFINED)
// ['Cúc', 'Huệ', 'Lan', 'Trà']
//DELETE ARRAY [2] => ['Cúc', 'Huệ', , 'Trà'] => ARRAY[2]: UNDEFINED

// 11.SPLICE(INDEX, SỐ LƯỢNG CẦN XÓA, .....PHẦN TỬ CẦN THÊM):
//      THÊM HOẶC XÓA NHIỀU PHẦN TỬ Ở VỊ TRÍ MÌNH MUỐN
//      RETURN VỀ MẢNG CÁC PHẦN TỬ ĐÃ XÓA
//SPLICE: VỪA THÊM VỪA XÓA
workerList = ['Huệ', 'Lan', 'Trà'];
result = workerList.splice(1, 1, 'Cúc', 'Hồng');
console.log(workerList, result); //(4) ['Huệ', 'Cúc', 'Hồng', 'Trà'] ['Lan']

//SPLICE: VỪA THÊM KO XÓA
workerList = ['Huệ', 'Lan', 'Trà'];
result = workerList.splice(1, 0, 'Cúc', 'Hồng');
console.log(workerList, result); //(6) ['Huệ', 'Cúc', 'Hồng', 'Cúc', 'Hồng', 'Trà'] []

//SPLICE: XÓA KHÔNG THÊM
workerList = ['Huệ', 'Lan', 'Trà'];
result = workerList.splice(1, 1);
console.log(workerList, result); //(2) ['Huệ', 'Trà'] ['Lan']

//12.SPLICE: LẤY RA ĐOẠN GIỮA GIỐNG STRING
//13. CONCAT(): NỐI MẢNG GIỐNG STRING
var workerGirl = ['Huệ', 'Lan', 'Trà'];
var workerBoy = ['Điệp', 'Cường', 'Hùng'];
workerList = workerGirl.concat(workerBoy, 'Tâm', ['Phú', 'Đại']);
console.log(workerList);
//=>(9) ['Huệ', 'Lan', 'Trà', 'Điệp', 'Cường', 'Hùng', 'Tâm', 'Phú', 'Đại']

//14.SPREAD OPERATOR: DESTRUCTURING: PHÂN RÃ    ...[1,2,3,5] => 1, 2, 3, 5
workerList = [...workerGirl, ...workerBoy];
console.log(workerList); //=>  ['Huệ', 'Lan', 'Trà', 'Điệp', 'Cường', 'Hùng']
//NGTA GỌI LÀ SHALLOW COPY

//15. FOREACH(CALLBACKFUNCTION): LẶP QUA TỪNG PHẦN TỬ TRONG MẢNG
//      CALLBACKFUNCTION CÓ 3 ĐỐI SỐ
//        VALUE, INDEX, ARRAY
arr1 = [1, 2, 'a', 'huệ'];
arr1.forEach((value, index, array) => {
  console.log(value, index, array);
});

//16.MAP(CALLBACK FUNCTION): TẠO RA MẢNG MỚI BẰNG KHẢ NĂNG TÍNH TOÁN TỪNG PHẦN TỬ
arr1 = [2, 5, 7];
arr1 = arr1.map((item) => item * 3);
console.log(arr1); //(3) [6, 15, 21]

//17.FILTER(): LỌC THEO 1 FUNCTION
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.filter((item) => item % 2 == 0);
console.log(arr1); //[2,4]

//18.FIND(CALLBACK FUNCTION): TÌM GIÁ TRỊ TRẢ VỀ VALUE NÀO THỎA CALLBACK FUNCTION ĐẦU TIÊN
//                              KHÔNG TÌM ĐC THÌ ĐƯỢC UNDEFINED
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.find((item) => item % 2 == 0);
console.log(arr1); //2

// 19.FINDINDEX(CALLBACK FUNCTION): TÌM VỊ TRÍ, TÌM ĐC THÌ TRẢ RA INDEX
//                                      KHÔNG TÌM ĐC THÌ -1
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.findIndex((item) => item % 2 == 0);
console.log(arr1); //1

//20.INDEXOF() XÀI TƯƠNG TỰ NHƯ STRING

// 21.EVERY() GIỐNG THẰNG ALL TRONG DBI
//      TẤT CẢ THỎA ĐIỀU KIỆN THÌ TRUE
//      1 THẰNG KO THỎA THÌ FALSE
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.every((item) => {
  return item >= 1;
});
console.log(arr1); //true VÌ ITEM NÀO CŨNG THỎA HẾT

// 22.SOME(): GIỐNG THẰNG IN TRONG DBI
//              CHỈ CẦN 1 PHẦN TỬ LÀ TRUE HẾT
//              NẾU TẤT CẢ PHẦN TỬ KO THỎA THÌ MỚI FALSE
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.some((item) => {
  return item >= 4;
});
console.log(arr1); //true
//CHỈ CẦN 4 VÀ 5 THỎA THÔI LÀ TRUE HẾT

// 23.INCLUDES: TÌM XEM VALUE CÓ TỒN TẠI TRONG MẢNG HAY KO, TRẢ RA TRUE|FALSE
arr1 = ['Huệ', 'Lan', 'Trà'];
result = arr1.includes('Hồng');
console.log(result); //FALSE: KO CÓ CON HỒNG TRONG LIST

// 24.REVERSE() ĐẢO NGƯỢC MẢNG

// 25. SORT() SẮP XẾP
//    1.STRING
arr1 = ['Điệp', 'An', 'Bảo'];
arr1.sort();
console.log(arr1);

arr1.sort().reverse();
console.log(arr1);

//    2.SỐ
arr1 = [1, 3, 100, 20];
arr1.sort();
console.log(arr1);
//SORT() NÓ THUỘC NHÀ STRING NÊN NÓ XEM NHƯ ĐANG SORT STRING
//CẦN DẠY NÓ CÁCH SORT
arr1.sort((a, b) => a - b);
console.log(arr1); //(4) [1, 3, 20, 100]

//26. REDUCE()
// NẾU MAP LÀM THAY ĐỔI TƯỜNG PHẦN TỬ THEO 1 CÔNG THỨC NÀO ĐÓ
// REDUCE DỒN CÁC PHẦN TỬ BẰNG 1 CÔNG THỨC
arr1 = [1, 3, 100, 20];
var result = arr1.reduce((total, current, currentIndex) => {
  return total + current;
}, 0); //initialValue
console.log(result); //124
//NẾU QUÊN INITIALVALUE THÌ TỰ CÓ 0

//REDUCE BIẾN MẢNG THÀNH OBJECT
arr1 = ['Điệp', 22, 10];
var newObject = arr1.reduce((total, current, currentIndex) => {
  total[currentIndex] = current;
  return total;
}, {});
console.log(newObject); //{0: 'Điệp', 1: 22, 2: 10}

