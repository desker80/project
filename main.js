
document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const numbersContainer = document.querySelector('.numbers');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // --- Theme Toggle Functionality (runs on all pages) ---
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        if (themeToggleButton) {
            themeToggleButton.textContent = theme === 'dark' ? '라이트 모드' : '다크 모드';
        }
        localStorage.setItem('theme', theme);
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);


    // --- Lotto Drawing Functionality (runs only on index.html) ---
    if (drawButton && numbersContainer) {
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
    }
});
