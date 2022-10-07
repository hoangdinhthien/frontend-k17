console.log( '01-PropertyFlag-DescriptorObject' );
// TRONG OBJECT THÌ THƯỜNG CÓ PROPERTY(THUỘC TÍNH) VÀ METHOD(HÀM | PHƯƠNG THỨC)
// PROPERTY: CÓ CÁC THUỘC TÍNH CỜ - PROPERTY FLAG
// WRITABLE: TRUE THÌ VALUE CÓ THỂ THAY ĐỔI | FALSE THÌ READ-ONLY
// ENUMERABLE: NẾU TRUE THÌ THUỘC TÍNH ĐƯỢC LIỆT KÊ KHI LẶP, CÒN FALSE THÌ KO ĐƯỢC LIỆT KÊ
// CONFIGURABLE: NẾU TRUE THÌ PROPERTY CÓ THỂ BỊ THAY ĐỔI | XÓA WRITABLE ENUMERABLE
//                  FALSE THÌ KO THỂ
// VALUE: GIÁ TRỊ CỦA PROP

// 1 THUỘC TÍNH (PROP) CÓ ĐỦ 3 CỜ 1 VALUE ĐƯỢC GỌI LÀ BỘ MÔ TẢ CỦA THUỘC TÍNH
//      (PROPERTY DESCRIPTOR)


//1.METHOD STATIC
//          Object.getOwnPropertyDescriptor( obj, propertyName );
//          =====> TRẢ RA ĐẦY ĐỦ THÔNG TIN CỦA THUỘC TÍNH

let profile = {
    name: 'Điệp',
    age: 18,
};

console.log( Object.getOwnPropertyDescriptor( profile, 'name' ) );
// {value: 'Điệp', writable: true, enumerable: true, configurable: true}

// 2.SET GIÁ TRỊ CHO CÁC LÁ CỜ
Object.defineProperty( profile, 'name', {
    writable: false,
} );
console.log( Object.getOwnPropertyDescriptor( profile, 'name' ) );
//{value: 'Điệp', writable: false, enumerable: true, configurable: true} 

// THỬ SET GIÁ TRỊ THUỘC TÍNH NAME CỦA PROFILE 
profile.name = 'Huệ';
console.log( profile );
// {name: 'Điệp', age: 18}

// SET LẠI PROFILE 
profile = {};

// TẠO THUỘC TÍNH BẰNG Object.defineProperty
Object.defineProperty( profile, 'name', {
    value: 'Tú',
    enumerable: true,
    configurable: true,
} );
// TẠO RA 1 PROP LÀ NAME CHO PROFILE CÓ CÁC THÔNG TIN TRÊN
// WRITABLE TRONG TRƯỜNG HỢP NÀY LÀ FALSE
// ==================================

Object.defineProperty( profile, 'age', {
    value: 18,
    writable: true,
    enumerable: false,
    configurable: true,
} );

profile.job = 'Cô Hồn';
console.log( profile );

// FOR IN DÙNG DUYỆT OBJECT

for ( const key in profile ) {
    console.log( key );
}
// CHỈ DUYỆT RA NAME VÀ JOB

// Non-configurable: không thể cấu hình
// configurable:false nghĩa là không cho ta set giá trị của các cờ ngoại trừ value nữa
// ngta thường dùng nó cho các giá trị đặc biệt như Math.PI không cho người dùng cấu hình
// các method mặt định

console.log( Object.getOwnPropertyDescriptor( Math, 'PI' ) );
//*configurable: false
// enumerable: false
// value: 3.141592653589793
// writable: false
//không cho ghi đè, k cho hiển thị khi gọi object Math, và không cho cấu hình lại 2 cờ trên

//* một khi đã set configurable: false thì k thể dùng defineProperty để set lại thành true
// configurable: false thì sẽ có những hạn chế sau
// 1. không thể thay đổi configurable
// 2. không thể thay đổi enumerable
// 3. không thể thay đổi writable: false -> true(nhưng ngược lại true -> false thì đc)
// 4. không thể thay đổi getter/setter


//Object.defineProperties(obj,{
// key : {value:' ',descriptor}
// key : {value:' ',descriptor}
// })
// giúp định nghĩa nhiều thuộc tính cùng lúc

// Object.getOwnPropertyDescriptors(obj,'PI')
// giúp return nhiều thuộc tính cùng lúc
// nếu kết hợp definesProperties có thể clone một object có full bộ cờ

profile = {};
Object.defineProperties( profile, {
    name: { value: 'Tú', writable: true },
    age: { value: 19, writable: true, enumerable: true, configurable: true }
} );

// ***CLONE OBJECT SẼ KO CLONE ĐC PROPERTY FLAG
let profileClone = { ...profile };
// CHƠI SPREAD ĐỂ CLONE THÌ KO LẤY ĐC CỜ 

profileClone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors( profile )
);

// CLONE TOÀN DIỆN | LẤY ĐƯỢC GIÁ TRỊ VÀ CỜ CỦA PROP

//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj)
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj)
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object)



// II. GETTER VÀ SETTER
// TRONG JS THÌ OBJECT CÓ 2 LOẠI THUỘC TÍNH (PROP)
//      THUỘC TÍNH DỮ LIỆU: VALUE PROPERTY
//      THUỘC TÍNH BỘ (GET|SET) TRUY CẬP: ACCESSOR PROPERTY

let student = {
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
console.log( student.fullName );
student.fullName = 'Trà Long';
console.log( student.fullName );

//Bộ mô tả (descriptor) của bộ accessor properties sẽ
//          không có writable và value như value properties
//          nhưng có thêm get và set function
//get: 1 function không có tham số, hoạt động khi thuộc tính được đọc(gọi)
//set: 1 function có tham số,       hoạt động khi thuộc tính được set
//enumerable:
//configurable:
console.log( Object.getOwnPropertyDescriptor( student, 'fullName' ) );

// ACCESSOR PROPERTIES MÀ ĐC TẠO BẰNG
// Object.defineProperty THÌ NÓ SẼ ENUMERABLE LÀ FALSE


// GETTER VÀ SETTER THÔNG MINH 
//   GIẢ SỬ: CẤM NGƯỜI DÙNG GÁN GIÁ TRỊ CHO NAME CÓ ĐỘ DÀI BÉ HƠN 4

student = {
    get name () {
        return this._name; //_name là name giả 
    },
    set name ( value ) {
        if ( value.length < 4 ) {
            alert( 'Name is to short' );
            return;
        }
        this._name = value;
    },
};

console.log( student.name );//undefined
student.name = 'Hồng';
console.log( student.name );





























