let btnAdd = document.querySelector('#btn-Add');

btnAdd.addEventListener('keydown', (event) => {
    console.log(event);
    console.log(event.clientX, event.clientY);
    // CLIENT: HỆ QUY CHIẾU LÀ VIEWPORT
    console.log(event.offsetX, event.offsetY);
    // OFFSET: HỆ QUY CHIẾU LÀ ELEMENT
    console.log(event.target);
    // TARGET: RETURN VỀ ELEMENT VỪA CLICK

    const inputName = document.querySelector('#name');
    console.log(inputName.value);
    const newItem = document.createElement('li');
    newItem.className = 'card mb-3 p-2';
    newItem.innerHTML = inputName.value;
    document.querySelector('#list').appendChild(newItem);
    
});


// EVENT
// DBCLICK: NHẤN 2 LẦN MỚI CHẠY
// SUBMIT THÌ CẦN CÁI NÀY event.preventDefault(); ĐỂ CHẶN RESET TRANG
// MOUSEOVER: ĐƯA CHUỘT VÀO LÀ CHẠY
// MOUSEOUT: ĐƯA CHUỘT RA LÀ CHẠY


// KEYBOARD: 
// KEYDOWN: NHẬN TẤT CẢ CÁC PHÍM KHI NHẤN 1 PHÍM BẤT KỲ DÀNH CHO ALLINPUT
// KEYPRESS: NHẬN TẤT CẢ CÁC PHÍM (NGOẠI TRỪ ALT, ESC, SHIFT, CTRL) KHI NHẤN VÀO 1 PHÍM BẤT KỲ
// KEYUPP: NHẬN TẤT CẢ CÁC PHÍM (NGOẠI TRỪ ALT, ESC, SHIFT, CTRL) KHI NHẢ 1 PHÍM BẤT KỲ

// ONINPUT | ONCHANGE: THỰC THI KHI VALUE CỦA INPUT THAY ĐỔI
//          ONINPUT: THỰC THI NGAY KHI THAY ĐỔI
//          ONCHANGE: THỰC THI KHI MÌNH BỎ FORCUS

// 