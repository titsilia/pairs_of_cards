const complexity = document.querySelector('.complexity__numbers');

complexity.addEventListener('click', (event) => {
    // event.preventDefault();
    const target = event.target;
    const complexityType = target.classList[0];
    console.log(complexityType);
    if (target.tagName === 'A') {
        window.location.href = `${complexityType}.html`
        localStorage.setItem('complexity', complexityType);
        console.log(localStorage);
    }
});