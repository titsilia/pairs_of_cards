const form = document.querySelector('.complexity');

const complexity = document.querySelector('.complexity__numbers');

complexity.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    const complexityType = target.classList[0];
    console.log(complexityType);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;
        console.log(target);
        window.location.href = `${complexityType}.html`
        localStorage.setItem('complexity', complexityType);
        console.log(localStorage);
    });
});
