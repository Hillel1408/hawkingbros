const loadBtn = document.querySelector('.js-load');
const resultsContainer = document.querySelector('.js-results');
const searchInput = document.querySelector('.js-input');

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

const validateInput = (value) => {
    try {
        if (!value) throw new CustomError('Error: Поле пустое');
        if (isNaN(value))
            throw new CustomError(
                'Error: Текстовое содержимое не является числом'
            );
        if (value < 5 || value > 10)
            throw new CustomError('Error: Значение меньше 5 или больше 10');
    } catch (error) {
        if (error.name === 'CustomError')
            resultsContainer.innerHTML = `${error.message}`;
        else throw error;
    }
};

loadBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    try {
        validateInput(searchInput.value);
    } catch (error) {
        resultsContainer.innerHTML = error;
    }
});
