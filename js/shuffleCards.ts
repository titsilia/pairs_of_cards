// функция перемешивания массива
export function shuffleCards(array: Array<string>) {
    array.sort(() => Math.random() - 0.5);
}
