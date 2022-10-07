console.log('BÀI 12: OBJECT - METHOD');
// OBJECT 
//  ENTRY CỦA OBJECT KEY: VALUE
//  KEY LUÔN LÀ STRING HOẶC NUMBER
//  VALUE CÓ THỂ LÀ BẤT CỨ GIÁ TRỊ NÀO
var worker1 = {
    lname : 'Điệp đẹp trai',
    age: '24',
    showInfor(){
        console.log(this.lname + ' ' + this.age);
    },
};

worker1.showInfor();


// THÊM THUỘC TÍNH 
worker1.point = 10;

// SỬA LẠI GIÁ TRỊ CHO THUỘC TÍNH
worker1.lname = 'Điệp PiedTeam';

//XOÁ THUỘC TÍNH
delete worker1.age;

console.log(worker1);
// {lname: 'Điệp PiedTeam', point: 10, showInfor: ƒ}
// lname: "Điệp PiedTeam"
// point: 10
// showInfor: ƒ showInfor()
// [[Prototype]]: Object

//1.OBJECT.ASSIGN()
//      MERGE OBJECT
//      CÓ RỒI THÌ GHI ĐÈ, CHƯA CÓ THÌ THÊM ZÔ

var person1 = {
    lname: 'Điệp',
    age: 24,
    job: ['yangho', 'coder'],
};

var person2 = {
    lname: 'Lan',
    age: 24,
    company: 'PiedTeam',
};

var person3 = Object.assign(person1, person2);
console.log(person3);
console.log(person1 == person3); //true
// Object.assign đó là person1 đang thay đổi
//person1 và person3 là 2 chàng trỏ 1 nàng
// VIỆC MERGE NHƯ NÀY LÀ SHALLOW COPY
person3.job.push('lái xe');
console.log(person1);

//SPREAD OPERATOR: ĐỂ MERGE | CŨNG LÀ SHALLOW COPY
person3 = {...person1, ...person2};
person3.job = [...person3.job];
person3.job.push('Đua xe');
console.log(person1);
console.log(person1 == person3); //false


// OBJECT.KEY() // TRẢ RA MẢNG CÁC KEY CỈA OBJECT
result = Object.keys(person3);
console.log(result); //(4) ['lname', 'age', 'job', 'company']


// OBJECT.VALUE() // TRẢ RA MẢNG CÁC VALUE CỈA OBJECT
result = Object.values(person3);
console.log(result); 

































