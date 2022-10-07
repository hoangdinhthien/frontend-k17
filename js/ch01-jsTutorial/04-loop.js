console.log("BÀI 5: VÒNG LẶP - LOOP");
//reUse: DÙNG LẠI | repeat: LẬP LẠI

// WHILE | DO-WHILE | FOR (KHÔNG BÀN)

var student1 = { name: "Điệp", point: 10, major: "SE" };
//              THUỘC TÍNH/ PROPERTY / ENTRY
//              KEY : VALUE

// FOR-IN: LẬP CÁC KEY TRONG OBJECT
for (let key in student1) {
    console.log(key);
}
//*name point major
console.log(student1["point"]);
console.log(student1.point);

var array1 = [12, 17, 19];
console.log(array1[1]);
//DUYỆT ARRAY BẰNG FOR IN
for (const key in array1) {
    console.log(key + " " + array1[key]);
}
/*
-->     0 12
        1 17 
        2 19
*/

//FOR IN SẼ VÔ DỤNG VỚI SET
let set1 = new Set(["a", "b", "c", "a", "d"]);
//'a', 'b', 'c', 'd' --> NÓ ĐÃ LOẠI TRÙNG --> ĐỔI THỨ TỰ --> FOR IN KO DUYỆT ĐC 

for (const key in set1) {
    console.log(key); // ko có mẹ j luôn
}


//For-of: CHUYÊN DUYỆT VALUE (NGƯỢC VỚI FOR IN)
let workerList = ["Điệp", "Huệ", "Lan", "Huệ"];
//key: 0, value: Diep
for (const x in workerList) {
    console.log(x);
}
//--> 0 1 2 3 

for (const x of workerList) {
    console.log(x);
}

//ARRAY LÀ OBJECT NHƯNG KO PHẢI PLAIN OBJECT 

//FOR-OF KO CHƠI VỚI OBJECT PHẲNG
var object1 = { a: 1, b: 2, c: 3 };
// for (const x of object1) {
//     console.log(x); //TypeError: object1 is not iterable
// }
//ITERABLE: TÍNH KHẢ LẬP

//FORE: FOR-EACH : LẬP KEY(INDEX) : VALUE
["a", "b", "c"].forEach((item) => {
    console.log(item);
});
//a b c

["a", "b", "c"].forEach((val) => {
    console.log(val);
});
//a b c 


["a", "b", "c"].forEach((val, index) => {
    console.log(val + " " + index);
});
/*
a 0
b 1
c 2
*/





































































































