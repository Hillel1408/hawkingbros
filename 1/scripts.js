const loadBtn = document.querySelector('.js-load');
const loadBtnPosts = document.querySelector('.js-load-posts');
const resultsContainer = document.querySelector('.js-results');
const searchInput = document.querySelector('.js-input');
const searchInputPosts = document.querySelector('.js-input-posts');

loadBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (searchInput.value) {
        const searchValue = searchInput.value.trim().toLowerCase();
        fetch(`https://api.github.com/users/${searchValue}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status);
                } else return response.json();
            })
            .then((data) => {
                resultsContainer.innerHTML = '';
                resultsContainer.innerHTML = `<div class="response-container">
                                                <img src="${data.avatar_url}">
                                                <p> Имя: <span>${data.name}</span><p>
                                                <p> О себе: <span>${data.bio}</span><p>
                                                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
                                            </div>`;
            })
            .catch((error) => {
                resultsContainer.innerHTML = `<div class="response-container">
                                                <p>При загрузке данных возникла ${error}</p>
                                            </div>`;
            });
    } else alert('Введите данные для поиска');
});

loadBtnPosts.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (searchInputPosts.value && searchInputPosts.value > 0) {
        const searchValue = searchInputPosts.value;
        const getPosts = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts?userId=${searchValue}`
                );
                resultsContainer.innerHTML = '';
                if (response.data.length > 0) {
                    response.data.map((item) => {
                        resultsContainer.innerHTML =
                            resultsContainer.innerHTML +
                            `<div class="response-container">
                                <p> id пользователя: <span>${item.userId}</span><p>
                                <p> id поста: <span>${item.id}</span><p>
                                <p> Заголовок: <span>${item.title}</span><p>
                                <p> Текст: <span>${item.body}</span><p>
                            </div>`;
                    });
                } else
                    resultsContainer.innerHTML = `<div class="response-container">
                                                    <p>Пусто</p>
                                                </div>`;
            } catch (error) {
                resultsContainer.innerHTML = `<div class="response-container">
                                                <p>При загрузке данных возникла ошибка ${error.response?.status}</p>
                                            </div>`;
            }
        };
        getPosts();
    } else alert('Введите данные для поиска, id пользователя > 0');
});
