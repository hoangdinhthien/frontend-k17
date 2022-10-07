console.log( '03-Prototypall-Inheritance' );
// KẾ THỪA NGUYÊN MẪU

// [[Prototype]]
//  TRONG JS 1 SỐ THUỘC TÍNH ẨN TRONG OBJ ĐƯỢC GỌI LÀ [[Prototype]]
//  DÙ LÀ BỊ ẨN NHƯNG CÓ NHIỀU CÁCH SỬ DỤNG NÓ
//  MỘT TRONG NHỮNG CÁCH DÙNG LÀ THÔNG QUA GETTER VÀ SETTER TÊN LÀ __proto__
// [[Prototype]] và __proto__ ko phải là 1
//  TRONG KỸ THUẬT TA CÓ THỂ DÙNG [[Prototype]] ĐỂ KẾ THỪA OBJECT

// object rabbit kế thừa con animal1
let animal1 = {
    eats: true,
    walk () {
        console.log( 'tao chạy bộ nè' );
    },
};

let rabbit = {
    jumps: true,
};

let longEar = {
    ear: 'long',
    __proto__: rabbit, //set longEar.[[Prototype]] = rabbit
};
// longEar KẾ THỪA NGUYÊN MẪU RABBIT

rabbit.__proto__ = animal1; //set rabbit.[[Prototype]] = animal1

console.log( rabbit.jumps ); //true
console.log( rabbit.eats ); //true
console.log( rabbit );

// prototype chain(dây kế thừa | gia phả) nhiều tầng[[Prototype]] trong object
console.log( longEar.jumps );
console.log( longEar.eats );
longEar.walk();

// TỪ SAU 2015 => THAY THẾ __proto__
// Object.getPrototypeOf( obj );
// Object.setPrototypeOf( obj );

// GIÁ TRỊ CỦA THIS TRONG PROTO
student = {
    lastName: 'Điệp', //VALUE PROPERTY
    firstName: 'Lê', //VALUE PROPERTY

    // ACCESSOR PROPERTY
    // GET
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    },
    // SET
    set fullName ( newName ) {
        [this.firstName, this.lastName] = newName.split( ' ' );
    },
};

let user = {
    isUser: true,
    __proto__: student,
};

user.fullName = 'Khủng Long';

console.log( user );
console.log( student );

//dùng Object.keys() sẽ log ra đc các key không có prototype
//dùng forin thì key của object và của proto sẽ log ra hết

//ngoài việc kế thừa chúng ta còn có thể bỏ các thuộc tính kế thừa ra khỏi object
//bằng obj.hasOwnProperty(key): return true nều key đó thuộc object k phải kế thừa
console.log( user.hasOwnProperty( 'lastName' ) );



//trong đây ta có Proto chain sau: user kế thừa student, student kế thừa null
//null typeOf là Object
//nên ta sẽ có obj.hasOwnProperty(key) dù không khai báo lần nào vì nó có sẳn trong null
//nhưng nó bị enumerable: false nên không được liệt kê trong forin

//II-Prototype

// CONSTRUCTOR FUNCTION: HÀM KHỞI TẠO OBJECT
// CONSTRUCTOR NẰM ĐỘC LẬP

function Car ( name, price ) {
    this.name = name;
    this.price = price;
}

const factory = {
    date: '2021',
};


// TẠO RA CON XE AUDI
let audi = new Car( "Audi", '2 tỷ' );
console.log( audi );

// //JS có tính năng kế thừa prototype từ khi bắt đầu, là 1 trong các tính năng lõi của js
//trong quá khứ không có cách nào truy cập trực tiếp đến nó
//chỉ có cách là dùng thuộc tính prototype của constructor function
//F.prototype ở đây nghĩa là thuộc tính bth đc đặt tên là prototype
//nó có sẳn khi khởi tạo constructor

// prototype       !==     [[Prototype]]
// F.prototype                Object.__proto__

// KẾ THỪA THÔNG QUA CONSTRUCTOR 
Car.prototype = factory;
auti = new Car( 'audi', '2 tỷ' );
console.log( audi.date ); //2021

// NẾU THAY ĐỔI PROTOTYPE THÌ OBJECT ĐƯUỌC TẠO BẰNG CONSTRUCTOR TRƯỚC ĐÓ SẼ KO ẢNH HƯỞNG 
Car.prototype = { location: 'Việt Nam' };
console.log( audi.location ); // undefined

let toyota = new Car( 'toyota', 2000 );
console.log( toyota.location ); //Việt Nam


// TRONG PROTOTYPE CÓ J?
// TẠO CONSTRUCTOR 
function Animal ( name ) {
    this.name = name;
};
console.log( Animal.prototype ); //animal{}
console.log( Animal.prototype.constructor === Animal ); //true

let dog = new Animal();
console.log( dog.constructor );//Animal{}
console.log( dog.constructor == Animal );//true


// ==> MỖI 1 OBJECT ĐỀU CÓ CONSTRUCTOR TẠO RA NÓ 
// THẤY CON MÈO KHÁ GIỐNG CON CHÓ, THÌ LẤY CONSTRUCTOR CỦA CON CHÓ TẠO CON MÈO
let cat = new dog.constructor( 'kyky' );
console.log( cat );



// ****JS KO ĐẢM BẢO ĐÚNG CONSTRUCTOR MÀ TA CẦN
// NẾU NHƯ THAY THẾ PROTOTYPE TRƯỚC KHI CON MÈO TẠO RA
// THÌ CONSTRUCTOR CỦA CON CHÓ KO GIỐNG NỮA
Animal.prototype = {
    jumps: true,
};





































