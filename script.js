window.onload = () => {
    const happyButton = document.getElementById('happy-button');
    const sadButton = document.getElementById('sad-button');

    // Foydalanuvchi kayfiyatini tanlashi uchun
    happyButton.addEventListener('click', () => {
        window.location.href = 'result.html?mood=happy'; // Happy bo'lsa result sahifasiga yuboradi
    });

    sadButton.addEventListener('click', () => {
        window.location.href = 'result.html?mood=sad'; // Sad bo'lsa result sahifasiga yuboradi
    });
};
