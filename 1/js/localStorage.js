export default class storage {
    static getTheme() {
        const theme = localStorage.getItem('theme');

        if (theme) return theme;

        return 'empty';
    }

    static setTheme(theme) {
        localStorage.setItem('theme', theme);
    }
}
