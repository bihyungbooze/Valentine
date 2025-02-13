const kawaiImages = [
    'https://media.tenor.com/7YQUKDPb2fsAAAAi/love-couple.gif',
    'https://4kwallpapers.com/images/walls/thumbs_3t/10102.png',
    'https://4kwallpapers.com/images/walls/thumbs_3t/10102.png',
    'https://64.media.tumblr.com/747062436e2060f66805240612f027cc/995a4a98b6e87c23-cd/s540x810/c39df1c302c0e0a6da8074e012f7021099089357.gif'
];

let currentImage = 0;
let noClickCount = 0;
const maxNoClicks = 4;
const responses = [
    "Are you suuuure? I love you very muchhh! ",
    "Think again! It gonna make me sad if you dont say yes! ",
    "Pretty please? Ill swing out my dick if I have to! ",
    "Last chance! Don't make me use my puppy eyes! "
];
let originalNoBtnSize = 18;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const coupleImage = document.getElementById('coupleImage');
const message = document.querySelector('.message');
const successMessage = document.querySelector('.success-message');
const responseText = document.querySelector('.response-text');
const card = document.querySelector('.card');

// Initial button sizes
let yesBtnSize = 1;
let noBtnSize = 1;

// Change image every 3 seconds
setInterval(() => {
    currentImage = (currentImage + 1) % kawaiImages.length;
    coupleImage.src = kawaiImages[currentImage];
}, 3000);

yesBtn.addEventListener('click', () => {
    message.style.display = 'none';
    successMessage.classList.remove('hidden');
    yesBtn.style.animation = 'heartBeat 0.5s infinite';
    
    // Create heart confetti
    createHeartConfetti();
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // More gradual scaling for both buttons
    yesBtnSize = 1 + (noClickCount * 0.15); 
    noBtnSize = Math.max(0.4, 1 - (noClickCount * 0.15)); 
    
    // Apply the scaling transformations
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    noBtn.style.transform = `scale(${noBtnSize})`;
    
    // More gradual size changes for yes button
    const newYesPadding = 10 + (noClickCount * 2); 
    const newYesFontSize = 18 + (noClickCount * 2); 
    yesBtn.style.padding = `${newYesPadding}px ${newYesPadding * 2}px`;
    yesBtn.style.fontSize = `${newYesFontSize}px`;
    
    // More gradual size changes for no button
    const newNoPadding = Math.max(6, 10 - (noClickCount * 1)); 
    const newNoFontSize = Math.max(10, 18 - (noClickCount * 2)); 
    noBtn.style.padding = `${newNoPadding}px ${newNoPadding * 2}px`;
    noBtn.style.fontSize = `${newNoFontSize}px`;
    
    // Show response message
    responseText.textContent = responses[noClickCount - 1];
    responseText.style.animation = 'fadeIn 0.5s ease-out';
    
    if (noClickCount >= maxNoClicks) {
        noBtn.style.display = 'none';
        responseText.textContent = "Now you have no choice but to say yes! 😊💕";
    }
});

function createHeartConfetti() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = '20px';
        heart.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        heart.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.position = 'fixed';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

setInterval(createSparkle, 300);
