document.querySelector( 'form' ).addEventListener( 'submit', event => {
    event.preventDefault(); // GIÚP CHO KO BỊ RESET TRANG KHI SUBMIT FORM
    const name = document.querySelector( '#name' ).value;
    // TẠO 1 ITEM GỒM 2 THUỘC TÍNH LÀ GIÁ TRỊ CỦA BIẾN NAME VÀ ID 
    const item = {
        id: new Date().toISOString(), //dùng date làm id lun
        name: name.trim(),
    };

    if ( item.name ) {
        //HIỂN THỊ ITEM LÊN MÀN HÌNH
        addItemToUI( item );
        // LƯU LẠI ITEM VÀO LOCALSTORAGE(LS)
        addItemToLS( item );
    }
    document.querySelector( '#name' ).value = '';
} );

//hàm lấy danh sách trong LS
const getList = () => {
    return JSON.parse( localStorage.getItem( 'list' ) ) || []; //nếu list ko tồn tại thì cho mảng rỗng và ngược lại
};
const addItemToLS = item => {
    const list = getList(); // lấy list trong ls
    list.push( item ); //Nhét item mới vào list

    //cập nhật list lên ls
    localStorage.setItem( 'list', JSON.stringify( list ) );
};

const addItemToUI = item => {
    const newCard = document.createElement( 'div' );
    newCard.className = 'card d-flex flex-row justify-content-between align-items-center p-2 mb-3';
    newCard.innerHTML = `<span>${item.name}</span>
    <button type="btn" class="btn btn-danger btn-sm btn-remove" data-id='${item.id}'>Remove</button>`;
    document.querySelector( '.list' ).appendChild( newCard );
};


//INIT(CẬP NHẬT DANH SÁCH MỖI KHI VÀO TRANG)
const init = () => {
    const list = getList();
    list.forEach( item => {
        addItemToUI( item );
    } );
};
init();

//HÀM NHẬN VÀO ID VÀ XÓA ĐỐI TƯỢNG CÓ ID TRONG LS
const removeItemFromLS = ( id ) => {
    //lấy list từ ls
    const list = getList();
    //từ id đc cho, tìm index của id đó 
    const index = list.findIndex( ( item ) => item.id == id );
    list.splice( index, 1 );

    // cập nhật list lên lại ls
    localStorage.setItem( 'list', JSON.stringify( list ) );
};

// XÓA 1 ITEM CHỈ ĐỊNH
document.querySelector( '.list' ).addEventListener( 'click', event => {
    if ( event.target.classList.contains( 'btn-remove' ) ) {
        // do something
        //nhắm tới đối tượng phía trước button
        const nameItem = event.target.previousElementSibling.innerHTML;
        const isConfirm = confirm( `Bạn chắc là muốn xóa item: ${nameItem} ko?` );
        if ( isConfirm ) {
            //xóa card khỏi giao diện
            const card = event.target.parentElement;
            card.remove();  //tới đây chưa xóa đâu, còn trong local store, mới xóa trên giao diện thôi

            //xóa item ra khỏi local store
            removeItemFromLS( event.target.dataset.id );

        }
    }
} );


// xóa hết
document.querySelector( '#btn-remove-all' ).addEventListener( 'click', event => {
    const isConfirm = confirm( 'Bạn có chắc là mún xóa hết item hong?' );
    if ( isConfirm ) {
        //xóa ui 
        document.querySelector( '.list' ).innerHTML = '';
        //xóa ls
        localStorage.removeItem( 'list' );
    }
} );

//TÌM KIẾM 
//gõ tới đâu tìm tới đó
document.querySelector( '#filter' ).addEventListener( 'keyup', event => {
    let valueInputFilter = event.target.value;
    const list = getList();
    // lọc ra các item nào trong list có name chứa valueInputFilter
    //thì mình cho ra 1 danh sách
    const filteredList = list.filter( item =>
        item.name.toLowerCase().includes( valueInputFilter.toLowerCase() )
    );
    // xóa list trên ui 
    document.querySelector( '.list' ).innerHTML = '';
    filteredList.forEach( ( item ) => {
        addItemToUI( item );
    } );
} );