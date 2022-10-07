console.log( '07-class-ClassInheristance.js' );
// Constructor function giúp ta tạo ra nhiều object cùng loại
// nay phát triển ra class với nhiều tính năng hơn, tiện hơn

//  tạo ra cái khuôn (class) tên là User
class User {
    constructor( fullName ) {
        [this.firstName, this.lastName] = fullName.split( ' ' );
    }
    // method show()
    show () {
        console.log(
            `FirstName của tui là ${this.firstName}, LastName của tui là ${this.lastName}`
        );
    }
}

//tạo ra 1 user tên là Điệp
let diep = new User( 'Lê Điệp' );
console.log( diep );
diep.show(); //FirstName của tui là Lê, LastName của tui là Điệp

// trong object diep có gì?
// => có property: firstName và LastName
//          firstName và LastName được tạo trước dòng 17 hay sau dòng 17 ? => chạy xong dòng 17 là có
// [[Prototype]] == User.prototype == class User
// trong class User có j? => constructor và method show
// nên diep có thể dùng method show

// trong js class đưuọc định nghĩa là 1 function đặc biệt
console.log( typeof User ); //function
console.log( User === User.prototype.constructor ); //true
console.log( User.prototype ); //class user (constructor | show)

// thông thường các dev thích dùng __proto__ | prototype để kế thừa
// class là cách dùng khác của họ "syntactic sugar"
// cú pháp kẹo đường ==> việc thay đổi syntax cho dễ tiếp cận với người dùng mới

//  bởi vì ngày xưa họ dùng constructor độc lập chứ ko dùng class

// ---------viết lại Student nhưng mà ko dùng class mà dùng constructor 
function Student ( fullName ) {
    [this.firstName, this.lastName] = fullName.split( ' ' );
    // this.show = function () {
    //     console.log(
    //         `FirstName của tui là ${this.firstName}, LastName của tui là ${this.lastName}`
    //     );
    // };
}


Student.prototype.show = function () {
    console.log(
        `FirstName của tui là ${this.firstName}, LastName của tui là ${this.lastName}`
    );
};
let diepStudent = new Student( 'Điệp Lê' );
console.log( diepStudent );

// vậy khác j giữa object được tạo từ class và object được tạo từ function constructor 
// 1.constructor tạo đc object mà không cần toán tử new 
// let hung = User( 'Hùng Phạm' ); => lỗi
let hung = Student( 'Hùng Phạm' );

// 2.User và Student trong hiển thị 
console.log( User );
console.log( Student );

// 3. code bên trong class luôn use Strict
//  tức là ko có hoisting

// 4. cách tạo class mà bạn vừa mới tạo ở trên class declaration
//class Expression

Student = class ahihi {
    constructor( fullName ) {
        [this.firstName, this.lastName] = fullName.split( ' ' );
    }
    // method show()
    show () {
        console.log(
            `FirstName của tui là ${this.firstName}, LastName của tui là ${this.lastName}`
        );
    }
};
//ahihi là tên có thể dùng trong phạm vi body của Student


//biểu diễn
// tạo ra 1 cái function dùng để tạo class

function makeClass () {
    // tạo ra class bên trong này rồi return ra bên ngoài
    // ai gọi makeClass thì sẽ nhận đc class này
    class ahihi {
        constructor( name ) {
            this.name = name;
        }
        show () {
            console.log( 'tên tui là ' + this.name );
        }
    }
    return ahihi;
}

let User3 = makeClass();

dieppp = new User3( 'Điệp 10' );
dieppp.show();


// computed name[...] : name kết hợp
class User5 {
    firstName = 'Nguyễn'; //class field
    ['show' + 'Infor'] () {
        console.log( 'Hello ' );
    }
}


// tạo đối tượng từ class User5
let hue = new User5();
hue.showInfor(); //Hello 
console.log( hue );



// CẢNH GIÁC VỚI THIS TRONG CLASS
class Button {
    constructor( value ) {
        this.value = value;
    }
    click () {
        console.log( this.value );
    }
}

// tạo btn từ class Button
let btn = new Button( 'Hello' );
console.log( btn );
// dừng làm như này
setTimeout( btn.click, 1000 ); //undefined 

// hãy dùng arrow làm callback || wrapper function//Hello
setTimeout( () => {
    btn.click();
}, 1000 ); //undefined 

// vd2: dùng bind 
class Button1 {
    constructor( value ) {
        this.value = value;
        this.click = this.click.bind( this );
    }
    click () {
        console.log( this.value );
    }
}
// tạo btn1
let btn1 = new Button1( 'ahihi' );
setTimeout( btn1.click, 1000 ); //ahihi

// vd3: arrow method thay thế 
class Button2 {
    constructor( value ) {
        this.value = value;
    }
    click = () => {
        console.log( this.value );
    };
}
// tạo btn1
let btn2 = new Button2( 'ahihi2' );
setTimeout( btn2.click, 1000 ); //ahihi2







// CLASS INHERISTANCE - KẾ THỪA THÔNG QUA CLASS
// KẾ THỪA THÔNG QUA CLASS LÀ 1 CÁCH MÀ 1 CLASS MỞ RỘNG DỰA TRÊN CLASS KHÁC
// TỪ KHÓA 'EXTENDS'
// 
// 
class Animal {
    // speed = 0;  // class field
    constructor( name ) {
        this.speed = 0;
        this.name = name;
    }
    run ( speed ) {
        this.speed = speed;
        alert( `${this.name} runs with speed ${this.speed}` );
    }
    stop () {
        this.speed = 0;
        alert( `${this.name} is stand still` );
    }
}

// 
let ani = new Animal( 'My animal' );

// tạo ra class Rabbit 
class Rabbit extends Animal {
    constructor( name ) {
        super( name ); // đang new animal 
    }
    hide () {
        alert( `${this.name} hides!!!` );
    }
}

let rabbitYellow = new Rabbit( 'Yellows Rabbit' ); //gọi constructor Rabbit
console.log( rabbitYellow );
rabbitYellow.run( 7 ); //Yellows Rabbit runs with speed 7
rabbitYellow.hide(); //Yellows Rabbit hides!!!

// rabbit ko có run()
// [[Prototype]] của Rabbit là gì? => Rabbit.prototype => Class Rabbit
// class Rabbit có run() ko? => ko
// nhưng mà class Rabbit lại được kế thừa Animal
// nên là [[Prototype]] của class Rabbit có Animal.prototype => class Animal
// và trong class Animal thì có run()

// tóm tắt
// rabbitYellow có [[Prototype]] = Rabbit.prototype = Class Rabbit
// Class Rabbit có [[Prototype]] = Animal.prototype = Class Animal
// Class Animal có [[Prototype]] = Object.prototype = Class Object


// prototype chain




// cú pháp hack não
// tại ra 1 cái hàm chuyên tạo class
function f ( phrase ) {
    class ahihi {
        sayHi () {
            console.log( phrase );
        }
    }
    return ahihi;
}

class User6 extends f( 'Hello' ) { };
let objAhihi = new User6();
objAhihi.sayHi();

// ****Nhớ rằng Arrow Function có giam this hay ko ?  => ko
// Người ta hay dùng Arrow Function trị đc các callback, vd:setTimeout

class Rabbit1 extends Animal {
    // sơ mẫu 
    // stop () {
    //     super.stop();
    // }

    // độ chế lại 
    stop () {
        setTimeout( () => {
            super.stop;
        }, 1000 );
    }
}

// ghi đè các class field 
class Animal1 {
    name = 'animal'; //class field 
    constructor() {
        alert( this.name );
    }
}

class Rabbit2 extends Animal1 {
    name = 'rabbit'; //không hề tạo 1 cái name khác | ko ghi đè lên name cũ
}

let objahuhu = new Animal1();
// console.log( objahuhu );

let objahehe = new Rabbit2();
// console.log( objahehe );

// ở đây class Rabbit đã kế thừa Animal và ghi đè lên field name
// Rabbit xài ké constructor của Animal
// constructor của cha luôn sử dụng field name của nó
//          => không hề kế thừa, điều này chỉ xảy ra với class field

// 
class Animal3 {
    showName () {
        alert( 'Animal' );
    }
    constructor() {
        this.showName();
    }
}

class Rabbit3 extends Animal3 {
    showName () {
        alert( 'Rabbit' );
    }
}

let a1 = new Animal3(); //animal 
let a2 = new Rabbit3(); //rabbit (của con)
//

















