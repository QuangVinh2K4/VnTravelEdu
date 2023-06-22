const inputSearch = document.querySelector('.input-search');
const autoBox = document.querySelector('.autobox');
inputSearch.onkeyup = (e) => {
    let checkData = e.target.value;
    let dataArray = [];
    if (checkData) {
        dataArray = recomentlist.filter((data) => {
            return data
                .toLocaleLowerCase()
                .startsWith(checkData.toLocaleLowerCase());
        });
        dataArray = dataArray.map((data) => {
            return '<li>' + data + '</li>';
            autoBox.style.overflowY = 'auto';
        });
        autoBox.classList.add('active');
        showAdress(dataArray);
        let liItem = autoBox.querySelectorAll('li');
        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener('click', function () {
                inputSearch.value = liItem[i].innerHTML;
            });
        }
    } else {
        autoBox.classList.remove('active');
    }
};
document.addEventListener('click', (e) => {
    if (!inputSearch.contains(e.target)) {
        autoBox.classList.remove('active');
    }
});
function showAdress(list) {
    let listData;
    if (!list.length) {
        listData = '<li>' + inputSearch.value + '</li>';
    } else {
        listData = list.join('');
    }
    autoBox.innerHTML = listData;
    autoBox.style.maxHeight = '230px'; // đặt chiều cao tối đa của autobox
    autoBox.style.overflowY = 'auto';
}
let recomentlist = [
    'An Giang',
    'Bà Rịa-Vũng Tàu',
    'Bắc Giang',
    'Bắc Kạn',
    'Bạc Liêu',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Định',
    'Bình Dương',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cần Thơ',
    'Cao Bằng',
    'Đà Nẵng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Nội',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng',
    'Hậu Giang',
    'Hồ Chí Minh',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lâm Đồng',
    'Lạng Sơn',
    'Lào Cai',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Phú Yên',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên - Huế',
    'Tiền Giang',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Yên Bái',
];
// ---------------Huong dan vien------------------------

const myCarousel = document.getElementById('myCarousel');
myCarousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = this.querySelector('.active');
    document.querySelector('.testi-img img').src =
        activeItem.getAttribute('data-img');
    document.querySelector('.testi-img .circle').style.backgroundColor =
        activeItem.getAttribute('data-color');
});
$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
        '#carouselExampleControls',
    );
    if (window.matchMedia('(min-width: 576px)').matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
            wrap: false,
        });
        var carouselWidth = $('.carousel-inner')[0].scrollWidth;
        var cardWidth = $('.carousel-item').width();
        var scrollPosition = 0;
        $('#carouselExampleControls .carousel-control-next').on(
            'click',
            function () {
                if (scrollPosition < carouselWidth - cardWidth * 3) {
                    scrollPosition += cardWidth;
                    $('#carouselExampleControls .carousel-inner').animate(
                        { scrollLeft: scrollPosition },
                        600,
                    );
                }
            },
        );
        $('#carouselExampleControls .carousel-control-prev').on(
            'click',
            function () {
                if (scrollPosition > 1) {
                    scrollPosition -= cardWidth;
                    $('#carouselExampleControls .carousel-inner').animate(
                        { scrollLeft: scrollPosition },
                        600,
                    );
                }
            },
        );
    } else {
        $(multipleCardCarousel).addClass('slide');
    }
});
