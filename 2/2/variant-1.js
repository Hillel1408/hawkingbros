const lottery = (ms) => {
    return new Promise((resolve, reject) =>
        setTimeout(function () {
            Math.random(0) > 0.5
                ? resolve('Вы выиграли')
                : reject('Вы проиграли');
        }, ms)
    );
};

const play = async () => {
    try {
        console.log('Вы начали игру');
        const result = await lottery(4000);
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('Игра закончена');
    }
};

play();
