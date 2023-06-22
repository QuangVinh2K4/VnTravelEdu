ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 1500,
});
ScrollReveal().reveal('.section-01-row-01', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.section-01-row-02', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.section-02-img', {
    delay: 400,
    origin: 'top',
    interval: 200,
});
ScrollReveal().reveal('.section-02-img-big', {
    distance: '120px',
    delay: 700,
    origin: 'left',
});
ScrollReveal().reveal('.box-order', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.box-order .time p', {
    delay: 400,
    origin: 'right',
    interval: 200,
});
ScrollReveal().reveal('.calendar-box', {
    distance: '100px',
    delay: 400,
    origin: 'bottom',
});
ScrollReveal().reveal('.group-services  .item', {
    delay: 700,
    origin: 'bottom',
    interval: 200,
});
ScrollReveal().reveal('.box-support label', {
    distance: '100px',
    delay: 400,
    origin: 'left',
});
ScrollReveal().reveal('.group-contact a', {
    delay: 400,
    origin: 'right',
    interval: 200,
});
ScrollReveal().reveal('.group-contact a i', {
    delay: 400,
    origin: 'top',
    interval: 200,
});
ScrollReveal().reveal('.group-contact a p', {
    delay: 400,
    origin: 'bottom',
    interval: 200,
});
ScrollReveal().reveal('.title-lich-trinh', {
    distance: '100px',
    delay: 500,
    origin: 'top',
});
ScrollReveal().reveal('.go-tour .day', {
    delay: 200,
    origin: 'bottom',
    interval: 1000,
});
ScrollReveal().reveal('.content-schedule', {
    delay: 200,
    origin: 'right',
    interval: 200,
});
ScrollReveal().reveal('.note', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.note', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.travel-details-right h2', {
    delay: 200,
    origin: 'right',
    interval: 200,
});
ScrollReveal().reveal('.travel-details-left h2', {
    delay: 200,
    origin: 'left',
    interval: 200,
});
ScrollReveal().reveal('.detail-tour', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.detail-tour-inner', {
    delay: 200,
    origin: 'bottom',
    interval: 400,
});
ScrollReveal().reveal('.table-price', {
    delay: 200,
    origin: 'left',
    interval: 200,
});
ScrollReveal().reveal('.more-info', {
    delay: 200,
    origin: 'left',
    interval: 200,
});
ScrollReveal().reveal('.more-info span', {
    delay: 200,
    origin: 'top',
    interval: 400,
});
ScrollReveal().reveal('.more-info p', {
    delay: 200,
    origin: 'right',
    interval: 400,
});
ScrollReveal().reveal('article h3', {
    delay: 200,
    origin: 'right',
    interval: 100,
});
ScrollReveal().reveal('article .open', {
    delay: 200,
    origin: 'right',
    interval: 200,
});
ScrollReveal().reveal('active', { delay: 0, origin: 'right', interval: 400 });

// Lấy tất cả các phần tử "article" trong FAQ section
const articles = document.querySelectorAll('.faqs article');

// Duyệt qua từng phần tử "article" và thêm sự kiện "click"
articles.forEach((article) => {
    article.addEventListener('click', () => {
        // Tìm phần tử "panel" tương ứng với phần tử "article"
        const panel = article.querySelector('.panel');

        // Kiểm tra xem phần tử "panel" đã có lớp "active" hay chưa
        if (panel.classList.contains('active')) {
            // Nếu có, xóa lớp "active" để ẩn phần tử "panel"
            panel.classList.remove('active');
        } else {
            // Nếu chưa, thêm lớp "active" để hiển thị phần tử "panel"
            panel.classList.add('active');
        }
    });
});
