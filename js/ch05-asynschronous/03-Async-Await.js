// 03-Async-Await ==> ES7

// ngày xưa ngta dùng callback để xử lý bất đồng bộ, để callback hell
//ES6:  ngta dùng Promise
//ES7 trở lên:  Async Await dùng để kết hợp vơi Promise
// tạo ra cú pháp dể hiểu hơn
// ----------------------

// ASYNC function: là 1 hàm luôn luôn return 1 promise 
//                  nó là cách viết tắt của 1 hàm return 1 promise 

function handle () {
    return Promise.resolve( 'ahihi' );
}

async function handle1 () {
    return 'ahihi';
}

// cách xài 2 thằng là giống nhau 
handle().then( value => {
    console.log( 'handle có resolve là: ' + value );
} );

handle1().then( value => {
    console.log( 'handle1 có resolve là: ' + value );
} );


// AWAIT: nó chỉ hoạt động trong môi trường của ASYNC mà thôi
// giúp code phải đồng bộ 

getProfile = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( { name: 'Điệp đẹp trai', age: 22 } );
    }, 3000 );
} );

getArticle = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( ['sách văn học', 'tiểu thuyết'] );
    }, 2000 );
} );

// dùng then catch kiểu cũ
// getProfile().then( value => {
//     console.log( value );
//     return getArticle();
// } ).then( value => {
//     console.log( value );
// } )


// dùng async function + await: 5s 
// let getData = async function () {
//     let profile = await getProfile();
//     console.log( profile );
//     let article = await getArticle();
//     console.log( article );
// };

// dùng async function + await: 3s 
let getData = async function () {
    let [profile, article] = await Promise.all( [getProfile(), getArticle()] );
    console.log( profile );
    console.log( article );
};

getData();


// vd2: xử lý lỗi
getStundents = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        reject( new Error( 'lỗi chà bá' ) );
    }, 3000 );
} );

// dùng promise thì bắt lỗi bằng .catch
// getStundents().then( value => { } )
//     .catch( error => {
//         console.log( 'getStudents đã bị lỗi là: ' + error );
//     } )

// nếu dùng async await thì dùng try catch

let handle3 = async () => {
    try {
        let students = await getStundents();
        console.log( 'danh sách nè: ' + students );
    } catch ( error ) {
        console.log( 'getStudents đã bị lỗi là: ' + error );
    }
};
handle3();

// *** Lưu ý : đừng bao giờ dùng async await với toán tử đồng bộ 
// vd:
let x = 0;
let handle4 = async () => {
    x += 1;
    console.log( x );
    return 5;
};

let handle5 = async () => {
    let tmp = await handle4();
    x += tmp;
    console.log( x );
};
handle5()























