let navList = document.querySelector('.header__nav-list');
let navIcon = document.querySelector('.header__nav-icon');

navIcon.addEventListener('click', function () {
    navList.classList.toggle('_active');
    this.classList.toggle('_active');
    document.body.classList.toggle('lock');
});
