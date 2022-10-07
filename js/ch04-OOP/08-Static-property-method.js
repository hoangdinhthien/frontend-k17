console.log( '08-Static-property-method' );


class User {
    sayHi () {
        console.log( 'Hello' );
    }

    static sayHi1 () {
        console.log( 'Hello 1' );
    }
}

// static đối với method
// static nghĩa là tĩnh
// method mà có static nghĩa là có thể truy cập thông qua Class mà ko cần tạo Object
// thông qua Class mà ko cần tạo Object
// User.sayHi();
// muốn dùng sayHi() tạo object
let diep = new User();
diep.sayHi();

User.sayHi1();

// người ta dùng static cho các method có ý nghĩa thuộc về Class, chứ không phải
// nhân bản cho bất cứ object nào
// ví dụ ta tạo ra class hình tròn
// thì static nên là ai? => số pi, 

class Article {
    constructor( title, date ) {
        this.title = title;
        this.date = date;
    }
    static compare ( articleA, articleB ) {
        return articleA.date - articleB.date;
    }
}

let articleArray = [
    new Article( 'HTML', new Date( 2022, 8, 1 ) ),
    new Article( 'CSS', new Date( 2022, 2, 8 ) ),
    new Article( 'JS', new Date( 2022, 3, 7 ) ),
];


articleArray.sort( Article.compare );
console.log( articleArray );
//  nếu như cha có static method(prop)
// thì khi thằng con kế thừa thì nó ko tạo ra method(prop) mới
// mà nó xài chung với cha các method(prop đó)
// và nếu nó thay đổi method(prop) thì cha cũng thay đổi luôn 



































































































































































































































































































































































































































































































