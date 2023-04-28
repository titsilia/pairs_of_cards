const main = document.querySelector(".main__firstcreen");
const form = document.querySelector(".complexity");

const inputs = document.querySelectorAll(".complexity__inputs");
console.log(inputs);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const target = event.target;
    console.log(target);

    const complexityInput = document.querySelector(
        ".complexity__inputs:checked"
    );
    console.log(complexityInput);

    const complexityType = complexityInput.value;
    console.log(complexityType);

    localStorage.setItem("complexity", complexityType);
    console.log(localStorage);
    renderScreen();
});

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

    const cards = document.querySelector(".cards");

    if (localStorage.getItem("complexity") === "lowlvl") {
        for (let i = 1; i <= 6; i++) {
            renderCards();
        }
        setTimeout(reverseCards, 3000);
    }

    if (localStorage.getItem("complexity") === "middlelvl") {
        for (let i = 1; i <= 12; i++) {
            renderCards();
        }
        setTimeout(reverseCards, 3000);
    }

    if (localStorage.getItem("complexity") === "highlvl") {
        for (let i = 1; i <= 18; i++) {
            renderCards();
        }
        setTimeout(reverseCards, 3000);
    }

    function renderCards() {
        const cardsImg = document.createElement("img");
        cardsImg.classList.add("cards__img");
        cardsImg.setAttribute("src", "./img/9c.svg");
        cards.appendChild(cardsImg);
    }

    function reverseCards() {
        const cardsImg = document.querySelectorAll(".cards__img");
        cardsImg.forEach((img) => {
            img.setAttribute("src", "./img/rubashka.svg");
        });
    }
}
