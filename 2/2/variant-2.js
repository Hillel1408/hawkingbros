const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const play = async () => {
    console.log('Вы начали игру');
    await timeout(4000);
    Math.random(0) > 0.5
        ? console.log('Вы выиграли')
        : console.log('Вы проиграли');
    console.log('Вы закончили игру');
};

play();
