//rules validate
// email: required, email real (isEmail, có regex)
// ^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-z]{1,7}$
// /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// Name: required, Là tên người (tiếng anh ỏ việt, ko chứa số), max 50 ký tự
// Giới tính: required
// quốc gia: required
// password: required, min(8), max(20)
// ConfirmedPassword: required, min(8), max(20), real name (isSame)
// agree: required

const REG_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-z]{1,7}$/;

const REG_NAME = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/;

// mình sẽ viết mấy cái hàm nhận vào value và check theo chuẩn gì đó: nếu hợp yêu cầu thì ""
// nếu ko hợp yêu cầu thì chửi
const isRequired = ( value ) => value.trim() !== '' ? '' : 'That field is required';
const isEmail = ( value ) => REG_EMAIL.test( value ) ? '' : 'Email is not valid';
const isName = value => REG_NAME.test( value ) ? '' : 'Name is not valid';
const min = num => value => value.length >= num ? '' : `Minimum is ${num}`;
const max = num => value => value.length <= num ? '' : `Maximum is ${num}`;
const isSame = ( paramValue, fieldName1, fieldName2 ) => ( value ) => {
    return paramValue === value ? '' : `${fieldName1} not match ${fieldName2}`;
};


//NHỮNG KHÁI NIỆM CẦN NẮM:
// VALUE: GIÁ TRỊ TRONG Ô INPUT
// FUNCS: NHỮNG HÀM SẼ DÙNG ĐỂ CHECK VALUE
//      VD: ĐỂ CHECK VALUE EMAIL => FUNCS: [ISREQUIRED, ISEMAIL]
//      VD: ĐỂ CHECK VALUE PASSWORD => FUNCS: [ISREQUIRED, MIN(8), MAX(20)]

// parentNode: NODE CHA CỦA VALUE
// controlNode: LÀ THẰNG NODE INPUT


// VIẾT 1 HÀM DÙNG ĐỂ BÁO LỖI TRÊN TỪNG INPUT 
const createMsg = ( parentNode, controlNodes, msg ) => {
    // TẠO DIV THÔNG BÁO LỖI 
    const invalidDiv = document.createElement( 'div' );
    invalidDiv.className = 'invalid-feedback';
    invalidDiv.textContent = msg;
    parentNode.appendChild( invalidDiv );
    controlNodes.forEach( ( itemNode ) => {
        itemNode.classList.add( 'is-invalid' );
    } );
};

// hàm xóa các msg
const clearMsg = () => {
    document.querySelectorAll( ".is-invalid" ).forEach( ( inputItem ) => {
        inputItem.classList.remove( "is-invalid" );
    } );
    document.querySelectorAll( ".invalid-feedback" ).forEach( ( divMsg ) => {
        divMsg.remove();
    } );
};

// CẦN 1 HÀM NHẬN VÀO VALUE, NHẬN VÀO FUNCS, PARENTNODE, CONTROLNODE
// ĐỂ NÓ DÙNG CÁC FUNCS KIỂM TRA VALUE, RỒI CREATMSG(PARENT, CONTROLNODE)
const isValid = ( paramObject ) => {
    // PARAMOBJECT BI TÁCH THÀNH value, funcs, parentNode, controlNodes 
    const { value, funcs, parentNode, controlNodes } = paramObject;
    for ( const func of funcs ) {
        const msg = func( value );
        if ( msg ) { //msg có
            createMsg( parentNode, controlNodes, msg );
            return msg;
        }
    }
    return '';
};

document.querySelector( 'form' ).addEventListener( 'submit', ( event ) => {
    event.preventDefault();
    // xóa thông báo cũ
    clearMsg();
    // DOM ĐẾN TẤT CẢ CÁC NODE INPUT
    const emailNode = document.querySelector( '#email' );
    const nameNode = document.querySelector( '#name' );
    const genderNode = document.querySelector( '#gender' );
    // ĐỐI VỚI COUNTRY NÓ SẼ CẦN ANH MÓC VÀO THẰNG ĐÃ CHECKED
    const countryNode = document.querySelector( "input[name='country']:checked" );
    const password = document.querySelector( '#password' );
    const confirmedPassword = document.querySelector( '#confirmedPassword' );
    const agreeNode = document.querySelector( 'input#agree:checked' );

    // MẢNG CHỨA CÁC CHUỖ TRẢ RA SAU ISVALID
    const errorForm = [
        // email
        isValid( {
            value: emailNode.value,
            funcs: [isRequired, isEmail],
            parentNode: emailNode.parentElement,
            controlNodes: [emailNode]
        } ),

        // name
        isValid( {
            value: nameNode.value,
            funcs: [isRequired, isName, max( 50 )], //max 50 ung dung currying
            parentNode: nameNode.parentElement,
            controlNodes: [nameNode]
        } ),

        // gender
        isValid( {
            value: genderNode.value,
            funcs: [isRequired],
            parentNode: genderNode.parentElement,
            controlNodes: [genderNode]
        } ),

        // country
        isValid( {
            value: countryNode ? countryNode.value : '',
            funcs: [isRequired],
            parentNode: document.querySelector( '.form-check-country' ).parentElement,
            controlNodes: document.querySelectorAll( "input[name='country']" ),
        } ),

        // password
        isValid( {
            value: password.value,
            funcs: [isRequired, min( 8 ), max( 20 )],
            parentNode: password.parentElement,
            controlNodes: [password],
        } ),

        // confirm password
        isValid( {
            value: confirmedPassword.value,
            funcs: [isRequired, min( 8 ), max( 20 ), isSame( password.value, 'Password', 'Confirm password' )],
            parentNode: confirmedPassword.parentElement,
            controlNodes: [confirmedPassword],
        } ),

        // agree
        isValid( {
            value: agreeNode ? agreeNode.value : '',
            funcs: [isRequired],
            parentNode: document.querySelector( '#agree' ).parentElement,
            controlNodes: [document.querySelector( '#agree' )],
        } ),
    ];

    // errorForm là mảng chứa các chuỗi trả ra sau kiểm tra 
    // mình sẽ kiểm tra xem nếu như errorForm không có item nào là chuỗi khác rống
    // thì form oke | ngược lại thì ko oke
    const isValidForm = errorForm.every( item => !item );
    if ( isValidForm ) {
        clearMsg();
        alert( 'Form is valid' );
    }
} );


















// // code A Diep
// //rule validate
// // email: required, isEmail
// // Name:  required, là tên người (tiếng anh hoặc việt không chứa số), max 50 ký tự
// // Giới tính: required
// // Quốc gia : required
// // Password: required, min(😎, max(20)
// // ConfirmedPassword: required, min(😎, max(20), isSame
// // agree : required
// const REG_EMAIL =
//     /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-z]{1,7}$/;
// const REG_NAME =
//     /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/;
// //mình sẽ viết mấy cái hàm nhận vào value và check theo chuẩn gì đó : nếu hợp yêu cầu thì ""
// // nếu không hợp yêu cầu thì chữi
// const isRequired = ( value ) =>
//     value.trim() !== "" ? "" : "That Field is required";
// const isEmail = ( value ) => ( REG_EMAIL.test( value ) ? "" : "Email not Validate" );
// const isName = ( value ) => ( REG_NAME.test( value ) ? "" : "Name is not validate" );
// const min = ( num ) => ( value ) => value.length >= num ? "" : Min is ${ num };
// const max = ( num ) => ( value ) => value.length <= num ? "" : Max is ${ num };
// const isSame = ( paramValue, fieldName1, fieldName2 ) => ( value ) => {
//     return paramValue === value ? "" : ${ fieldName1; } không khớp ${ fieldName2; };
// };
// //những khái niệm cần nắm:
// //value: giá trị trong ô input
// //funcs: những hàm sẽ dùng để check value
// //      vd: để check value email => funcs: [isRequired, isEmail]
// //      vd: để check value password => funcs: [isRequired, min(😎, max(20)]
// //parentNode: node cha của value
// //controlNodes: thằng node input

// //viết 1 hàm dùng để báo lỗi trên từng input
// const createMsg = ( parentNode, controlNodes, msg ) => {
//     //tạo div thông báo lỗi
//     const invalidDiv = document.createElement( "div" );
//     invalidDiv.className = "invalid-feedback";
//     invalidDiv.textContent = msg;
//     parentNode.appendChild( invalidDiv );
//     controlNodes.forEach( ( itemNode ) => {
//         itemNode.classList.add( "is-invalid" );
//     } );
// };

// //hàm xóa các msg
// const clearMsg = () => {
//     document.querySelectorAll( ".is-invalid" ).forEach( ( inputItem ) => {
//         inputItem.classList.remove( "is-invalid" );
//     } );
//     document.querySelectorAll( ".invalid-feedback" ).forEach( ( divMsg ) => {
//         divMsg.remove();
//     } );
// };
// //cần 1 cái hàm nhận vào value, nhận vào funcs, parentNode, controlNode
// //để nó dùng các funcs kiểm tra value, rồi createMsg(parent,controlNode)
// const isValid = ( paramObject ) => {
//     //paramObject bị tách thành value, funcs, parentNode, controlNodes
//     const { value, funcs, parentNode, controlNodes } = paramObject;
//     for ( const func of funcs ) {
//         const msg = func( value );
//         if ( msg ) {
//             //msg có
//             createMsg( parentNode, controlNodes, msg );
//             return msg;
//         }
//     }
//     return "";
// };

// document.querySelector( "form" ).addEventListener( "submit", ( event ) => {
//     event.preventDefault();
//     //xóa thông báo cũ
//     clearMsg();
//     //dom đến tất cả các node input
//     const emailNode = document.querySelector( "#email" );
//     const nameNode = document.querySelector( "#name" );
//     const genderNode = document.querySelector( "#gender" );
//     //đối với country nó sẽ cần anh móc vào thằng đã checked
//     const countryNode = document.querySelector( "input[name='country']:checked" );
//     const password = document.querySelector( "#password" );
//     const confirmedpassword = document.querySelector( "#confirmedPassword" );
//     const agreeNode = document.querySelector( "input#agree:checked" );

//     //mảng chứa cách chuỗi trả ra sau isValid
//     const errorForm = [
//         // email
//         isValid( {
//             value: emailNode.value,
//             funcs: [isRequired, isEmail],
//             parentNode: emailNode.parentElement,
//             controlNodes: [emailNode],
//         } ),
//         // name
//         isValid( {
//             value: nameNode.value,
//             funcs: [isRequired, isName, max( 50 )], //max(50) ứng dụng currying
//             parentNode: nameNode.parentElement,
//             controlNodes: [nameNode],
//         } ),
//         //gender
//         isValid( {
//             value: genderNode.value,
//             funcs: [isRequired],
//             parentNode: genderNode.parentElement,
//             controlNodes: [genderNode],
//         } ),
//         //Country
//         isValid( {
//             value: countryNode ? countryNode.value : "",
//             funcs: [isRequired],
//             parentNode: document.querySelector( ".form-check-country" )
//                 .parentElement,
//             controlNodes: document.querySelectorAll( "input[name='country']" ),
//         } ),
//         //password
//         isValid( {
//             value: password.value,
//             funcs: [isRequired, min(😎, max( 20 )],
//             parentNode: password.parentElement,
//             controlNodes: [password],
//         } ),
//         //confirmedpassword
//         isValid( {
//             value: confirmedpassword.value,
//             funcs: [
//                 isRequired,
//                 min(😎,
//                 max( 20 ),
//                 isSame( password.value, "Password", "Nhập lại password" ),
//             ],
//             parentNode: confirmedpassword.parentElement,
//             controlNodes: [confirmedpassword],
//         } ),
//         //agree
//         isValid( {
//             value: agreeNode ? agreeNode.value : "",
//             funcs: [isRequired],
//             parentNode: document.querySelector( "#agree" ).parentElement,
//             controlNodes: [document.querySelector( "#agree" )],
//         } ),
//     ];

//     //errorForm là mảng chứa các chuỗi trả ra sau kiểm tra
//     //mình sẽ kiểm tra xem nếu như errorForm không có item nào là chuỗi khác rỗng
//     //thì form oke | ngược lại thì k oke
//     const isValidForm = errorForm.every( ( item ) => !item );
//     if ( isValidForm ) {
//         clearMsg();
//         alert( "Form is valid" );
//     }
// } );











