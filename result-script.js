window.onload = () => {
    const siteError = document.getElementById('site-error');
    const loveMessage = document.getElementById('love-message');
    const loveYouButton = document.createElement('button'); // Tugmani yaratish
    const sun = document.createElement('div'); // Quyoshni yaratish
    const body = document.body;
    
    loveYouButton.classList.add('love-you-button');
    loveYouButton.innerText = "I Love You Too";
    
    sun.classList.add('sun');

    // "Site is not working" matnini ko'rsatish
    siteError.style.display = 'block';
    body.style.backgroundColor = '#000'; // Foni qora qilish

    // Tugmalarni bosganimizda yomg'ir boshlamasligi uchun boshlashni kechiktiramiz
    let rainStarted = false;

    // 4 sekunddan keyin "Just wanted to tell you I love you" matnini ko'rsatish
    setTimeout(() => {
        siteError.style.display = 'none';
        loveMessage.style.display = 'block'; // Yangi matnni ko'rsatish
        body.appendChild(loveYouButton); // Tugmani sahifaga qo'shish
    }, 4000);

    // Tugma bosilganda quyoshni ko'rsatish va yomg'irni to'xtatish
    loveYouButton.addEventListener('click', () => {
        stopRain(); // Yomg'irni to'xtatish
        body.appendChild(sun); // Quyoshni ko'rsatish
        loveYouButton.style.display = 'none'; // Tugmani yashirish
    });

    // Tugmalarni bosganda yomg'irni boshlamaslik
    document.querySelector('.happy')?.addEventListener('click', () => {
        // Yomg'irni boshlamasin
        if (!rainStarted) {
            startRain(); // Yomg'irni boshlash
            rainStarted = true; // Yomg'ir faqat bir marta boshlanadi
        }
    });

    document.querySelector('.sad')?.addEventListener('click', () => {
        // Yomg'irni boshlamasin
        if (!rainStarted) {
            startRain(); // Yomg'irni boshlash
            rainStarted = true; // Yomg'ir faqat bir marta boshlanadi
        }
    });

    // Yomg'irni boshlash faqat loveMessage chiqgandan keyin
    function startRain() {
        // Yomg'ir tomchilarini faqat loveMessage chiqgandan keyin qo'shamiz
        if (!rainStarted) {
            setTimeout(() => {
                const rainContainer = document.createElement('div');
                rainContainer.classList.add('rain-container');
    
                // Yomg'ir tomchilarini yaratish
                for (let i = 0; i < 200; i++) {
                    const raindrop = document.createElement('div');
                    raindrop.classList.add('rain');
                    raindrop.style.left = `${Math.random() * 100}vw`;
                    raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
                    rainContainer.appendChild(raindrop);
                }
    
                document.body.appendChild(rainContainer);
                rainStarted = true; // Yomg'ir bir marta boshlanadi
            }, 1000); // "loveMessage" chiqgandan keyin yomg'irni boshlash
        }
    }

};

// Yomg'irni to'xtatish
function stopRain() {
    const rainContainer = document.querySelector('.rain-container');
    if (rainContainer) {
        rainContainer.remove(); // Yomg'irni o'chirish
    }
}

// Get the button element
// Get the button element
const button = document.querySelector('button');

// Function to create a heart animation
function createHeart() {
    // Create a heart element
    const heart = document.createElement('span');
    heart.classList.add('heart');
    
    // Randomize heart size (small, normal, or large)
    const sizeClass = Math.random() > 0.5 ? (Math.random() > 0.5 ? 'large' : 'small') : '';
    heart.classList.add(sizeClass);
    
    // Randomly position the heart horizontally
    const xPosition = Math.random() * 100; // Position between 0% and 100%
    const delay = Math.random() * 0.5; // Random delay between 0 and 0.5 seconds for staggering effect
    heart.style.left = `${xPosition}%`;
    
    // Add heart emoji
    heart.textContent = '❤️'; // Heart emoji
    document.body.appendChild(heart);
    
    // Set animation duration randomly
    const animationDuration = 2 + Math.random() * 1.5; // Random duration between 2 and 3.5 seconds
    heart.style.animationDuration = `${animationDuration}s`;

    // Remove heart after animation ends (to prevent clutter)
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000); // 2 to 3.5 seconds
}

// Add event listener to the button
button.addEventListener('click', () => {
    // Trigger heart animation multiple times
    for (let i = 0; i < 15; i++) { // Create 15 hearts with slight delay between them
        setTimeout(createHeart, i * 100);
    }

    // Add the class to the body to change the background color to black and text to white
    document.body.classList.add('black-white-effect');

    // Set a timeout to remove the effect after 1 second
    setTimeout(() => {
        document.body.classList.remove('black-white-effect');
    }, 1000); // 1000 ms = 1 second
});
