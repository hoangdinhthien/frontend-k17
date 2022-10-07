// COOKIE
// CHO PHÉP LƯU TRỮ THÔNG TIN NGƯỜI DÙNG WEB VÀO MÁY TÍNH 

const date = new Date(2022, 7, 25).toString();
// `` template string(string tùy biến)
document.cookie = `usename = diep; expires = ${date}; path = /`;  
// cho người nào quyền truy cập nhưng có thời hạn (cookie request)
// NẾU COOKIE MÀ KHÔNG TRUYỀN EXPIRES THÌ SẼ LÀ SESSION: TRONG LÚC MỞ TRÌNH DUYỆT
// PATH: LÀ NƠI CHỨA COOKIE 
// NẾU KO TRUYỀN THÌ MẶC ĐỊNH SẼ LÀ ĐƯỜNG DẪN HIỆN TẠI

console.log(document.cookie);

// COOKIE THÌ CÓ HẠN HẾT
// KO THỂ TRUYỀN COOKIE TỪ TRANG NÀY SANG TRANG KHÁC ĐC 
// ĐỂ THAO TÁC VỚI COOKIE NGƯỜI TA DÙNG KÈM THƯ VIỆN JS.COOKIE
// 
// LOCAL STORE ĐỂ LƯU TRỮ VỚI HIỆU LỰC VĨNH VIỄN | TOKEN JWT
// LOCALSTORE LƯU TRÊN WEB
localStorage.setItem("name", 'Điệp đẹp trai');
//  THÊM 1 BIẾN TÊN LÀ NAME CÓ GIÁ TRỊ LÀ ĐIỆP ĐẸP TRAI VÀO LOCAL STORE
console.log(localStorage.getItem('name'));
// LƯU TRỮ 1 OBJECT HAY 1 MẢNG THÌ KO ĐC 
//  NHƯNG MÀ TA CÓ THỂ LƯU 2 THẰNG ĐÓ DƯỚI DẠNG JSON

// MUỐN LƯU MẢNG | OBJECT
const profile = {
    name : 'Điệp PiedTeam',
    age: 24,
};
const profileJson = JSON.stringify(profile);
console.log(profileJson);
localStorage.setItem('Profile', profileJson);

// 
let newObject = localStorage.getItem('Profile');
newObject = JSON.parse(newObject)
console.log(newObject);









