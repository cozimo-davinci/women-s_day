document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Here's to the women who dare to dream, break boundaries, and redefine what's possible. Happy International Women's Day! May your journey continue to inspire generations.",
        "Cheers to the fearless women who turn obstacles into opportunities and challenges into triumphs. Wishing you a day filled with celebration and recognition of your remarkable achievements.",
        "To the women who light up the world with their strength, resilience, and compassion: may your courage never waver, and your spirit always soar. Happy International Women's Day!",
        "Celebrating the trailblazing women who pave the way for a brighter, more inclusive future. Your determination and grace inspire us all. Happy International Women's Day!",
        "Here's to the women who refuse to be confined by limits, shatter glass ceilings, and lead with purpose. Your empowerment fuels progress and ignites change. Happy International Women's Day!",
        "May your voice be the guiding light that ignites change, your strength the foundation of progress, and your grace the epitome of inspiration. Happy International Women's Day!",
        "Wishing you a day filled with the recognition you deserve, the empowerment you embody, and the love that surrounds you. Happy International Women's Day to a true force of nature!",
        "To the mothers, daughters, sisters, and friends who make our lives brighter every day: thank you for your endless love and support. You are truly appreciated.",
        "You are phenomenal. Keep inspiring! 💐",
        "Wishing you joy, love, and success. 🌺",
        "Wishing all the phenomenal women out there a day filled with love, respect, and appreciation for everything you do. You are the backbone of our society.",
        "May your heart be filled with love, your mind with peace, and your soul with joy. Happy Women's Day to all the extraordinary women out there!",
        "May your journey be filled with love, laughter, and countless blessings. Happy Women's Day to you and all the incredible women in your life!",
        "May you always embrace your uniqueness and celebrate the powerful woman within you. Happy Women's Day!",
        "To the women who inspire us to dream big and reach for the stars, may your light continue to shine bright. Happy Women's Day!",
        "May you always walk with your head held high, knowing your worth and value. Happy Women's Day to all the incredible women out there!",
        "Wishing you a day as beautiful and radiant as you are. Happy Women's Day!",
        "May you always be surrounded by love, respect, and admiration. Happy Women's Day to all the phenomenal women!",
        "Wishing you a day filled with love, laughter, and appreciation for all that you do. Happy Women's Day!",
        "Happy Women's Day to all the incredible women! May you be celebrated today and every day for your strength, grace, and achievements."


    ];


    const quoteDisplay = document.getElementById('quoteDisplay');
    const changeQuoteBtn = document.getElementById('changeQuoteBtn');

    function changeQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }

    changeQuoteBtn.addEventListener('click', changeQuote);

    const images = [
        "assets/img/8-march.png",
        "assets/img/car.png",
        "assets/img/catrina.png",
        "assets/img/diamond-ring.png",
        "assets/img/dress.png",
        "assets/img/flower.png",
        "assets/img/jet.png",
        "assets/img/necklace.png",
        "assets/img/pendant.png",
        "assets/img/tulips.png",
        "assets/img/wedding-ring.png",
        "assets/img/womens-day.png"
    ];

    function createFloatingImage(src) {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('floating-img');
        img.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
        img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        document.querySelector('.floating-img-container').appendChild(img);
        return img;
    }

    function moveHorizontal(img) {
        let direction = 1;
        let xPos = parseInt(img.style.left) || 0;
        const maxX = window.innerWidth - img.width;

        function animate() {
            xPos += direction;
            if (xPos >= maxX || xPos <= 0) {
                direction *= -1;
            }
            img.style.left = `${xPos}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function moveVertical(img) {
        let direction = 1;
        let yPos = parseInt(img.style.top) || 0;
        const maxY = window.innerHeight - img.height;

        function animate() {
            yPos += direction;
            if (yPos >= maxY || yPos <= 0) {
                direction *= -1;
            }
            img.style.top = `${yPos}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function moveDiagonal(img) {
        let xDirection = 1;
        let yDirection = 1;
        let xPos = parseInt(img.style.left) || 0;
        let yPos = parseInt(img.style.top) || 0;
        const maxX = window.innerWidth - img.width;
        const maxY = window.innerHeight - img.height;

        function animate() {
            xPos += xDirection;
            yPos += yDirection;
            if (xPos >= maxX || xPos <= 0) {
                xDirection *= -1;
            }
            if (yPos >= maxY || yPos <= 0) {
                yDirection *= -1;
            }
            img.style.left = `${xPos}px`;
            img.style.top = `${yPos}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function moveCircle(img) {
        let angle = 0;
        const radius = 100;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        function animate() {
            const xPos = centerX + radius * Math.cos(angle);
            const yPos = centerY + radius * Math.sin(angle);
            angle += 0.05;
            img.style.left = `${xPos}px`;
            img.style.top = `${yPos}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function moveRandom(img) {
        let speedX = Math.random() * 2 - 1;
        let speedY = Math.random() * 2 - 1;
        let xPos = parseInt(img.style.left) || 0;
        let yPos = parseInt(img.style.top) || 0;
        const maxX = window.innerWidth - img.width;
        const maxY = window.innerHeight - img.height;

        function animate() {
            xPos += speedX;
            yPos += speedY;
            if (xPos >= maxX || xPos <= 0) {
                speedX *= -1;
            }
            if (yPos >= maxY || yPos <= 0) {
                speedY *= -1;
            }
            img.style.left = `${xPos}px`;
            img.style.top = `${yPos}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function displayFloatingImages() {
        const batch1 = images.slice(0, 4);
        const batch2 = images.slice(4, 8);
        const batch3 = images.slice(8);

        createAndMoveImages(batch1, moveHorizontal);
        createAndMoveImages(batch2, moveVertical);
        createAndMoveImages(batch3, moveDiagonal);
    }

    function createAndMoveImages(imagesBatch, movementFunction) {
        imagesBatch.forEach((src) => {
            const img = createFloatingImage(src);
            movementFunction(img);
        });
    }

    displayFloatingImages();
    function updateFloatingImages() {
        const floatingImages = document.querySelectorAll('.floating-img');
        floatingImages.forEach(img => {
            img.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        });
    }

    setInterval(updateFloatingImages, 5000); // Update every 5 seconds
});