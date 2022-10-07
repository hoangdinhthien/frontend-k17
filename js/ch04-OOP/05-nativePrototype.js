// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó

//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function


// khi mà 1 object đc tạo ra từ 1 constructor thì [[Prototype]] của object đó sẽ có giá trị là
// prototype của constructor

// Object.prototype
// Object rỗng
let obj = {};
// let obj1 = new Object();
console.log( obj.toString() ); //[object Object]

// đối tượng obj đc tạo ra từ constructor tên là object
// [[Prototype]] của obj là Object.prototype là class Object
// bên trong 1 object có j? ==> thuộc tính, [[Prototype]] sử dụng __proto__
// 
console.log( obj.__proto__ == Object.prototype );//true

console.log( Object.prototype.__proto__ ); //null
console.log( obj.__proto__.__proto__ );//null

// Array, Date, Function cũng giữ trong mình các phương thức có sẵn trong prototype
let mang1 = [1, 2, 3];
// mang1 không có prototype vì nó không phải constructor
console.log( mang1.__proto__ === Array.prototype ); //true
console.log( mang1.__proto__.__proto__ === Object.prototype ); //true


// có trường hợp object có các method trùng nhau của các prototype
// ví dụ như method toString() cả Object và Array đều có

// vậy thì mang1 sẽ chọn toString của Object hay toString của Array


// Override: vượt mặt

// Object => Array => mang1 (ghi đè)




// primitive - kiểu nguyên thủy
// String, number, boolean, ko phải là object nhưng vẫn truy cập chúng bằng cách như sau
let a = 1;
console.log( a.toString() ); //1




















































