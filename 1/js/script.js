import storage from './localStorage.js';

const btn = document.querySelector('.btn');

const contentLoadedHandler = () => {
    const theme = storage.getTheme();

    if (theme !== 'empty') {
        document.body.setAttribute('data-theme', theme);
        theme === 'dark'
            ? (btn.innerHTML = 'Поменять тему на светлую')
            : (btn.innerHTML = 'Поменять тему на темную');
    }
};

const toggleTheme = (theme, text) => {
    document.body.setAttribute('data-theme', theme);
    storage.setTheme(theme);
    btn.innerHTML = `Поменять тему на ${text}`;
};

btn.addEventListener('click', function () {
    const theme = document.body.getAttribute('data-theme');

    theme === 'dark'
        ? toggleTheme('light', 'темную')
        : toggleTheme('dark', 'светлую');
});

document.addEventListener('DOMContentLoaded', contentLoadedHandler);
