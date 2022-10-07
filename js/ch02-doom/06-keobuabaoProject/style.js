const VALUES = [
    { id: 'scissor', value: '✌️' }, //0
    { id: 'rock', value: '✊' }, //1
    { id: 'paper', value: '🖐' }, //2
];
// NẾU TRỪ A - B ĐƯỢC 1, -2 LÀ THẮNG
// NẾU A - B ĐƯỢC 0 LÀ HÒA 
// NẾU A - B ĐƯỢC -1, 2 (NHỮNG J KHÁC Ở 2 DÒNG TRÊN) LÀ THUA 

let i = 0;
const handleChange = () => {
    const computer = document.querySelector( '#computer' );
    // /.textContent GIÁ TRỊ BEN TRONG THẺ 
    computer.textContent = VALUES[i].value;
    computer.dataset.id = VALUES[i].id;
    if ( i === VALUES.length - 1 ) {
        i = 0;
    } else {
        i++;
    }
};

// VIẾT 1 HÀM LIÊN TỤC GỌI HANDLECHANGE
// setInterval: GỌI CALLBACK LIỀN SAU MỖI MILISECOND
let interval = setInterval( handleChange, 100 );

// DOM ĐẾN DANH SÁCH CÁC NÚT CỦA NGƯỜI CHƠI
const playerItem = document.querySelectorAll( '.user' );

// HÀM COMPARE (HÀM SO SÁNH KẾT QUẢ CỦA NGƯỜI DÙNG VÀ MÁY)
const compare = ( valuePlayer, valueComputer ) => {
    //DỰA TRÊN GIÁ TRỊ NGƯỜI DÙNG TÌM VỊ TRÍ CỦA NÓ TRONG MẢNG VALUES
    const indexUser = VALUES.findIndex( item => item.id === valuePlayer );
    //DỰA TRÊN GIÁ TRỊ NGƯỜI DÙNG TÌM VỊ TRÍ CỦA NÓ TRONG MẢNG VALUES
    const indexComputer = VALUES.findIndex( item => item.id === valueComputer );
    let check = indexUser - indexComputer;
    if ( check == 1 || check == -2 ) {
        return 1;
    } else if ( check == 0 ) {
        return 0;
    } else {
        return -1;
    }
};

playerItem.forEach( item => {
    item.addEventListener( 'click', event => {
        //DỪNG THẰNG MÁY LẠI 
        clearInterval( interval ); // XÓA CÁI SETINTERVAL Ở TRÊN 
        let valueComputer = document.querySelector( '#computer' ).dataset.id;
        let valuePlayer = event.target.id;
        playerItem.forEach(_item => {
            _item.classList.remove('actived');
            _item.style.pointerEvents = 'none';
        })
        // sau khi bấm thì các nút ko đc click nữa
        event.target.classList.add('actived');
        let result = compare(valuePlayer, valueComputer);
        
        const alertPost = document.createElement('div');
        alertPost.classList.add('alert');//THÊM CLASS TÊN LÀ ALERT
        let msg = ''; //DÒNG THÔNG BÁO
        if(result === 1){
            msg = 'BẠN THẮNG (HÊN THÔI KU)!!!';
            alertPost.classList.add('alert-success'); //THÊM MÀU XANH CHO THÔNG BÁO
        } else if(result === -1){
            msg = 'BẠN CÒN THUA CON MÁY NỮA!!!';
            alertPost.classList.add('alert-dark'); 
        } else {
            msg = 'BẠN CHỈ BẰNG CON MÁY!!!';
            alertPost.classList.add('alert-warning'); 
        }
        alertPost.textContent = msg;
        document.querySelector('.notification').appendChild(alertPost);
        document.querySelector('#play-again').classList.remove('d-none');
    } );
} );

// LÀM SỰ KIỆN BẤM CHƠI LẠI 
document.querySelector('.btn-play-again').addEventListener('click', event => {
    interval = setInterval( handleChange, 100 );
    playerItem.forEach(item => {
        item.classList.remove('actived');
        item.style.pointerEvents = '';
    })
    document.querySelector('.notification').innerHTML = '';
    document.querySelector('#play-again').classList.remove('d-none');
});