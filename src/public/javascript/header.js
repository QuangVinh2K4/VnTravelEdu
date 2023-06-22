const menuBtn = document.querySelector('.menu-icon span');
const searchBtn = document.querySelector('.search-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const items = document.querySelector('.nav-items');
const form = document.querySelector('form');
menuBtn.onclick = () => {
    items.classList.add('active');
    menuBtn.classList.add('hide');
    searchBtn.classList.add('hide');
    cancelBtn.classList.add('show');
};
cancelBtn.onclick = () => {
    items.classList.remove('active');
    menuBtn.classList.remove('hide');
    searchBtn.classList.remove('hide');
    cancelBtn.classList.remove('show');
    form.classList.remove('active');
    cancelBtn.style.color = '#ff3d00';
};
searchBtn.onclick = () => {
    form.classList.add('active');
    searchBtn.classList.add('hide');
    cancelBtn.classList.add('show');
};
const navbar_dark = document.querySelector('.navbar-dark');
const tourDetail = document.querySelector('.tour-detail');
const createTour = document.querySelector('.create-tour');
const information = document.querySelector('.information');
const booking_tour = document.querySelector('.booking-tour ');

if (tourDetail !== null) {
    navbar_dark.classList.add('top-nav-collapse');
}
if (information !== null) {
    navbar_dark.classList.add('top-nav-collapse');
}
if (booking_tour!== null) {
    navbar_dark.classList.add('top-nav-collapse');
}
if (createTour !== null) {
    navbar_dark.classList.add('top-nav-collapse');
}
if (tourDetail === null && information === null && createTour === null && booking_tour ===null) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            navbar_dark.classList.add('top-nav-collapse');
        } else {
            navbar_dark.classList.remove('top-nav-collapse');
        }
    });
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-login');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
