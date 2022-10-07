console.log("BÀI 4: CÂU ĐIỀU KIỆN - CONDITIONAL COMMAND");

//if
if (true) {
    console.log("do something");
}

//if else 
let a = 8;
if (a < 7) {
    console.log(1);
} else {
    console.log(2);
}

//*2
let b = 8;
if (b < 7) {
    console.log(1);
} else if (b > 7) {
    console.log(2);
} else if (b == 8) {
    console.log(3);
} else {
    console.log("ahihi đồ chó");
}


//switch case
var choice = 1;
switch (choice) {
    case 1: {
        console.log("ahihi 1");
        break;
    }
    case 2: {
        console.log("ahihi 2");
        break;
    }
    case 3: {
        console.log("ahihi 3");
        break;
    }
    default: {
        console.log("ahihi đồ chó");
        break;
    }
}

//*thiếu break thì sẽ bị trôi lệnh xuống case dưới 
//*THIẾU DEFAULT THI GIỐNG NHƯ THIẾU ELSE 
//*CÁC CASE VÀ DEFAULT CÓ THỂ XÁO TRỘN VỊ TRÍ 


//NÂNG CAO : TOÁN TỬ 3 NGÔI
let res;
res ? console.log("có giá trị") : console.log("không có giá trị");
// if (res) {
//     console.log("có giá trị");
// } else {
//     console.log("không có trá trị");
// }

//PRO
// if(!res){
//     console.log("không có giá trị");
// }

!res && console.log("không có giá trị");


















