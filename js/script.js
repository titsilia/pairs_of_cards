import { templateEngine } from "/js/template.js";
import "../css/style.css";

// работа с первым экраном
const main = document.querySelector(".main__firstcreen");
const form = document.querySelector(".complexity");

const button = document.querySelector(".complexity__button");

// запись выбранного значения в local
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // присваеваем переменной выбранные значения
    const complexityInput = document.querySelector(
        ".complexity__inputs:checked"
    );

    // что делать, если пользователь выбрал сложность
    if (complexityInput) {
        const complexityType = complexityInput.value;

        localStorage.setItem("complexity", complexityType);

        renderScreen();
    } else {
        // что делать, если не выбрал
        alert("Сначала выберите значение!");
    }
});

// отрисовка элементов второго экрана игры
function renderScreen() {
    main.remove();

    function templateCards() {
        return {
            tag: "section",
            cls: ["main", "center"],
            content: [
                {
                    tag: "div",
                    cls: "top",
                    content: [
                        {
                            tag: "div",
                            cls: "top__times",
                            content: [
                                {
                                    tag: "div",
                                    cls: "top__texts",
                                    content: [
                                        {
                                            tag: "p",
                                            cls: "top__texts_text",
                                            content: "min",
                                        },
                                        {
                                            tag: "p",
                                            cls: "top__texts_text",
                                            content: "sek",
                                        },
                                    ],
                                },
                                {
                                    tag: "p",
                                    cls: "top__time",
                                    content: "00.00",
                                },
                            ],
                        },
                        {
                            tag: "button",
                            cls: ["top__button", "buttons"],
                            content: "Начать заново",
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: "cards",
                },
            ],
        };
    }

    const tempCards = templateEngine(templateCards());
    document.body.appendChild(tempCards);

    const mainPlay = document.querySelector(".main");

    const cards = document.querySelector(".cards");
    const buttonReplay = document.querySelector(".top__button");

    // создаём массив с картинками карт
    const CARDS = [
        "/static/img/6c.svg",
        "/static/img/6d.svg",
        "/static/img/6h.svg",
        "/static/img/6s.svg",
        "/static/img/7c.svg",
        "/static/img/7d.svg",
        "/static/img/7h.svg",
        "/static/img/7s.svg",
        "/static/img/8c.svg",
        "/static/img/8d.svg",
        "/static/img/8h.svg",
        "/static/img/8s.svg",
        "/static/img/9c.svg",
        "/static/img/9d.svg",
        "/static/img/9h.svg",
        "/static/img/9s.svg",
        "/static/img/10c.svg",
        "/static/img/10d.svg",
        "/static/img/10h.svg",
        "/static/img/10s.svg",
        "/static/img/Ac.svg",
        "/static/img/Ad.svg",
        "/static/img/Ah.svg",
        "/static/img/As.svg",
        "/static/img/Jc.svg",
        "/static/img/Jd.svg",
        "/static/img/Jh.svg",
        "/static/img/Js.svg",
        "/static/img/Kc.svg",
        "/static/img/Kd.svg",
        "/static/img/Kh.svg",
        "/static/img/Ks.svg",
        "/static/img/Qc.svg",
        "/static/img/Qd.svg",
        "/static/img/Qh.svg",
        "/static/img/Qs.svg",
    ];

    // записываем количество карт, которые нужно отрисовать при опр. уровне
    const level = {
        lowlvl: 6,
        middlelvl: 12,
        highlvl: 18,
    };

    // функционал кнопки Начать заново
    buttonReplay.addEventListener("click", (event) => {
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }

        for (let i = 1; i <= 2; i++) {
            renderCards();
        }
        setTimeout(reverseCards, 5000);
    });

    // массив для готовых карт
    let imgCards = [];

    // массив выбранных карт
    let resultCards = [];

    // вызов функции получения массива карт
    gerArrayCards();

    // отрисовка всех карт 2 раза и переворот
    for (let i = 1; i <= 2; i++) {
        renderCards();
    }
    setTimeout(reverseCards, 3000);
    console.log(imgCards);

    // функция для получения массива карт
    function gerArrayCards() {
        shuffleCards(CARDS);

        // берём нужное количество карт
        let cardsRender = CARDS.slice(
            1,
            level[localStorage.getItem("complexity")] / 2 + 1
        );

        // перемешиваем массив с нужным колвом карт
        shuffleCards(cardsRender);

        window.cardsRenders = cardsRender;
    }

    // функция отрисовки карт
    function renderCards() {
        shuffleCards(window.cardsRenders);

        window.cardsRenders.forEach((card) => {
            // создаём элемент img и добавляем классы
            const cardsImg = document.createElement("img");
            cardsImg.classList.add("cards__img");

            // добавляем в элемент картинку
            cardsImg.setAttribute("src", card);
            cardsImg.setAttribute("id", card);

            imgCards.push(cardsImg);

            cards.appendChild(cardsImg);
        });
    }

    // функция переворачивания карт
    function reverseCards() {
        const cardsImg = document.querySelectorAll(".cards__img");
        cardsImg.forEach((img) => {
            img.setAttribute("src", "/static/img/rubashka.svg");
        });
    }

    // функция перемешивания массива
    function shuffleCards(array) {
        array.sort(() => Math.random() - 0.5);
    }

    // логика переворачивания и сравнения карт

    // вызов функции по клику
    cards.addEventListener("click", (event) => {
        const target = event.target;

        handleClickCards(target);
    });

    // функция записи значения карт в массив
    function handleClickCards(target) {
        target.setAttribute("src", `${target.id}`);

        if (!window.firstCard) {
            window.firstCard = target.id;
            console.log(window.firstCard);
        } else {
            window.secondCart = target.id;
            console.log(window.secondCart);
        }

        gameResult();
    }

    // функция вывода результата
    function gameResult() {
        console.log("запуск функции");
        if (window.firstCard && window.secondCart) {
            console.log("запуск сравнения");
            if (window.firstCard === window.secondCart) {
                console.log("они равны");
                resultCards.push(firstCard);
                resultCards.push(secondCart);

                if (resultCards.length === imgCards.length) {
                    console.log("экран выигрыша");
                    window.resultImg = "/static/img/win.svg";
                    window.textResult = "Вы выиграли!";
                    renderResultScreen();
                }
            } else {
                console.log("экран проигрыша!");
                window.resultImg = "/static/img/lose.svg";
                window.textResult = "Вы проиграли!";
                renderResultScreen();
            }

            window.firstCard = null;
            window.secondCart = null;
        }
    }

    // экран конца игры
    function renderResultScreen() {
        function templateResult() {
            return {
                tag: "div",
                cls: "result",
                content: [
                    {
                        tag: "img",
                        cls: "result__img",
                        attrs: {
                            src: window.resultImg,
                        },
                    },
                    {
                        tag: "p",
                        cls: "result__title",
                        content: window.textResult,
                    },
                    {
                        tag: "p",
                        cls: "result__text",
                        content: "Затраченное время:",
                    },
                    {
                        tag: "p",
                        cls: "result__time",
                        content: "1.20",
                    },
                    {
                        tag: "button",
                        cls: ["top__button", "buttons", "btn_reload"],
                        content: "Играть снова",
                    },
                ],
            };
        }

        const tempResult = templateEngine(templateResult());
        document.body.appendChild(tempResult);

        mainPlay.classList.add("opacity");
        buttonReplay.setAttribute("disabled", "disabled");

        const reloadButton = document.querySelector(".btn_reload");
        reloadButton.addEventListener("click", (event) => {
            location.reload();
        });
    }
}
