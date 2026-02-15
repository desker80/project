
const drawButton = document.getElementById('draw-button');
const numbersContainer = document.querySelector('.numbers');
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
const setTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleButton.textContent = theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경';
};

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});


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
