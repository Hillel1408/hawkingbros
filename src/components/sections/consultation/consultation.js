let btnForm = document.querySelector('.consultation__form-btn');
let inputsForm = document.querySelectorAll('.consultation__form-input');

btnForm.addEventListener('click', function (e) {
    e.preventDefault();
    let obj = {};
    inputsForm.forEach((item) => (obj[item.name] = item.value));
    console.log(obj);
});
