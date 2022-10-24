let btnForm = document.querySelector('.consultation__form-btn');
let inputsForm = document.querySelectorAll('.consultation__form-input');

btnForm.addEventListener('click', function (e) {
    e.preventDefault();
    let data = [];
    inputsForm.forEach((item) => {
        let obj = {
            name: '',
            value: '',
        };
        obj.name = item.name;
        obj.value = item.value;
        data.push(obj);
    });
    console.log(data); //отправляем данные на сервер (у нас в консоль)
});
