console.log( '09-private-property-metthod' );
//Access modifier: là đại diện của tính đóng gói trong OOP của js

//trong js chia ra 2 dạng prop
//  Internal và Exteral Interface
// Internal Interface: những prop hay method chỉ có thể truy cập bên trong các method của class, ko phải từ bên ngoài
//
// External Interface: những prop hay method có có thể truy cập bên trong lẫn bên ngoài của class

// trong js có 2 loại thuộc tính và phương thức
// Public: có thể truy cập ở bất cứ đâu [External Interface]
// Private: có thể truy cập nội bộ class [Internal Interface]
//trong nhiều ngôn ngữ khác mình còn có "protected" - js ko có
//
// nhưng mà các dev sẽ tự quy ước với nhau ở cấp độ ngôn ngữ

//ReadOnly
// diễn ra trong trường hợp tạo get mà ko tạo set
// các dev sẽ quy ước tên có _ ở trước là private, và sẽ phải dùng getter setter
// ****đây là quy ước, KHÔNG phải thực


class CoffeeMachine {
    constructor( power ) {
        this._power = power;
    }
    get power () {
        return this._power;
    }
};

let cfm = new CoffeeMachine( 100 );
// cfm.power = 50; // => ko hề có set 
cfm._power = 50; //phaỉ làm như này
// nếu me truy cập như này để set giá trị thì em đã vi phạm quy tắc vì _ là private
console.log( cfm.power );

//thực tế là các dev thích xài getter và setter giống java hơn là
//get và set của js | vì nó đang năng, nhận nhiều tham số

//private được đảm bảo về mặt ngôn ngữ so với readOnly và protected
//đối với private ngta còn dùng #
class CoffeeMachine1 {
    #waterLimit = 200;
    #fixWaterAmount ( value ) {
        if ( value < 0 ) return 0;
        if ( value > this.#waterLimit ) return this.#waterLimit;
    }
    setWaterAmount ( value ) {
        this.#waterLimit = this.#fixWaterAmount( value );
    }
}
let cfm1 = new CoffeeMachine1();
// cfm1.#fixWaterAmount(123);
// cfm1.#waterLimit = 123;




























































































































































