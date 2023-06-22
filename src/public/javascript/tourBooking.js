// Lấy các phần tử cần thiết từ DOM
const adultMinusBtn = document.querySelector('#adultMinus');
const adultPlusBtn = document.querySelector('#adultPlus');
const adultNumberEl = document.querySelector('#adult');

const childrenMinusBtn = document.querySelector('#childrenMinus');
const childrenPlusBtn = document.querySelector('#childrenPlus');
const childrenNumberEl = document.querySelector('#children');

const smallchildrenMinusBtn = document.querySelector('#smallchildrenMinus');
const smallchildrenPlusBtn = document.querySelector('#smallchildrenPlus');
const smallchildrenNumberEl = document.querySelector('#smallchildren');

const babyMinusBtn = document.querySelector('#babyMinus');
const babyPlusBtn = document.querySelector('#babyPlus');
const babyNumberEl = document.querySelector('#baby');

// Tạo một hàm để tính lại tổng tiền
function calculateTotalPrice() {
    const childrenDiscount = 0.8;
    const smallchildrenDiscount = 0.7;
    const babyDiscount = 0.6;

    const adultPrice = 1200;
    const childrenPrice =1200*childrenDiscount;
    const smallchildrenPrice =1200*smallchildrenDiscount;
    const babyPrice =1200*babyDiscount;

    let adultNumber = Number(adultNumberEl.textContent);
    let childrenNumber = Number(childrenNumberEl.textContent);
    let smallchildrenNumber = Number(smallchildrenNumberEl.textContent);
    let babyNumber = Number(babyNumberEl.textContent);

    let totalPrice = adultNumber * adultPrice;
    totalPrice += childrenNumber * childrenPrice;
    totalPrice += smallchildrenNumber * smallchildrenPrice;
    totalPrice += babyNumber * babyPrice;

    // Hiển thị giá tiền lên trang web
    const totalAdult = document.querySelector('#AdultPrice');
    if(adultNumber===0){
        totalAdult.textContent ="0₫";
    }else{
        totalAdult.textContent = adultNumber.toLocaleString() +"x"+adultPrice+ "₫";
    }
    const totalChildren = document.querySelector('#ChildrenPrice');
    if(childrenNumber===0){
        totalChildren.textContent ="0₫";
    }else {
        totalChildren.textContent = childrenNumber.toLocaleString() + "x" + childrenPrice + "₫";
    }
    const totalSnallChildren = document.querySelector('#SmallChildrenPrice');
    if(smallchildrenNumber===0){
        totalSnallChildren.textContent ="0₫";
    }else {
        totalSnallChildren.textContent = smallchildrenNumber.toLocaleString() + "x" + smallchildrenPrice + "₫";
    }
    const totalBaby = document.querySelector('#BabyPrice');
    if(babyNumber===0){
        totalBaby.textContent ="0₫";
    }else {
        totalBaby.textContent = babyNumber.toLocaleString() +"x"+babyPrice+ "₫";
    }
    const totalPriceEl = document.querySelector('#TotalPrice');
    totalPriceEl.textContent = totalPrice.toLocaleString() + "₫";
}

// Thiết lập sự kiện click cho nút minus và plus của mỗi loại người dùng
// Loại người lớn
adultMinusBtn.addEventListener('click', () => {
    let currentVal = Number(adultNumberEl.textContent);
    if (currentVal > 0) {
        currentVal--;
        adultNumberEl.textContent = currentVal.toString();
        calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
    }
});

adultPlusBtn.addEventListener('click', () => {
    let currentVal = Number(adultNumberEl.textContent);
    currentVal++;
    adultNumberEl.textContent = currentVal.toString();
    calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
});

// Loại trẻ em
childrenMinusBtn.addEventListener('click', () => {
    let currentVal = Number(childrenNumberEl.textContent);
    if (currentVal > 0) {
        currentVal--;
        childrenNumberEl.textContent = currentVal.toString();
        calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
    }
});

childrenPlusBtn.addEventListener('click', () => {
    let currentVal = Number(childrenNumberEl.textContent);
    currentVal++;
    childrenNumberEl.textContent = currentVal.toString();
    calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
});

// Loại trẻ nhỏ
smallchildrenMinusBtn.addEventListener('click', () => {
    let currentVal = Number(smallchildrenNumberEl.textContent);
    if (currentVal > 0) {
        currentVal--;
        smallchildrenNumberEl.textContent = currentVal.toString();
        calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
    }
});

smallchildrenPlusBtn.addEventListener('click', () => {
    let currentVal = Number(smallchildrenNumberEl.textContent);
    currentVal++;
    smallchildrenNumberEl.textContent = currentVal.toString();
    calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
});

//Loại em bé
babyMinusBtn.addEventListener('click', () => {
    let currentVal = Number(babyNumberEl.textContent);
    if (currentVal > 0) {
        currentVal--;
        babyNumberEl.textContent = currentVal.toString();
        calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
    }
});

babyPlusBtn.addEventListener('click', () => {
    let currentVal = Number(babyNumberEl.textContent);
    currentVal++;
    babyNumberEl.textContent = currentVal.toString();
    calculateTotalPrice(); // tính lại tổng tiền khi số lượng thay đổi
});
