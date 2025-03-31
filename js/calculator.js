document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('brineCalculator');
    const resultsDiv = document.getElementById('results');
    const resultsElements = {
        water: document.getElementById('waterAmount'),
        sugar: document.getElementById('sugarAmount'),
        salt: document.getElementById('saltAmount'),
        nitrate: document.getElementById('nitrateAmount'),
        pepper: document.getElementById('pepperAmount')
    };

    // Fun messages for invalid input
    const errorMessages = [
        "Oink! That's not enough bacon! 🐷",
        "Hold your horses! We need a valid weight! 🐴",
        "Holy cow! That's not a number! 🐮",
        "Pig out on proper numbers, please! 🐽"
    ];

    function getRandomErrorMessage() {
        return errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }

    function calculateBrine(weight) {
        // Convert weight to grams for easier calculation
        const weightInGrams = weight * 1000;

        return {
            // 45% water (in ml)
            water: Math.round(weightInGrams * 0.45),
            // 3.5% sugar (in grams)
            sugar: Math.round(weightInGrams * 0.035),
            // 3.5% salt (in grams)
            salt: Math.round(weightInGrams * 0.035),
            // 0.35% nitrate (in grams)
            nitrate: Math.round(weightInGrams * 0.0035),
            // 1% black pepper (in grams)
            pepper: Math.round(weightInGrams * 0.01)
        };
    }

    function animateNumber(element, finalValue, duration = 1000) {
        const startValue = parseInt(element.textContent) || 0;
        const diff = finalValue - startValue;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuad = progress * (2 - progress);
            const currentValue = Math.round(startValue + (diff * easeOutQuad));

            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    function displayResults(results) {
        resultsDiv.classList.remove('hidden');
        // Trigger reflow to restart animation
        void resultsDiv.offsetWidth;
        resultsDiv.classList.add('visible');

        // Animate each number
        Object.entries(results).forEach(([key, value]) => {
            animateNumber(resultsElements[key], value);
        });
    }

    function validateInput(input) {
        const value = parseFloat(input);
        if (isNaN(value) || value <= 0) {
            const errorMessage = getRandomErrorMessage();
            // Create and show error message with animation
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = errorMessage;
            error.style.animation = 'slideIn 0.3s ease-out';
            
            // Remove any existing error messages
            const existingError = form.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            form.insertBefore(error, form.firstChild);
            return false;
        }
        
        // Remove error message if input is valid
        const existingError = form.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        return true;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const weightInput = document.getElementById('baconWeight');
        const weight = parseFloat(weightInput.value);

        if (validateInput(weight)) {
            const results = calculateBrine(weight);
            displayResults(results);
        }
    });
});