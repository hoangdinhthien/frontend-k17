const navtabBtnList = document.querySelectorAll('.navtab-btn');
const navtabContentList = document.querySelectorAll('.tab-content-item');
// 
navtabBtnList.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // XÓA HẾT ACTIVED TRÊN CÁC NÚT 
        navtabBtnList.forEach((_btn) => {
            _btn.classList.remove("actived");
        });
        // THÊM ACTIVED VÀO NÚT VỪA BỊ NHẤN
        event.target.classList.add("actived");
        // XÓA ACTIVED TRÊN CONTENT
        navtabContentList.forEach((contentTab) => {
            contentTab.classList.remove('actived');
        });
        document
        .querySelector(`.tab-content-item[data-content='${event.target.id}']`)
        .classList.add('actived');

    });
});


