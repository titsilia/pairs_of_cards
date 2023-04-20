const form = document.querySelector('.complexity');

const inputs = document.querySelectorAll('.complexity__inputs');
console.log(inputs);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const target = event.target;
        console.log(target);

        const complexityInput = document.querySelector('.complexity__inputs:checked');
        // complexityInput.classList.add('checked');
        console.log(complexityInput);

        const complexityType = complexityInput.value;
        console.log(complexityType);


        // window.location.href = `${complexityType}.html`
        localStorage.setItem('complexity', complexityType);
        console.log(localStorage);
    });
