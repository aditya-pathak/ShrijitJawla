document.addEventListener('DOMContentLoaded', () => {
    // Add subtle parallax effect to background elements on mouse move
    const bg = document.querySelector('.decorative-bg');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        bg.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });

    // Copy address functionality
    const venueName = document.querySelector('.venue-name');
    if (venueName) {
        const originalText = venueName.innerText;

        venueName.style.cursor = 'pointer';
        venueName.title = 'Click to copy address';

        venueName.addEventListener('click', () => {
            const address = "Hotel Park Palace, Ujjain, Madhya Pradesh";
            navigator.clipboard.writeText(address).then(() => {
                // Visual feedback
                venueName.innerText = "Address Copied!";
                venueName.style.color = '#2ecc71'; // Green color for success

                setTimeout(() => {
                    venueName.innerText = originalText;
                    venueName.style.color = ''; // Reset color
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    // Countdown Timer Logic
    const countdownDate = new Date("December 28, 2025 00:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            // If date is passed
            document.getElementById("countdown").innerHTML = "<div class='time-unit' style='width:100%'><p class='number' style='font-size:1.2rem'>Event Started</p></div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    };

    // Initial call
    updateCountdown();
    // Update every second
    setInterval(updateCountdown, 1000);
});
