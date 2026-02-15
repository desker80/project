
const drawButton = document.getElementById('draw-button');
const numbersContainer = document.querySelector('.numbers');

drawButton.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    numbersContainer.innerHTML = '';
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    for (const number of sortedNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    }
});
