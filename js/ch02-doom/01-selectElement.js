// document.getElementById('...'); lấy đối tượng bằng id, truyền tên của id thôi
// document.querySelector('...'); CÁCH DÙNG NHƯ SELECTOR CỦA CSS: NON-LIVE
// =>GIÚP EM LẤY RA 1 ĐỐI TƯỢNG MÀ THÔI
let input = document.getElementById("name");
input = document.querySelector("#name");
console.log(input);

// document.getElementsByClassName("..."); RETURN 1 HTML COLLECTION
// document.querySelectorAll("...");  RETURN NODELIST GIỐNG ARRAY
// =>GIÚP LẤY 1 TẬP GIÁ TRỊ CÁC ĐỐI TƯỢNG THỎA
// HTML COLLECTION GIỐNG ARRAY NHƯNG KO PHẢI ARRAY NÊN KO CÓ METHOD FOREACH
//      PHẢI CHUYỂN HTML COLLECTION => ARRAY BẰNG SPREAD OPERATOR 

// let cardList = [...document.getElementsByClassName('card')];
cardList = [...document.querySelectorAll('.card')];
cardList.forEach((item) => {
    console.log(item);
});



console.log('DEMO METHOD');
//METHOD HAY DÙNG
let a = document.querySelector('.card'); //ELEMENT|ITEM|NODE
console.log(a);
console.log(a.children); //LẤY RA CON HTML COLLECTION
console.log(a.childNodes);//LẤY RA CON NODELIST
console.log(a.parentElement); //LẤY RA ĐC CONTAINER CHỨA 3 THẰNG CARD
console.log(a.nextElementSibling);//TÌM ĐC THẰNG GIỐNG MÌNH TIẾP THEO

console.log(a.firstChild);//VÌ CÓ XUỐNG HÀNG NỀN THẰNG ĐẦU LÀ TEXT
console.log(a.lastChild); //text


//TẠO 1 ELEMENT MỚI
const newCard = document.createElement('div');
newCard.className = 'card p-2 mb-3';
//or
// newCard.classList.add('card');
// newCard.classList.add('p-2');
// newCard.classList.add('mb-3');
// newCard.classList.add('card','p-2','mb-3');

// CLASSNAME CHO ANH CHUỖI CLASS LUÔN 
// CLASSLIST DÁNH SÁCH CÁC CLASS DƯỚI DẠNG MẢNG CÓ THỂ ADD REMOVE

newCard.innerHTML = "<h1>Tui là phần tử được tạo bằng doom</h1>" +
                    "<p>xin chào mọi người</p>"
let cardGroup = document.querySelector('.card-group');
// cartGroup.appendChild(newCard);
cardGroup.replaceChild(newCard, cardGroup.children[1]);

//.SETATTRIBUTE 
cardGroup.setAttribute('data-id', '1');
// cardGroup.removeAttribute('data-id');

let result = cardGroup.getAttribute('data-id');
console.log(result);






